import React from 'react'

import { ReactComponent as Marijuana1 } from '../../icons/Marijuana.svg'
import { ReactComponent as Marijuana2 } from '../../icons/Marijuana1.svg'
import { ReactComponent as Marijuana3 } from '../../icons/Bud.svg'

import './infoBar.css'
const InfoBar = () => {
     return (
          <div className='componentFirst infoBarBC'>
               <div className='infoBar componentSecond'>
                    <div className='infoBarItem'>
                         <div className='infoBarItemIcon'>
                              <Marijuana1 />
                         </div>
                         <div className='infoBarItemTitle'>Create your collection</div>
                         <div className='infoBarItemText'>
                              The VC fund will be a pool of money held in a separate wallet to the Phantom
                              treasury.
                         </div>
                    </div>
                    <div className='infoBarItem'>
                         <div className='infoBarItemIcon'>
                              <Marijuana2 />
                         </div>
                         <div className='infoBarItemTitle'>Add your NFTs</div>
                         <div className='infoBarItemText'>
                              The VC fund will be a pool of money held in a separate wallet to the Phantom
                              treasury.
                         </div>
                    </div>
                    <div className='infoBarItem'>
                         <div className='infoBarItemIcon'>
                              <Marijuana3 />
                         </div>
                         <div className='infoBarItemTitle'>Launch the sale</div>
                         <div className='infoBarItemText'>
                              The VC fund will be a pool of money held in a separate wallet to the Phantom
                              treasury.
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default InfoBar
