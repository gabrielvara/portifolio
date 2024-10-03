import Nav from "./nav"
import Hero from "./hero"
import Projetos from "./projetos"
import Contato from "./contato"
import Footer from "./footer"

const main = () => {
  return (
    <div className="bg-defaultcolor">
        <Nav/>
        <Hero/>
        <Projetos/>
        <Contato/>
        <Footer/>
    </div>
  )
}

export default main