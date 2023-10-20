import { useState } from "react"
import s from "./.module.css"
import { useTranslations } from "next-intl"
import Image from "next/image"

export default function Desc() {
    const t = useTranslations('desc')
    const [show, setShow]= useState(false)
    const center = {display:"flex", justifyContent:"center"}
  return (
    <section className={s.all}>
        <div>
            <div style={{display:"flex", justifyContent:"center"}}>
                {t('liv')}
            </div>
            <Livraison/>

        </div>
        <div className={show ? s.show : s.desc}>
            <div style={center}>
                <h2 className={s.title}>
                    {t('h2')}
                </h2> 
            </div>
            
            <p className={s.para}>
            {t("p")}
            </p>
            <strong>
            {t("str")}
            </strong>
            <ul className={s.ul}>
                <li className={s.li}>
                    <strong>
                        {t("t1")}
                    </strong>
                {t("li1")}
                </li>
                <li className={s.li}>
                    <strong>
                    {t('t2')}
                    </strong>
                   {t("li2")}
                </li>
                <li className={s.li}>
                    <strong>
                    {t("t3")}
                    </strong>
                    {t("li3")}
                </li>
                <li className={s.li}>
                    <strong>
                    {t("t4")}
                    </strong>
                    {t("li4")}
                </li>
                <li className={s.li}>
                    <strong>
                    {t("t5")}
                    </strong>
                    {t("li5")}
                </li>
                <li className={s.li}>
                    <strong>
                    {t("t6")}
                    </strong>
                    {t("li6")}
                </li>
            </ul>
        </div>
        <div style={center}>
          {
            show ? <button onClick={()=>setShow(false)} className={s.btn}>{t('less')}</button> : <button onClick={()=>setShow(true)} className={s.btn}>{t('more')}</button>
        }  
        </div>
        
        
    </section>
  )
}


function Livraison(){
    const t = useTranslations('desc')
    return(<ul className={s._ul}>
        <li className={s._li}>
           <p className={s._title}>
            {t("stand")}
           </p>
           <p  className={s._txt}>
            {t('time')}
           </p>
           <p className={s._txt}>
            {t('obt')}
           </p>
           <p className={s._txt}>
            {t('transport')}
            <Image /> La poste, Etc.
           </p>
        </li>
        <li className={s._li}>
           <p className={s._title}>
            {t("stand2")}
           </p>
           <p className={s._txt}>
            {t('time2')}
           </p>
           <p  className={s._txt}>
            {t('obt')}
           </p>
           <p  className={s._txt}>
            {t('transport')}
            <Image /> Mondial Relay
           </p>
        </li>
        <li className={s._li}>
           <p className={s._title}>
            {t("stand3")}
           </p>
           <p  className={s._txt}>
            {t('time3')}
           </p>
           <p  className={s._txt}>
            {t('obt')}
           </p>
           <p  className={s._txt}>
            {t('transport')}
            <Image /> UPS, <Image/> Chronopost
           </p>
        </li>
    </ul>)
}