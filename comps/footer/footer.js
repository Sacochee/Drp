import Link from "next/link"
import s from "./.module.css"

export default function Footer() {
  return (
    <footer>
        <div>
            Water <br/>
            2 <br/>
            Sport
        </div>
        <div>
            <Link href={'/'}>
            Mentions Légales 
            </Link>
            <Link  href={'/'}>
            CGV 
            </Link>
            <Link  href={'/'}>
            Politique de Confidentialité
            </Link>
        </div>
        <div>

        </div>
    </footer>
  )
}
