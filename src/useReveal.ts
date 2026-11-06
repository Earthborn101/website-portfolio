import { useEffect, useRef } from 'react'

export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (reducedMotion.matches) {
      node.querySelectorAll('.reveal').forEach((el) => {
        el.classList.add('is-visible')
      })
      return
    }

    let prevScrollY = window.scrollY
    let scrollingDown = true

    const onScroll = () => {
      const y = window.scrollY
      scrollingDown = y >= prevScrollY
      prevScrollY = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const el = entry.target
          if (entry.isIntersecting) {
            el.classList.toggle('from-above', !scrollingDown)
            el.classList.toggle('from-below', scrollingDown)
            // Force a reflow so the enter direction applies before fade-in.
            void (el as HTMLElement).offsetWidth
            el.classList.add('is-visible')
          } else {
            el.classList.remove('is-visible')
          }
        }
      },
      { threshold: 0.14, rootMargin: '0px 0px -6% 0px' },
    )

    const targets = node.querySelectorAll('.reveal')
    targets.forEach((el) => observer.observe(el))

    return () => {
      window.removeEventListener('scroll', onScroll)
      observer.disconnect()
    }
  }, [])

  return ref
}
