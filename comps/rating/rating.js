import {v4 as uuidv4} from "uuid"
import Image from "next/image"
import s from "./.module.css"
import star from "@/public/stars/Star.png"; import starHalf from "@/public/stars/StarHalf.png"; import starEmpty from "@/public/stars/starEmpty.png"

export default function Rating({rate}) {
    const imgs = []
    function add(nb, img){
        for(let i =0; i<nb;i++){
            imgs.push(img)
        }
    }
    switch(rate){
        case 0: {
            add(5, starEmpty)
            break
        }
        case 0.5: {
            imgs.push(starHalf)
            add(4, starEmpty)
            break
        }
        case 1: {
            imgs.push(star)
            add(4, starEmpty)
            break
        }
        case 1.5: {
            imgs.push(star)
            imgs.push(starHalf)
            add(3, starEmpty)
            break
        }
        case 2: {
            add(2, star)
            add(3, starEmpty)
            break
        }
        case 2.5: {
            add(2, star)
            add(1, starHalf)
            add(2, starEmpty)
            break
        }
        case 3: {
            add(3, star)
            add(2, starEmpty)
            break
        }
        case 3.5: {
            add(3, star)
            add(1, starHalf)
            add(1, starEmpty)
            break
        }
        case 4: {
            add(4, star)
            add(1, starEmpty)
            break
        }
        case 4.5: {
            add(4, star)
            add(1, starHalf)
            break
        }
        default: {
            add(5, star)
            break
        }
    }
  return (
    <ul className={s.ul}>
        {imgs.map((item)=><li key={uuidv4()} className={s.li}>
            <Image src={item} className={s.img}/>
        </li>)}
        
    </ul>
  )
}


