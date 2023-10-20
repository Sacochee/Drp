'use client'
import Image from 'next/image'
import styles from '../page.module.css'
import png from '@/public/logo.png'
import { useTranslations } from 'next-intl'
import Nav from '@/comps/nav/nav'
import Buy from '@/comps/buy/buy'
import Avis from '@/comps/avis/avis'
import Desc from '@/comps/desc/desc'
import Footer from '@/comps/footer/footer'
import Faq from '@/comps/faq/faq'
import { useEffect, useRef, useState } from 'react'
import useWindowSize from '@/comps/hook/useScreen'

export default function Home() {
  const t = useTranslations('Main')
  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <Title/>
        <Buy/>
        <Desc/>
        <section className={styles.section}>
          <Avis/>
          <Faq />
        </section>
      </main>
      <Footer/>
    </>
  )
}


function Title(){
  const t = useTranslations('Main')
  const width = useWindowSize().width;
  const [wi, setWi] = useState(0)
  useEffect(()=>{
    if(width >= 1024)
      setWi(width/8)
    else
      return
  }, [width])
  return(
    <div className={styles._title}>
      <div className={styles._part1} style={{width:wi+"px"}}>

      </div>
      <div className={styles._part2} style={{width:wi*6 + "px"}}>
        <h1 className={styles._h1}>
          {t('title1')}
        </h1>
      </div>
      <div className={styles._part3} style={{width:wi+"px"}}>

      </div>
    </div>
  )
}