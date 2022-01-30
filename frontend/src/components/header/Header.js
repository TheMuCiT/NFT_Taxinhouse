import React, { useState } from 'react'

import { ReactComponent as ArrowSVG } from '../../icons/Arrow.svg'

import './header.css'

const _items = [
     {
          image: '/images/carouselFirst.jpg',
          title: 'ntf',
     },
     {
          image: '/images/carouselSecond.jpg',
          title: 'ntf',
     },
     {
          image: '/images/carouselThird.jpg',
          title: 'ntf',
     },
     {
          image: '/images/carouselFour.jpg',
          title: 'ntf',
     },
     {
          image: '/images/carouselFifth.jpg',
          title: 'ntf',
     },
     {
          image: '/images/carouselSix.jpg',
          title: 'ntf',
     },
     {
          image: '/images/carouselSeven.jpg',
          title: 'ntf',
     },
]

const length = _items.length
_items.push(..._items)

const sleep = (ms = 0) => {
     return new Promise((resolve) => setTimeout(resolve, ms))
}

const createItem = (position, idx) => {
     let slideWidth = 300
     if (window.innerWidth < 600) {
          slideWidth = 220
     }

     const item = {
          styles: {
               transform: `translateX(${position * slideWidth}px)`,
          },
          styleIMG: {},
          image: _items[idx],
     }

     switch (position) {
          case length - 2:
          case length + 2:
               item.styles = { ...item.styles, opacity: 0 }
               break
          case length - 1:
          case length + 1:
               item.styles = { ...item.styles }
               break
          case length:
               item.styles = { ...item.styles }
               break
          default:
               item.styles = { ...item.styles, opacity: 0 }
               break
     }

     return item
}

const keys = Array.from(Array(_items.length).keys())

const Header = () => {
     const [items, setItems] = useState(keys)
     const [isTicking, setIsTicking] = useState(false)
     const [activeIdx, setActiveIdx] = useState(0)
     const bigLength = items.length

     const prevClick = (jump = 1) => {
          if (!isTicking) {
               setIsTicking(true)
               setItems((prev) => {
                    return prev.map((_, i) => prev[(i + jump) % bigLength])
               })
          }
     }

     const nextClick = (jump = 1) => {
          if (!isTicking) {
               setIsTicking(true)
               setItems((prev) => {
                    return prev.map((_, i) => prev[(i - jump + bigLength) % bigLength])
               })
          }
     }

     React.useEffect(() => {
          if (isTicking) sleep(300).then(() => setIsTicking(false))
     }, [isTicking])

     React.useEffect(() => {
          setActiveIdx((length - (items[0] % length)) % length) // prettier-ignore
     }, [items])

     function callNextClick() {
          nextClick()
     }

     React.useEffect(() => {
          setInterval(() => {
               callNextClick()
          }, 4500)
     }, []) // eslint-disable-line react-hooks/exhaustive-deps

     window.addEventListener('resize', createItem())
     return (
          <div className='componentFirst'>
               <div className='header componentSecond'>
                    <div className='headerLeft SlideLeftAnimation'>
                         <div className='headerLeftTitle'>
                              KOMODO JOBS IS THE PERFECT SOLUTION FOR YOUR BUSINESS
                         </div>
                         <div className='headerLeftTitleText'>The best product and the best service…</div>
                         <div className='headerLeftText'>
                              Coming fall 2022, Heady Righton is boutique marijuana dispensary offering single
                              source cannabis flower and cannabis product. With a focus on the whole cannabis
                              experience as opposed to any singular aspect of our amazing product, Heady Righton
                              helps facilitate those life experiences that are enhanced with cannabis.
                         </div>
                         <div className='headerLeftButtonWrapper'>
                              <div className='headerLeftButton'>Business Soliutions</div>
                              <div className='headerLeftButtonOutline'>Job Opportunities</div>
                         </div>
                    </div>
                    <div className='headerRight'>
                         <div className='ingameCarouselContainer'>
                              <div className='carousel__wrap'>
                                   <div className='carousel__inner'>
                                        <div
                                             className='carousel__btn carousel__btn--prev'
                                             onClick={() => prevClick()}
                                        >
                                             <ArrowSVG className='carousel__btn-arrow--left' />
                                        </div>
                                        <div className='carousel__container'>
                                             <ul className='carousel__slide-list'>
                                                  {items.map((pos, i) => {
                                                       const item = createItem(pos, i, activeIdx)
                                                       return (
                                                            <li
                                                                 className='carousel__slide-item'
                                                                 style={item.styles}
                                                                 key={i}
                                                            >
                                                                 <img
                                                                      src={item.image.image}
                                                                      alt={item.image.title}
                                                                      style={item.styleIMG}
                                                                 />
                                                            </li>
                                                       )
                                                  })}
                                             </ul>
                                        </div>
                                        <div
                                             className='carousel__btn carousel__btn--next'
                                             onClick={() => nextClick()}
                                        >
                                             <ArrowSVG className='carousel__btn-arrow--right' />
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default Header
