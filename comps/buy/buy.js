import { useTranslations } from "next-intl"
import Image from "next/image"
import s from './.module.css'
import c from './style.module.css'
import jpg1 from '@/public/g1.jpg';import jpg2 from '@/public/g2.jpg';import jpg3 from '@/public/g3.jpg';import jpg4 from '@/public/g4.jpg';import jpg5 from '@/public/g5.jpg';import jpg6 from '@/public/g6.jpg';import jpg7 from '@/public/g7.jpg';import jpg8 from '@/public/g8.jpg';import jpg9 from '@/public/g9.jpg';import jpg10 from '@/public/g10.jpg';import jpg11 from '@/public/g11.jpg'
import { useState, useEffect, useRef } from "react";
import { v4 as uuidv4 } from 'uuid';
import { FUNCTIONS_CONFIG_MANIFEST } from "next/dist/shared/lib/constants";
import { Bree_Serif, Felipa, Grenze } from "next/font/google";
import Prix from "../prix/prix";
import Link from "next/link";

export default function Buy() {
    const nb = []
    for(let i =1; i<=10; i++){
        nb.push(i)
    }
    const [count, setCount] = useState(1)
    const green = useRef(), violet = useRef(), pink = useRef(), blue = useRef()
    const pushRef = ((el)=>btn.current.push(el))
    const t = useTranslations('Main')
    const [color, setColor] = useState("blue")
    
    const clean = ()=>{
        green.current.style.backgroundColor = "white";
        violet.current.style.backgroundColor = "white";
        pink.current.style.backgroundColor = "white";
        blue.current.style.backgroundColor = "white";
    }
    useEffect(()=>{
        setColor('green')
    },[])
    useEffect(()=>{ 
        switch(color){
            case"green":
                clean()
                green.current.style.backgroundColor = "#DADFF7"
                break;
            
            case"violet":
                clean()
                violet.current.style.backgroundColor = "#DADFF7"
                break;
            case"blue":
                clean()
                blue.current.style.backgroundColor = "#DADFF7"
                break;
            case"pink":
                clean()
                pink.current.style.backgroundColor = "#DADFF7"
                break;
            
        }
    },[color])
  return (
    <section className={s.section}>
        
        <div className={s.shop}>
            <IMAGE />
            <div className={s.box}>
                <h2>
                    {t('subTitle')}
                </h2>
                <Prix/>
                <div className={s.btns}>
                    <button  onClick={()=>setColor("green")} ref={green} className={s.btn} style={{color:"green"}}>
                        <Image src={jpg11} className={c.smallImage}/>
                        <div>
                           {t('color1')} 
                        </div>
                        
                    </button>
                    <button  onClick={()=>setColor("pink")} ref={pink} className={s.btn} style={{color:"pink"}}>
                        <Image src={jpg8} className={c.smallImage}/>
                        <div>
                           {t('color2')} 
                        </div>
                        
                    </button>
                    <button onClick={()=>setColor("violet")} ref={violet} className={s.btn} style={{color:"violet"}}> 
                        <Image src={jpg9} className={c.smallImage}/>
                        <div>
                           {t('color3')}
                        </div>
                        
                    </button>
                    <button onClick={()=>setColor("blue")}  ref={blue} className={s.btn} style={{color:"blue"}}>
                        <Image src={jpg10} className={c.smallImage}/>
                        <div>
                           {t('color4')}
                        </div>
                        
                    </button>
                </div>
                <div className={s.quantité}>
                    <div className={s.q_t}>
                       Qté 
                    </div>
                    <select onChange={(e)=>setCount(e.target.value)} className={s.q_s}>
                        {nb.map((i)=><option value={i}>{i}</option>)}
                    </select>
                </div>
                <div className={s.cont_buy}>
                    <Link className={s.buy} href={`/buy?max=${count}&color=${color}`}>
                        {t('buy')}
                    </Link>
                </div>
            </div>
        </div>
    </section>
  )
}



function IMAGE({size}){
    const data = [jpg1, jpg2,jpg3,jpg4,jpg5,jpg6,jpg7, jpg8, jpg9,jpg10,jpg11]
    const [image, setImage] = useState(jpg1)

    return(<div className={c.container}>
        <div className={c.select}>
            <ul>
                {data.map((item)=><li key={uuidv4()}>
                        <Image src={item} alt="Gourde d eau de sport avec couleur" className={c.img} onMouseEnter={()=>setImage(item)}/>
                    </li>)}
            </ul>
            
        </div>
        <div>
            <Image src={image} className={c.jpg}/>
        </div>
    </div>)
}

