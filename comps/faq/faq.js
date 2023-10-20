import { useTranslations } from 'next-intl'
import s from './.module.css'
import {v4 as uuidv4} from 'uuid'

export default function Faq() {
    const t = useTranslations('faq')
    const data = [
        {q:t('q1'),r:t('r1')},{q:t('q2'),r:t('r2')},{q:t('q3'),r:t('r3')},{q:t('q4'),r:t('r4')},{q:t('q5'),r:t('r5')},{q:t('q6'),r:t('r6')},{q:t('q7'),r:t('r7')},{q:t('q8'),r:t('r8')},{q:t('q9'),r:t('r9')},{q:t('q10'),r:t('r10')},
    ]
  return (
    <div className={s.all}>
        <div style={{display:'flex', justifyContent:"center"}}>
            <h2 className={s.h2}>
            {t('question')}
        </h2>
        </div>
        
        <ul className={s._ul}>
            {data.map((item)=><Li txt={item}/>)}
        </ul>
    </div>
  )
}


function Li({txt}){
    return(<li key={uuidv4()} className={s._li}>
        <h3 className={s.h3}>
            {txt.q}
        </h3>
        <ul className={s.ul}>
            <li key={uuidv4()} className={s.li}>
                {txt.r}
            </li>
        </ul>
        
    </li>)
}