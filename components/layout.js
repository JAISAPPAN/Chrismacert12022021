

import Navbar_compo from '../components/navbar_compo'
import Footer from "../components/Footer"

export default function Layout ({children}) {
  return (
    <div>
     
     <Navbar_compo/>
      <main>
        
        {children}
      </main>
     <Footer/>
    </div>
  )
}