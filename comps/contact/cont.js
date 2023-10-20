import { useEffect, useRef, useState } from "react"
import s from "./.module.css"
import { useTranslations } from "next-intl"
import png from "@/public/close.png"
import Image from "next/image"
import pngMail from '@/public/mail.png'

export default function Cont(){
  const [err, setErr] = useState(false)
  const [pop, setPop] = useState(false)
  const pre = useRef(), nom = useRef(), mail = useRef(), txt = useRef()
  const t = useTranslations('contact')
  const handle = ()=>{
    if(pre.current.value == '' ||nom.current.value == ''|| mail.current.value ==''||txt.current.value==''){
      setErr(true)
    }else {
      setErr(false)
      const data = {
        name : pre.current.value + ";" + nom.current.value,
        email : mail.current.value,
        txt : txt.current.value
      }
      setPop(true)
      pre.current.value = ''
      nom.current.value = ''
      mail.current.value = ''
      txt.current.value = ''
    }
  }
   return(
    <div className={s.back}>
      <div className={s.uu}>
        <div  style={{display:'flex', justifyContent:'center'}}>
          <h1 className={s.h1}>
            {t('contact')} 
          </h1>
        </div>
        
        <div className={s.all}>
          <div className={s.name}>
            <div className={s.divName}>
              <p>
                {t('nom')}
              </p>
              <input type="text" className={s.input} placeholder={t('vnom')} ref={nom}/>
            </div>
            <div className={s.divName}>
              <p>
                {t('prenom')}
              </p>
              <input type="" placeholder={t('vpre')} className={s.input} ref={pre}/>
            </div>
            
          </div>
          <div className={s.part}>
            <div>
              <p>
                {t('email')}
              </p>
              <input type="email" className={s.int} placeholder="exemple@exemple.com" ref={mail}/>
            </div>
            <div>
              <p>
                {t('message')}
              </p>
              <textarea className={s.textArea} rows={5} cols={30} placeholder={t('vmess')} ref={txt}/>
            </div>
            {pop ? <PopUp setPop={setPop}/> : undefined}
            {err ? <SendError/> : undefined}
            <button onClick={()=>handle()} className={s.btn}>
                {t('send')}
              </button>
          </div>
          
        </div>
      </div>
      <div className={s.ou}>
        <h1 style={{color:"white"}}>
          OU
        </h1>
      </div>
      <div className={s.container}>
        <div className={s.cont_mail}>
          <Image src={pngMail} className={s.mailImg} alt="icone d une adresse mail"/>
          <p className={s.mail}>
            dasndasdaskdjaiskd@mail.com
          </p>
        </div>
      </div>
        
    </div>
   )
  }


function SendError(){
  const t = useTranslations('contact')
  return(
    <div className={s.err}>
      {t('err')}
    </div>
  )
}

function PopUp({setPop}){
  const t = useTranslations('contact')
  return(
    <div className={s.all_merci}>
      <div style={{display:"flex", justifyContent:"end"}} onClick={()=>setPop(false)}>
        <Image src={png} className={s.close}/>
      </div>
        
        <div className={s.merci}>
          {t('pop')}
        </div>
    </div>
  )
}
