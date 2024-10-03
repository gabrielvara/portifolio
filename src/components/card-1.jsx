import { DiBootstrap, DiSass, DiHtml5, DiCss3, DiJavascript } from "react-icons/di"
import ProjetoMelodia from "../assets/projeto-melodia.svg"

const cards = () => {
  return (
    <div className="flex flex-col shadow-[0px_5px_8px_14px_rgba(0,_0,_0,_0.1)] ssm:w-64 sm:w-96 p-8 items-center text-center gap-6 rounded-xl">
        <h3 className="text-paragraphcolor font-bold text-xl">Landing Page - App de Música</h3>
        <img src={ProjetoMelodia} alt="" className="rounded-xl" />
        <p className="text-paragraphcolor font-semibold ssm:text-sm">Landing page responsiva criada com Bootstrap, Sass, HTML, CSS e JavaScript. Foco em design moderno, interatividade e boa experiência do usuário em todos os dispositivos.</p>
        <div className="mt-2 flex-row gap-1 ssm:hidden sm:flex">
            <DiBootstrap size={50} color="#D1CFFD"/>
            <DiSass size={50} color="#D1CFFD"/>
            <DiHtml5 size={50} color="#D1CFFD"/>
            <DiCss3 size={50} color="#D1CFFD"/>
            <DiJavascript size={50} color="#D1CFFD"/>
        </div>
        <div className="mt-2 flex-row gap-1 ssm:flex sm:hidden">
            <DiBootstrap size={30} color="#D1CFFD"/>
            <DiSass size={30} color="#D1CFFD"/>
            <DiHtml5 size={30} color="#D1CFFD"/>
            <DiCss3 size={30} color="#D1CFFD"/>
            <DiJavascript size={30} color="#D1CFFD"/>
        </div>
          <a href="https://github.com/peguidotte/melodia" target="_blank"><button className="border-2 border-paragraphcolor p-2 rounded-md items-center flex gap-4 font-inter text-paragraphcolor text-lg">Repositório</button></a>
    </div>
  )
}

export default cards