import s from './prix.module.css'
import Image from 'next/image'
import star from"@/public/star.png"
import { useState } from 'react'
import data from '@/com/com'

export default  function Prix() {

  return (
    <div className={s.all}>
        <div className={s.price}> 
            <div className={s.prix}>
                19.99€
            </div>
            <div className={s.bar}>
                25€
            </div>
        </div>
        <div className={s.rate}>
            <Image src={star} className={s.star} />
            (8)
        </div>
    </div>
  )
}

