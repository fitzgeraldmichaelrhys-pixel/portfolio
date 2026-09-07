"""Generate an ATS-safe, account-manager-first CV with portfolio colour."""

from __future__ import annotations

import json
from pathlib import Path

from reportlab.lib.colors import HexColor
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.platypus import (
    Flowable,
    KeepTogether,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
)

ROOT = Path(__file__).resolve().parent.parent
KPI_FILE = ROOT / "src" / "content" / "kpis.json"
OUT_PDF = ROOT / "public" / "Michael_Fitzgerald_CV.pdf"
OUT_DIR = ROOT / "public" / "work"

INK = HexColor("#152028")
MUTED = HexColor("#5c676f")
TEAL = HexColor("#0f5c66")
TEAL_DEEP = HexColor("#0a454c")
COPPER = HexColor("#b86a3d")
RULE = HexColor("#d5ddd8")
WASH = HexColor("#eef4f2")

PAGE_W, PAGE_H = A4
STRIPE = 5.5 * mm


class SectionHead(Flowable):
    def __init__(self, text: str) -> None:
        super().__init__()
        self.text = text.upper()

    def wrap(self, avail_width: float, avail_height: float) -> tuple[float, float]:
        self.width = avail_width
        return avail_width, 16

    def draw(self) -> None:
        self.canv.setFillColor(TEAL)
        self.canv.setFont("Helvetica-Bold", 9.5)
        self.canv.drawString(0, 7, self.text)
        tw = self.canv.stringWidth(self.text, "Helvetica-Bold", 9.5)
        self.canv.setStrokeColor(COPPER)
        self.canv.setLineWidth(2)
        self.canv.line(0, 3, max(28 * mm, tw), 3)


class JobRule(Flowable):
    def wrap(self, avail_width: float, avail_height: float) -> tuple[float, float]:
        self.width = avail_width
        return avail_width, 8

    def draw(self) -> None:
        self.canv.setStrokeColor(RULE)
        self.canv.setLineWidth(0.5)
        self.canv.setDash(1, 2)
        self.canv.line(0, 4, self.width, 4)
        self.canv.setDash()


def styles() -> dict[str, ParagraphStyle]:
    base = getSampleStyleSheet()
    return {
        "kicker": ParagraphStyle(
            "Kicker",
            parent=base["Normal"],
            fontName="Helvetica-Bold",
            fontSize=8.5,
            leading=11,
            textColor=COPPER,
            alignment=TA_LEFT,
            spaceAfter=1.5 * mm,
        ),
        "name": ParagraphStyle(
            "Name",
            parent=base["Normal"],
            fontName="Helvetica-Bold",
            fontSize=22,
            leading=26,
            textColor=TEAL_DEEP,
            alignment=TA_LEFT,
            spaceAfter=1.5 * mm,
        ),
        "headline": ParagraphStyle(
            "Headline",
            parent=base["Normal"],
            fontName="Helvetica-Bold",
            fontSize=11.5,
            leading=15,
            textColor=INK,
            alignment=TA_LEFT,
            spaceAfter=3.2 * mm,
        ),
        "contact": ParagraphStyle(
            "Contact",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=9,
            leading=12.4,
            textColor=MUTED,
            alignment=TA_LEFT,
            spaceAfter=0.6 * mm,
        ),
        "body": ParagraphStyle(
            "Body",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=10,
            leading=13.6,
            textColor=INK,
            alignment=TA_LEFT,
            spaceAfter=1.5 * mm,
        ),
        "role": ParagraphStyle(
            "Role",
            parent=base["Normal"],
            fontName="Helvetica-Bold",
            fontSize=11,
            leading=14,
            textColor=INK,
            spaceAfter=0.4 * mm,
        ),
        "company": ParagraphStyle(
            "Company",
            parent=base["Normal"],
            fontName="Helvetica-Bold",
            fontSize=10,
            leading=13,
            textColor=TEAL,
            spaceAfter=0.3 * mm,
        ),
        "meta": ParagraphStyle(
            "Meta",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=9,
            leading=12,
            textColor=MUTED,
            spaceAfter=1.6 * mm,
        ),
        "bullet": ParagraphStyle(
            "Bullet",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=10,
            leading=13.3,
            textColor=INK,
            leftIndent=4.2 * mm,
            firstLineIndent=-3.2 * mm,
            spaceAfter=0.72 * mm,
        ),
        "label": ParagraphStyle(
            "Label",
            parent=base["Normal"],
            fontName="Helvetica-Bold",
            fontSize=9.5,
            leading=12.5,
            textColor=TEAL,
            spaceAfter=0.7 * mm,
        ),
        "skill": ParagraphStyle(
            "Skill",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=10,
            leading=13.4,
            textColor=INK,
            spaceAfter=2 * mm,
        ),
    }


def load_kpis() -> tuple[list[dict], list[dict]]:
    payload = json.loads(KPI_FILE.read_text(encoding="utf-8"))
    items = payload["items"]
    confirmed = [row for row in items if row.get("confirmed")]
    extra = [row for row in items if not row.get("confirmed")]
    return confirmed, extra


def kpi_sentence(rows: list[dict]) -> str:
    return "; ".join(f'{row["value"]} {row["label"]}' for row in rows)


def bullet(text: str, s: dict[str, ParagraphStyle]) -> Paragraph:
    return Paragraph(f"- {text}", s["bullet"])


def section(title: str, extra_before: float = 3.6) -> list:
    return [Spacer(1, extra_before * mm), SectionHead(title), Spacer(1, 2.4 * mm)]


def decorate(canvas, _doc) -> None:
    canvas.saveState()
    canvas.setFillColor(TEAL)
    canvas.rect(0, 0, STRIPE, PAGE_H, fill=1, stroke=0)
    canvas.setFillColor(COPPER)
    canvas.rect(STRIPE, PAGE_H - 3.2 * mm, PAGE_W - STRIPE, 3.2 * mm, fill=1, stroke=0)
    canvas.setFillColor(WASH)
    canvas.rect(STRIPE, 0, PAGE_W - STRIPE, 6 * mm, fill=1, stroke=0)
    canvas.restoreState()


def build() -> None:
    s = styles()
    confirmed, extra = load_kpis()
    doc = SimpleDocTemplate(
        str(OUT_PDF),
        pagesize=A4,
        leftMargin=18 * mm,
        rightMargin=16 * mm,
        topMargin=13 * mm,
        bottomMargin=12 * mm,
        title="Michael Fitzgerald - Account Manager CV",
        author="Michael Fitzgerald",
        subject="Account Manager CV - fintech and B2B",
    )
    story: list = []

    story.append(Paragraph("ACCOUNT MANAGER  |  FINTECH AND B2B", s["kicker"]))
    story.append(Paragraph("Michael Fitzgerald", s["name"]))
    story.append(
        Paragraph(
            "Account management, pipeline, and client relationships at Revolut and PayPal.",
            s["headline"],
        )
    )
    story.append(
        Paragraph(
            "Galway, Ireland &nbsp;&nbsp;|&nbsp;&nbsp; +353 89 943 8384 &nbsp;&nbsp;|&nbsp;&nbsp; "
            "Mikeyfitz2021@gmail.com",
            s["contact"],
        )
    )
    story.append(
        Paragraph(
            "LinkedIn: https://www.linkedin.com/in/michael-fitzgerald-42abab206/",
            s["contact"],
        )
    )
    story.append(
        Paragraph(
            "GitHub: https://github.com/fitzgeraldmichaelrhys-pixel &nbsp;&nbsp;|&nbsp;&nbsp; "
            "AuditPack: https://getauditpack.com",
            s["contact"],
        )
    )
    story.append(Spacer(1, 3.2 * mm))
    story.append(JobRule())

    story.extend(section("Professional Summary", extra_before=1.2))
    story.append(
        Paragraph(
            "Account manager with more than five years in business development, lead generation, "
            "and account support across fintech and B2B. Most recently a Junior Account Executive "
            "at Revolut and a Business Development Representative at PayPal, after leading a "
            "lead-generation team at IDG Direct. On the PayPal desk: "
            + kpi_sentence(confirmed)
            + ". I run client meetings, keep CRM records clean, help onboard new "
            "accounts, and stay on the phone until the follow-up is done.",
            s["body"],
        )
    )

    story.extend(section("Experience"))

    jobs = [
        (
            "Junior Account Executive",
            "Revolut",
            "Galway, Ireland  |  09/2025 - 03/2026",
            [
                "Worked with senior Account Managers to set up and run client meetings across a B2B fintech book of accounts.",
                "Supported day-to-day account management: follow-ups, stakeholder coordination, and keeping the next conversation moving.",
                "Kept Customer Relationship Management (CRM) records accurate so account history and pipeline stayed visible to the team.",
                "Helped onboard new clients and sat through product training so I could answer account questions without handing every query up.",
            ],
        ),
        (
            "Business Development Representative",
            "PayPal",
            "Galway, Ireland  |  03/2024 - 09/2025",
            [
                kpi_sentence(confirmed) + ".",
                kpi_sentence(extra) + ".",
                "Owned outbound pipeline: cold calling, email outreach, and networking events aimed at prospective B2B clients.",
                "Backed the account management team by taking client inquiries on phone and email and closing the loop quickly.",
            ],
        ),
        (
            "Lead Generation Team Lead",
            "IDG Direct",
            "Galway, Ireland  |  02/2021 - 01/2022",
            [
                "Ran daily operations for a lead generation team: priorities, task assignment, and keeping the floor moving.",
                "Coached and trained new hires on outreach quality, not just activity volume.",
                "Tracked performance against company targets and stepped in when a number was slipping.",
            ],
        ),
        (
            "Lead Generator",
            "IDG Direct",
            "Galway, Ireland  |  01/2020 - 02/2021",
            [
                "Generated leads through targeted outreach and direct, clear communication.",
                "Researched prospective accounts on online tools and databases before the call.",
            ],
        ),
    ]

    for index, (title, company, dates, bullets) in enumerate(jobs):
        block = []
        if index:
            block.append(JobRule())
            block.append(Spacer(1, 1.6 * mm))
        block.extend(
            [
                Paragraph(title, s["role"]),
                Paragraph(company, s["company"]),
                Paragraph(dates, s["meta"]),
                *[bullet(item, s) for item in bullets],
            ]
        )
        story.append(KeepTogether(block))

    story.extend(section("Skills"))
    story.append(Paragraph("Account management and commercial", s["label"]))
    story.append(
        Paragraph(
            "Account management, Account executive, Business development, Lead generation, "
            "Client onboarding, Customer Relationship Management (CRM), Pipeline management, "
            "B2B sales, Fintech, Cold outreach, Relationship management, Market research, "
            "Stakeholder coordination",
            s["skill"],
        )
    )
    story.append(Paragraph("Programming", s["label"]))
    story.append(
        Paragraph(
            "TypeScript, JavaScript, Python, C, SQL, React, Node.js, FastAPI, Git.",
            s["skill"],
        )
    )

    story.extend(section("Selected projects"))
    story.append(
        KeepTogether(
            [
                Paragraph("AuditPack - live compliance SaaS", s["role"]),
                Paragraph(
                    "Personal project  |  https://getauditpack.com  |  TypeScript, React, Node.js, Stripe",
                    s["meta"],
                ),
                bullet(
                    "Shipped a live B2B product for ISO documentation: interface, REST API, authentication, payments, and deploys.",
                    s,
                ),
            ]
        )
    )
    story.append(
        KeepTogether(
            [
                Paragraph("Mimir - self-hosted GPU workspace", s["role"]),
                Paragraph(
                    "Personal project  |  Python, FastAPI, AWS EC2, Docker",
                    s["meta"],
                ),
                bullet(
                    "Built the control plane for an AWS GPU box, with cost tracking, a dashboard, a CLI, and an OpenAI-compatible API for Cursor.",
                    s,
                ),
            ]
        )
    )

    story.extend(section("Education"))
    story.append(
        KeepTogether(
            [
                Paragraph("Bachelor of Science in Computer Science", s["role"]),
                Paragraph(
                    "IU University of Applied Sciences, Germany  |  Expected 09/2028",
                    s["meta"],
                ),
                Paragraph("High School Diploma", s["role"]),
                Paragraph(
                    "St Enda's Community School, Limerick, Ireland  |  2016",
                    s["meta"],
                ),
            ]
        )
    )

    doc.build(story, onFirstPage=decorate, onLaterPages=decorate)
    print(f"wrote {OUT_PDF}")


def render_previews() -> None:
    import pymupdf

    pdf = pymupdf.open(OUT_PDF)
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    for i, page in enumerate(pdf, start=1):
        pix = page.get_pixmap(matrix=pymupdf.Matrix(2, 2), alpha=False)
        dest = OUT_DIR / f"cv-page-{i}.png"
        pix.save(dest)
        print(f"wrote {dest} ({pix.width}x{pix.height})")
    pdf.close()


if __name__ == "__main__":
    build()
    render_previews()
