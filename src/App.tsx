import { useEffect, useRef } from 'react'

import './App.css'

const App = () => {
  const ref = useRef<HTMLDivElement>(null)
  const menuRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            let currentElem = null
            if (menuRef && menuRef.current) {
              menuRef.current.childNodes.forEach((elem) => {
                // @ts-ignore: Unreachable code error
                // prettier-ignore
                currentElem = (elem.childNodes[0] as HTMLAnchorElement).attributes.href.value 
                  .replace('#', '')
              })
            }

            if (entry.target.id === currentElem) {
              console.log(entry.target)
            }
          }
        })
      },
      {
        threshold: 0.9,
      },
    )

    if (ref.current && ref.current.childNodes) {
      ref.current.childNodes.forEach((child) => {
        observer.observe(child as Element)
      })
    }
    return () => {
      if (ref.current && ref.current.childNodes) {
        ref.current.childNodes.forEach((child) => {
          observer.unobserve(child as Element)
        })
      }
    }
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
            <a href='#section1' className='section1'>
              Section 1
            </a>
          </li>
          <li>
            <a href='#section2' className='section2'>
              Section 2
            </a>
          </li>
          <li>
            <a href='#section3' className='section3'>
              Section 3
            </a>
          </li>
          <li>
            <a href='#section4' className='section4'>
              Section 4
            </a>
          </li>
          <li>
            <a href='#section5' className='section5'>
              Section 5
            </a>
          </li>
          <li>
            <a href='#section6' className='section6'>
              Section 6
            </a>
          </li>
          <li>
            <a href='#section7' className='section7'>
              Section 7
            </a>
          </li>
        </ul>
      </nav>
      <div ref={ref} className='content'>
        <div className='section ' id='section1'>
          section 1
        </div>
        <div className='section ' id='section2'>
          section 2
        </div>
        <div className='section ' id='section3'>
          section 3
        </div>
        <div className='section ' id='section4'>
          section 4
        </div>
        <div className='section ' id='section5'>
          section 5
        </div>
        <div className='section ' id='section6'>
          section 6
        </div>
        <div className='section ' id='section7'>
          section 7
        </div>
      </div>
    </div>
  )
}

export default App
