import { DiHtml5, DiCss3, DiJavascript } from "react-icons/di"
import ProjetoMahindra from "../assets/projeto-mahindra.svg"

const cards = () => {
  return (
    <div className="flex flex-col shadow-[0px_5px_8px_14px_rgba(0,_0,_0,_0.1)] ssm:w-64 sm:w-96 p-8 items-center text-center gap-6 rounded-xl">
        <h3 className="text-paragraphcolor font-bold text-xl">Fórmula E - Experiência Interativa</h3>
        <img src={ProjetoMahindra} alt="" className="rounded-xl py-14" />
        <p className="text-paragraphcolor font-semibold ssm:text-sm">Site para fãs da Fórmula E que permite acumular pontos e desbloquear poderes para pilotos durante as corridas, incentivando a participação ativa e o apoio da comunidade.</p>
        <div className="flex mt-2 flex-row gap-1 ssm:hidden sm:flex">
            <DiHtml5 size={50} color="#D1CFFD"/>
            <DiCss3 size={50} color="#D1CFFD"/>
            <DiJavascript size={50} color="#D1CFFD"/>
        </div>
        <div className="flex mt-2 flex-row gap-1 ssm:flex sm:hidden">
            <DiHtml5 size={30} color="#D1CFFD"/>
            <DiCss3 size={30} color="#D1CFFD"/>
            <DiJavascript size={30} color="#D1CFFD"/>
        </div>
        <a href="https://github.com/gabrielvara/Sprint-Web-Development" target="_blank"><button className="border-2 border-paragraphcolor p-2 rounded-md items-center flex gap-4 font-inter text-paragraphcolor text-lg">Repositório</button></a>
    </div>
  )
}

export default cards