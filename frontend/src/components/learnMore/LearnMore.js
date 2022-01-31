import React, { useState } from 'react'

import './learnMore.css'

const LearnMore = () => {
     const [readMore, setReadMore] = useState(false)

     const handleReadMore = () => {
          setReadMore(!readMore)
     }

     return (
          <div className='componentFirst learnMoreAnimation'>
               <div className='componentSecond'>
                    <div className='learnMoreContainer'>
                         <div className='learnMoreItem'>
                              <div className='learnMoreItemLeft'>
                                   <div className='learnMoreItemImage'></div>
                              </div>
                              <div className='learnMoreItemRight'>
                                   <div className='learnMoreItemTitle'>Create your collection</div>
                                   <div className='learnMoreItemText'>
                                        – Heady Righton is, by design, supply limited with all cannabis sourced
                                        from a single craft grower located the beautiful Champlain Valley of
                                        northwestern Vermont. The grower has 1000sf of indoor grow space and 50
                                        outdoor plants. Heady Righton purchases the entire output of this craft
                                        grower. This relationship ensures that Heady Righton customers dictate the
                                        strains offered by Heady Righton. And yes, of course, the cannabis is
                                        totally heady‐righton.
                                   </div>
                                   <div className='learnMoreItemButton'>Learn more</div>
                              </div>
                         </div>

                         <div className='learnMoreItem'>
                              <div className='learnMoreItemLeft'>
                                   <div className='learnMoreItemImage'></div>
                              </div>
                              <div className='learnMoreItemRight'>
                                   <div className='learnMoreItemTitle'>Experience</div>
                                   <div className='learnMoreItemText'>
                                        – Heady Righton doesn’t sell cannabis, it sells the experience of wanting,
                                        procuring, and enjoying cannabis. With the best product and team members
                                        that love their chosen profession, we trust our customers feel the Heady
                                        Righton difference.
                                   </div>
                                   <div className='learnMoreItemButton'>Learn more</div>
                              </div>
                         </div>

                         <div className='learnMoreItem'>
                              <div className='learnMoreItemLeft'>
                                   <div className='learnMoreItemImage'></div>
                              </div>
                              <div className='learnMoreItemRight'>
                                   <div className='learnMoreItemTitle'>Pricing</div>
                                   <div className='learnMoreItemText'>
                                        Heady Righton sells among the highest, if not the highest, priced cannabis
                                        in the State of Vermont (though Heady Righton Club members receive
                                        discounts greater than 50%).
                                   </div>
                                   <div className='learnMoreItemButton'>Learn more</div>
                              </div>
                         </div>

                         <div className='learnMoreItem'>
                              <div className='learnMoreItemLeft'>
                                   <div className='learnMoreItemImage'></div>
                              </div>
                              <div className='learnMoreItemRight'>
                                   <div className='learnMoreItemTitle'>Heady Righton Club –</div>
                                   <div className='learnMoreItemText'>
                                        Amazing product, amazing service, and amazing convenience. It does not get
                                        much better than membership in the Heady Righton Club. Limited to 500
                                        members, Heady Righton Club members pay $250/month for 1 ounce of their
                                        choice of premium cannabis. Members receive two complimentary product
                                        deliveries per month* and members may purchase as much additional product
                                        as legally allowed by the State of Vermont.
                                        <span
                                             className={
                                                  readMore ? 'learnMoreItemTextHide' : 'learnMoreReadMoreHide'
                                             }
                                        >
                                               Heady  Righton  believes  in  thinking  about,  and  acting 
                                             on, those  actions  that  bring  meaning  and  joy  to  one’s  life.  
                                             By  focusing  on  just  500  core  customers,  Heady Righton  Club 
                                             aims  to  facilitate  the  opportunities  for  members  where 
                                             cannabis  can  enhance  those thoughts  and  actions  that  bring 
                                             meaning  and  joy.{' '}
                                        </span>
                                        <span className='learnMoreReadMore' onClick={handleReadMore}>
                                             {readMore ? 'Read Less' : ' Read More...'}
                                        </span>
                                   </div>
                                   <div className='learnMoreItemButton'>Learn more</div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default LearnMore
