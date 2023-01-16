import { useEffect, useRef, useState } from 'react'

import './App.css'

const App = () => {
  const ref = useRef<HTMLDivElement>(null)
  const menuRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            menuRef.current?.querySelectorAll('.link').forEach((link) => {
              const linkHref = link.getAttribute('href')?.replace('#', '')

              if (linkHref === entry.target.id) {
                link.classList.add('active')
              } else {
                link.classList.remove('active')
              }
            })
          }
        })
      },
      {
        threshold: 1,
      },
    )

    ref.current?.querySelectorAll('.section').forEach((section) => {
      observer.observe(section)
    })
  }, [])

  useEffect(() => {
    menuRef.current?.addEventListener('click', (e) => {
      const el = e.target as HTMLLinkElement

      if (el.classList.contains('link')) {
        e.preventDefault()
        const sectionId = el.getAttribute('href')?.replace('#', '')
        if (sectionId) {
          window.scrollTo({
            top: document.getElementById(sectionId)!.offsetTop,
            behavior: 'smooth',
          })
        }
      }
    })
  }, [])

  return (
    <div className='container'>
      <nav className='menu'>
        <div className='progress-wrapper'>
          <div className='progress'>
            <div className='progress-bar'></div>
          </div>
        </div>
        <ul ref={menuRef}>
          <li>
            <a href='#section1' className='link'>
              Section 1
            </a>
          </li>
          <li>
            <a href='#section2' className='link'>
              Section 2
            </a>
          </li>
          <li>
            <a href='#section3' className='link'>
              Section 3
            </a>
          </li>
          <li>
            <a href='#section4' className='link'>
              Section 4
            </a>
          </li>
          <li>
            <a href='#section5' className='link'>
              Section 5
            </a>
          </li>
          <li>
            <a href='#section6' className='link'>
              Section 6
            </a>
          </li>
          <li>
            <a href='#section7' className='link'>
              Section 7
            </a>
          </li>
        </ul>
      </nav>
      <div ref={ref} className='content'>
        <div className='section' id='section1'>
          section 1
        </div>
        <div className='section' id='section2'>
          section 2
        </div>
        <div className='section' id='section3'>
          section 3
        </div>
        <div className='section' id='section4'>
          section 4
        </div>
        <div className='section' id='section5'>
          section 5
        </div>
        <div className='section' id='section6'>
          section 6
        </div>
        <div className='section' id='section7'>
          section 7
        </div>
      </div>
    </div>
  )
}

export default App
