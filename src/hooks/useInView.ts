import { useEffect, useRef, useState } from 'react'

export function useInView<T extends HTMLElement>(
  options?: IntersectionObserverInit,
): { ref: React.RefObject<T | null>; inView: boolean } {
  const ref = useRef<T | null>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (node === null) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry?.isIntersecting) {
        setInView(true)
        observer.disconnect()
      }
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12, ...options })
    observer.observe(node)
    return () => {
      observer.disconnect()
    }
  }, [options])

  return { ref, inView }
}
