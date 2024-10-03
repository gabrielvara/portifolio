import React from 'react'

const contato = () => {
  return (
    <div className='flex flex-col justify-center'>
        <h1 className="font-inter text-textcolor text-5xl font-bold mb-10 self-center">Contato</h1>
        <div className="flex items-center justify-center">
        <div className="w-full max-w-5xl rounded-lg p-8">
            <form className="space-y-4">
            <div>
                <label className="block text-paragraphcolor">Nome</label>
                <input
                type="text"
                className="shadow-[0px_5px_8px_14px_rgba(0,_0,_0,_0.1)] w-full mt-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-textcolor"
                placeholder="Seu nome"
                />
            </div>

            <div>
                <label className="block text-paragraphcolor">Email</label>
                <input
                type="email"
                className="shadow-[0px_5px_8px_14px_rgba(0,_0,_0,_0.1)] w-full mt-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-textcolor"
                placeholder="Seu email"
                />
            </div>

            <div>
                <label className="block text-paragraphcolor">Mensagem</label>
                <textarea
                className="shadow-[0px_5px_8px_14px_rgba(0,_0,_0,_0.1)] w-full mt-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-textcolor"
                rows="4"
                placeholder="Sua mensagem"
                ></textarea>
            </div>

            <div className="text-center">
                <button
                type="submit"
                className="w-full shadow-[0px_5px_8px_14px_rgba(0,_0,_0,_0.1)] bg-textcolor text-white py-2 px-4 rounded-lg hover:bg-paragraphcolor focus:outline-none focus:ring-2 focus:ring-paragraphcolor"
                >
                Enviar
                </button>
            </div>
            </form>
        </div>
        </div>
    </div>
  )
}

export default contato