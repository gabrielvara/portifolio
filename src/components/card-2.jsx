import { DiNodejsSmall, DiJsBadge, DiCodeBadge } from "react-icons/di"
import ProjetoInterpreter from "../assets/projeto-interpreter.svg"

const cards = () => {
  return (
    <div className="flex flex-col shadow-[0px_5px_8px_14px_rgba(0,_0,_0,_0.1)] ssm:w-64 sm:w-96 p-8 items-center text-center gap-6 rounded-xl">
        <h3 className="text-paragraphcolor font-bold text-xl">Interpretador de CSV</h3>
        <img src={ProjetoInterpreter} width={230} alt="" className="rounded-xl" />
        <p className="text-paragraphcolor font-semibold ssm:text-sm">Script em JavaScript, Node.js e BAT para interpretar e resumir arquivos CSV de pagamentos da Booking, automatizando a gestão de dados para estabelecimentos.</p>
        <div className="flex mt-2 flex-row gap-1 ssm:hidden sm:flex">
            <DiNodejsSmall size={50} color="#D1CFFD"/>
            <DiJsBadge size={50} color="#D1CFFD"/>
            <DiCodeBadge size={50} color="#D1CFFD"/>
        </div>
        <div className="flex mt-2 flex-row gap-1 ssm:flex sm:hidden">
            <DiNodejsSmall size={30} color="#D1CFFD"/>
            <DiJsBadge size={30} color="#D1CFFD"/>
            <DiCodeBadge size={30} color="#D1CFFD"/>
        </div>
        <a href="https://github.com/gabrielvara/bookingcsv-enterpreter" target="_blank"><button className="border-2 border-paragraphcolor p-2 rounded-md items-center flex gap-4 font-inter text-paragraphcolor text-lg">Repositório</button></a>
    </div>
  )
}

export default cards