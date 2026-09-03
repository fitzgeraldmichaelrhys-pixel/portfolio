"""Capture live Mimir Portal + CLI screenshots into the portfolio public folder."""

from __future__ import annotations

import ctypes
import os
import subprocess
import sys
import time
from ctypes import wintypes
from pathlib import Path

PORTFOLIO = Path(__file__).resolve().parent.parent
OUT = PORTFOLIO / "public" / "work"
MIMIR = Path(r"C:\Users\batma\OneDrive\Desktop\Mimir\mimir-portal")
VENV_PY = MIMIR / ".venv" / "Scripts" / "python.exe"
CREATE_NEW_CONSOLE = 0x00000010
SW_RESTORE = 9

user32 = ctypes.WinDLL("user32", use_last_error=True)
user32.EnumWindows.argtypes = [ctypes.WINFUNCTYPE(ctypes.c_bool, wintypes.HWND, wintypes.LPARAM), wintypes.LPARAM]
user32.GetWindowTextLengthW.argtypes = [wintypes.HWND]
user32.GetWindowTextW.argtypes = [wintypes.HWND, wintypes.LPWSTR, ctypes.c_int]
user32.IsWindowVisible.argtypes = [wintypes.HWND]
user32.GetWindowRect.argtypes = [wintypes.HWND, ctypes.POINTER(wintypes.RECT)]
user32.ShowWindow.argtypes = [wintypes.HWND, ctypes.c_int]
user32.SetForegroundWindow.argtypes = [wintypes.HWND]
user32.MoveWindow.argtypes = [wintypes.HWND, ctypes.c_int, ctypes.c_int, ctypes.c_int, ctypes.c_int, ctypes.c_bool]


def freeze_cli() -> None:
    os.chdir(MIMIR)
    sys.path.insert(0, str(MIMIR))
    ctypes.windll.kernel32.SetConsoleTitleW("Mimir Console")
    os.system("mode con: cols=92 lines=46")
    os.system("color 0F")

    import console

    console._enable_ansi()
    extra = "Phone  http://127.0.0.1:8000/dashboard"
    console.header(console.get_state(), extra)
    console.info_block()
    console.menu_block()
    print(" " * (console.gutter() + 3) + console.c("mimir> ", "violet"), end="", flush=True)
    time.sleep(90)


def find_hwnd(title: str) -> int | None:
    found: list[int] = []
    proc = ctypes.WINFUNCTYPE(ctypes.c_bool, wintypes.HWND, wintypes.LPARAM)

    def callback(hwnd: int, _lparam: int) -> bool:
        length = user32.GetWindowTextLengthW(hwnd) + 1
        buf = ctypes.create_unicode_buffer(length)
        user32.GetWindowTextW(hwnd, buf, length)
        if title in buf.value and user32.IsWindowVisible(hwnd):
            found.append(hwnd)
        return True

    cb = proc(callback)
    user32.EnumWindows(cb, 0)
    return found[0] if found else None


def grab_window(title: str, dest: Path) -> None:
    from PIL import ImageGrab

    ctypes.windll.user32.SetProcessDPIAware()
    hwnd = None
    for _ in range(40):
        hwnd = find_hwnd(title)
        if hwnd:
            break
        time.sleep(0.25)
    if not hwnd:
        raise RuntimeError(f"Could not find window titled {title!r}")

    user32.ShowWindow(hwnd, SW_RESTORE)
    user32.MoveWindow(hwnd, 60, 40, 980, 820, True)
    time.sleep(0.4)
    user32.SetForegroundWindow(hwnd)
    time.sleep(0.5)

    rect = wintypes.RECT()
    user32.GetWindowRect(hwnd, ctypes.byref(rect))
    img = ImageGrab.grab(bbox=(rect.left, rect.top, rect.right, rect.bottom))
    img.save(dest, "PNG")
    print(f"wrote {dest} ({img.size[0]}x{img.size[1]})")


def redact_portal(page) -> None:
    page.evaluate(
        """
        () => {
          const ip = document.getElementById('ipLabel');
          if (ip) ip.textContent = '127.0.0.1';
          const phone = document.getElementById('phoneUrl');
          if (phone) phone.textContent = 'http://127.0.0.1:8000/dashboard';
          document.querySelectorAll('p, .note, .lead, .hint').forEach((el) => {
            el.innerHTML = el.innerHTML.replace(/uncensored\\s*/gi, '');
          });
        }
        """
    )


def capture_portal() -> None:
    from playwright.sync_api import sync_playwright

    with sync_playwright() as p:
        browser = p.chromium.launch(channel="chrome", headless=True)
        page = browser.new_page(
            viewport={"width": 1600, "height": 980},
            device_scale_factor=2,
        )
        page.goto("http://127.0.0.1:8000/dashboard", wait_until="domcontentloaded", timeout=30000)
        page.wait_for_timeout(2800)
        page.wait_for_function(
            """() => {
              const t = document.getElementById('statePillText');
              return t && t.textContent && t.textContent.trim() !== '—' && t.textContent.trim() !== '';
            }""",
            timeout=15000,
        )
        page.wait_for_timeout(800)
        redact_portal(page)
        page.screenshot(path=str(OUT / "mimir-portal.png"), type="png")
        print("wrote portal HQ")

        cursor = page.locator("#modeCursor")
        if cursor.count():
            cursor.click()
            page.wait_for_timeout(900)
            redact_portal(page)
            page.screenshot(path=str(OUT / "mimir-portal-cursor.png"), type="png")
            print("wrote portal Cursor workspace")
        browser.close()


def capture_cli() -> None:
    proc = subprocess.Popen(
        [str(VENV_PY if VENV_PY.exists() else sys.executable), str(Path(__file__).resolve()), "--cli-freeze"],
        cwd=str(MIMIR),
        creationflags=CREATE_NEW_CONSOLE,
        env={**os.environ, "PYTHONIOENCODING": "utf-8", "PYTHONUNBUFFERED": "1"},
    )
    try:
        time.sleep(2.2)
        grab_window("Mimir Console", OUT / "mimir-cli.png")
    finally:
        proc.terminate()
        try:
            proc.wait(timeout=3)
        except subprocess.TimeoutExpired:
            proc.kill()


def main() -> None:
    if "--cli-freeze" in sys.argv:
        freeze_cli()
        return
    OUT.mkdir(parents=True, exist_ok=True)
    capture_portal()
    capture_cli()


if __name__ == "__main__":
    main()
