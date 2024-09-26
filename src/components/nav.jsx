import Logo from '../assets/logo.svg'

const nav = () => {
  return (
    <>
        <div className="flex items-center justify-between p-5 lg:flex-row">
            <div>
                <img className='h-10 ml-20' src={Logo} alt="Logo 'GBL'" />
            </div>
            <div className='flex'>
                <div className="ssm:hidden md:block flex items-center space-x-10 mr-20 text-textcolor font-medium">
                    <a href="#">Projetos</a>
                    <a href="#">Habilidades</a>
                    <a href="#">Contato</a>
                </div>
                <img src="" alt="" />
                <img className='mr-10 rounded-2xl p-1 h-8 bg-defaultcolordarker' src={} alt="" />
            </div>
        </div>
    </>
  )
}

export default nav