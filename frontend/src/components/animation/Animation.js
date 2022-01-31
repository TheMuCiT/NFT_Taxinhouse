import React from 'react'
import './animation.css'
const Animation = () => {
     window.onscroll = function () {
          scrollAnimation()
     }

     const scrollAnimation = () => {
          let offset = 300
          if (window.innerWidth < 600) {
               offset = 200
          }
          let WindowsPosition = window.pageYOffset
          let windowBottomPositon = WindowsPosition + window.outerHeight

          let timer = document.getElementsByClassName('timerAnimation')
          let infoBar = document.getElementsByClassName('infoBarBC')
          let roadmap = document.getElementsByClassName('roadmapBC')
          let contact = document.getElementsByClassName('contactBC')
          let learnMore = document.getElementsByClassName('learnMoreAnimation')

          //timer section
          let timerPosition = windowBottomPositon - timer[0].offsetTop - offset

          //opacity
          if (timer[0].offsetTop < windowBottomPositon) {
               if (timerPosition < 1) {
                    timer[0].style.opacity = timerPosition
               } else {
                    timer[0].style.opacity = 1
               }
          } else {
               timer[0].style.opacity = 0
          }

          //timer animation

          if (timer[0].offsetTop + offset < windowBottomPositon) {
               let timerElement = document.getElementsByClassName('timer')
               timerElement[0].className = 'timer componentSecond SlideRightAnimation'
          }

          //infoBar section
          let infoBarPosition = windowBottomPositon - infoBar[0].offsetTop - offset

          //opacity
          if (infoBar[0].offsetTop < windowBottomPositon) {
               if (infoBarPosition < 1) {
                    infoBar[0].style.opacity = infoBarPosition
               } else {
                    infoBar[0].style.opacity = 1
               }
          } else {
               infoBar[0].style.opacity = 0
          }

          //infoBar animation

          if (infoBar[0].offsetTop + offset < windowBottomPositon) {
               let infoBarElement = document.getElementsByClassName('infoBar')
               infoBarElement[0].className = 'infoBar componentSecond SlideRightAnimation'
          }

          //roadmap section
          let roadmapPosition = windowBottomPositon - roadmap[0].offsetTop - offset

          //opacity
          if (roadmap[0].offsetTop < windowBottomPositon) {
               if (roadmapPosition < 1) {
                    roadmap[0].style.opacity = roadmapPosition
               } else {
                    roadmap[0].style.opacity = 1
               }
          } else {
               roadmap[0].style.opacity = 0
          }

          //roadmap animation
          let roadmapElement = document.getElementsByClassName('roadmapItem')
          if (roadmap[0].offsetTop + offset + roadmapElement[0].offsetTop < windowBottomPositon) {
               roadmapElement[0].className = ' roadmapItem SlideRightAnimation'
          }
          if (roadmap[0].offsetTop + offset + roadmapElement[1].offsetTop < windowBottomPositon) {
               roadmapElement[1].className = ' roadmapItem roadmapItem2 SlideLeftAnimation'
          }

          //contact section
          let contactPosition = windowBottomPositon - contact[0].offsetTop - offset

          //opacity
          if (contact[0].offsetTop < windowBottomPositon) {
               if (contactPosition < 1) {
                    contact[0].style.opacity = contactPosition
               } else {
                    contact[0].style.opacity = 1
               }
          } else {
               contact[0].style.opacity = 0
          }

          //contact animation

          if (contact[0].offsetTop + offset < windowBottomPositon) {
               let contactElement = document.getElementsByClassName('contact')
               contactElement[0].className = 'contact componentSecond SlideLeftAnimation'
          }

          //learnMore section
          let learnMorePosition = windowBottomPositon - learnMore[0].offsetTop - offset

          //opacity
          if (learnMore[0].offsetTop < windowBottomPositon) {
               if (learnMorePosition < 1) {
                    learnMore[0].style.opacity = learnMorePosition
               } else {
                    learnMore[0].style.opacity = 1
               }
          } else {
               learnMore[0].style.opacity = 0
          }

          //learnMore animation

          let learnMoreElement = document.getElementsByClassName('learnMoreItem')
          if (learnMore[0].offsetTop + offset + learnMoreElement[0].offsetTop < windowBottomPositon) {
               learnMoreElement[0].className = ' learnMoreItem SlideRightAnimation'
          }
          if (learnMore[0].offsetTop + offset + learnMoreElement[1].offsetTop < windowBottomPositon) {
               learnMoreElement[1].className = ' learnMoreItem SlideRightAnimation'
          }
          if (learnMore[0].offsetTop + offset + learnMoreElement[2].offsetTop < windowBottomPositon) {
               learnMoreElement[2].className = ' learnMoreItem SlideRightAnimation'
          }
          if (learnMore[0].offsetTop + offset + learnMoreElement[3].offsetTop < windowBottomPositon) {
               learnMoreElement[3].className = ' learnMoreItem SlideRightAnimation'
          }
     }
     return <></>
}

export default Animation
