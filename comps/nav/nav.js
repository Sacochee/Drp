'use client'

import { useTranslations } from "next-intl"
import Image from "next/image"
import logo from '@/public/logo.png'
import Link from "next/link"
import s from './.module.css'

export default function Nav() {
    const t = useTranslations('Nav')
  return (
    <nav className={s.cont}>
        <Image src={logo} className={s.img}/>
        <div className={s.div}> 
            <Link href={'/'} className={s.item}>
                {t('prod')}
            </Link>
            <Link href={'/about'} className={s.item}>
                {t('about')}
            </Link>
            <Link href={'/contact'} className={s.item}>
                {t('cont')}
            </Link>
        </div>
        
    </nav>
  )
}
