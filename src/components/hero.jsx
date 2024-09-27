import { BsGithub } from "react-icons/bs"
import { FaLinkedin } from "react-icons/fa"
import { FaDownload } from "react-icons/fa"
import HeroPic from "../assets/hero-pic.jpg"

const hero = () => {
  return (
    <section className="flex flex-col justify-center items-center xl:mt-36 lg:mt-28 md:mt-20 sm:mt-16 ssm:mt-8">
        <div className="ssm:hidden md:flex mx-48 gap-20 justify-center items-center">
            <div className="flex gap-12 flex-col justify-center">
                <h1 className="whitespace-nowrap font-inter text-paragraphcolor lg:text-7xl font-bold flex gap-3 md:text-6xl">Olá, Eu sou o <span className="text-textcolor">Gabriel Vara.</span></h1>
                <h2 className="font-inter text-paragraphcolor text-3xl font-bold">Estudante de Engenharia de Software.</h2>
            </div>
            <img src={HeroPic} alt="Imagem Gabriel" width={250} className="rounded-full ssm:hidden xl:flex"/>
        </div>
        <div className="ssm:hidden sm:flex md:hidden gap-20 justify-center items-center">
            <img src={HeroPic} alt="Imagem Gabriel" width={200} className="rounded-full"/>
            <div className="flex gap-12 flex-col justify-center">
                <h1 className="font-inter text-paragraphcolor font-bold flex gap-3 text-5xl">Olá, Eu sou o <span className="text-textcolor">Gabriel Vara.</span></h1>
                <h2 className="font-inter text-paragraphcolor text-xl font-bold">Estudante de Engenharia de Software.</h2>
            </div>
        </div>
        <div className="ssm:flex sm:hidden gap-8 flex-col justify-center items-center">
            <img src={HeroPic} alt="Imagem Gabriel" width={200} className="rounded-full"/>
            <div className="flex gap-2 flex-col justify-center items-center">
                <h1 className="font-inter text-paragraphcolor font-bold flex gap-1 text-2xl">Olá, Eu sou o <span className="text-textcolor">Gabriel Vara.</span></h1>
                <h2 className="font-inter text-paragraphcolor text-l font-bold">Estudante de Engenharia de Software.</h2>
            </div>
        </div>
        <div className="lg:mx-48 md:mx-24 sm:mx-12 ssm:mx-6 ssm:mx-6 mt-8">
            <p className="font-inter text-paragraphcolor lg:text-xl md:text-lg sm:text-base ssm:text-xs">
                Iniciando no mercado da tecnologia, sou um estudante de Engenharia de Software na FIAP, sou aficcionado em solução de problemas e através do desenvolvimento de software encontrei uma forma de aprimorar mais ainda essa questão, nos últimos meses venho estudando programação backend através de linguagens como Python e JavaScript.
            </p>
        </div>
        <div className="flex ssm:gap-4 sm:gap-8 md:gap-12 xl:gap-20 mx-48 mt-12 items-center">
            <button className="ssm:hidden md:flex border-2 border-paragraphcolor p-3 rounded-md items-center flex gap-4 font-inter text-paragraphcolor text-lg">Baixar Currículo<FaDownload/></button>
            <button className="ssm:flex md:hidden border-2 border-paragraphcolor p-1 rounded-md items-center flex gap-2 font-inter text-paragraphcolor text-sm">Baixar Currículo<FaDownload/></button>
            <BsGithub size={35} color="#D1CFFD"/>
            <FaLinkedin size={35} color="#D1CFFD"/>
        </div>
    </section>
  )
}

export default hero