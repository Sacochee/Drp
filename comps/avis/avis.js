import Image from 'next/image'
import a1 from "@/public/com/1.png"; import a2 from "@/public/com/2.png"; import a3 from "@/public/com/3.png"; 
import profil from "@/public/com/profile.png"
import brigite from "@/public/com/profileDame.png"
import date from "@/public/com/date.png"
import prof from "@/public/com/prof.png"
import s from "./.module.css"
import {v4 as uuidv4} from 'uuid'
import Rating from '../rating/rating';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import close from "@/public/close.png"
import Link from 'next/link';

const data = [{
    from : "F***",
    rate : 5,
    href : profil,
    images : [a1 , a2 , a3],
    txt  : "Ma fille l'adore ❤🥰 il est vraiment bien... matière de qualité et très pratique"
},
{
    from : "v***1",
    rate : 5,
    href : profil,
    txt  : "Excellent, plastique dur, belles couleurs. Je le recommande"
},

{
    from : "Christopher Wulf",
    rate : 5,
    href : profil,
    txt  : "Super gourde"
},
{
    from : "lucie65.angles",
    rate : 5,
    href : prof,
    txt  : ""
},
{
    from : "Jéssica Eiras",
    rate : 5,
    href : profil,
    txt  : ""
},
{
    from : "chiwa90",
    rate : 5,
    href : profil,
    txt  : ""
},
{
    from : "loureiromaria96",
    rate : 5,
    href : profil,
    txt  : "Pas d’odeur. Idéal pour ceux qui n’aiment pas boire de l’eau. Motive"
},
{
    from : "hermassi84",
    rate : 3,
    images : [date],
    href : brigite,
    txt  : "L’article est arrivé après la date de livraison de 4 jours. Beau produit et conforme à la description."
},]
export default function Avis() {
    const t = useTranslations('avis')
    const d = data
  return (
    <div className={s._all}>
        <div className={s.center}>
            <Link href={'/commentaire'} className={s.add}>{t('add')}</Link>
        </div>
        <ul style={{listStyle:"none"}} >
            {d.map((e)=><Li e={e}/>)}
        </ul>
    </div>
    
  )
}

function Li({e}){
    const [pop, setPop] = useState(false)
    const t = useTranslations('avis')
    const fnc = ()=>{
        setPop(false)}
    return(<li key={uuidv4()} className={s.li}>
        <div className={s.top}>
            <div className={s.user}>
               <Image src={e.href} className={s.profil}/> 
               <div className={s.name}>
                {e.from}
               </div>
            </div>
            <div className={s.rate}>
                <Rating rate={e.rate}/>
            </div>

        </div>
        <div className={s.bot}>
            {e.images ? <Images i={e.images}/> : undefined}
            <div className={s.txt}>
              {e.txt}  
            </div>
            
        </div>
        <div className={s.yes}>
            <button onClick={()=>setPop(true)} className={s.sing}>
                {t('btn')}
            </button>
            {pop ? <PopUp fnc={fnc} /> : undefined}
        </div>
    </li>)
}
function Images({i}){
    return(<ul className={s.ul}>
        {i.map((e)=><li key={uuidv4()} className={s.liImages}>
            <Image src={e} className={s.img}/>
        </li>)}
    </ul>)
}

function PopUp({fnc}){
    const t = useTranslations('avis')
    return(
        <div className={s.pop}>
            <div className={s.closeAll} onClick={()=>fnc()}>
                <Image src={close} className={s.close}/>
            </div>
            <div>
                {t("report")}
            </div>
            <div>
                <Image src={undefined} className={s.nice}/>
            </div>
        </div>
    )
}