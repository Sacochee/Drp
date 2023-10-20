'use client'
import Footer from '@/comps/footer/footer'
import Nav from '@/comps/nav/nav'
import Cont from '@/comps/contact/cont'

export default function Page() {
  return (
    <>
    <header>
      <Nav/>
    </header>
    <main>
      <section style={{backgroundColor:"black", paddingTop:"15px", paddingBottom:"15px",borderBottom:"solid 1px white"}}>
        <Cont/>
      </section>
      
    </main>
    <Footer/>
    </>
  )
}

