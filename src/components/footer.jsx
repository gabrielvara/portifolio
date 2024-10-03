import { NavLink } from "react-router-dom"
import { FaAddressBook, FaGithubSquare, FaLinkedin } from "react-icons/fa"

const footer = () => {
  return (
    <footer className=" text-paragraphcolor mt-20 py-6">
      <div className="flex flex-col container mx-auto text-center gap-10">
        <div className="flex justify-center space-x-8 mb-4 gap-8">
          <a href="#" className="hover:text-textcolor transition duration-300">
            <NavLink to='/'>Home</NavLink>
          </a>
          <a href="#" className="hover:text-textcolor transition duration-300">
            <NavLink to='/projetos'>Pojetos</NavLink>
          </a>
          <a href="#" className="hover:text-textcolor transition duration-300">
            <NavLink to='/contao'>Contato</NavLink>
          </a>
        </div>
        <div className="flex justify-center gap-6">
          <a href="#" className="text-paragraphcolor hover:text-textcolor transition duration-300 mx-2">
            <FaGithubSquare size={40}/>
          </a>
          <a href="#" className="text-paragraphcolor hover:text-textcolor transition duration-300 mx-2">
            <FaLinkedin size={40}/>
          </a>
          <a href="#" className="text-paragraphcolor hover:text-textcolor transition duration-300 mx-2">
            <FaAddressBook size={40}/>
          </a>
        </div>
        <p className="text-sm">
          © 2024 <span className="font-semibold">Gabriel Vara</span>. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}

export default footer