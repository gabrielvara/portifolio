import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import Logo from '../assets/logo.svg'
import { TiAdjustContrast } from 'react-icons/ti'
import { HiMenuAlt1 } from 'react-icons/hi'
import { AiOutlineCloseCircle } from 'react-icons/ai'

const nav = () => {
const [toggle, setToggle] = useState(false);

function openMenu(){
    setToggle(true);
}

function closeMenu(){
    setToggle(false);
}
  return (
    <>
        <div className="flex items-center justify-between p-5 lg:flex-row">
            <div className='ssm:block md:hidden'>
                <NavLink to='/'><img className='h-8' src={Logo} alt="Logo 'GBL'" /></NavLink>
            </div>
            <div className='ssm:hidden md:block'>
                <NavLink to='/'><img className='h-10 ml-20' src={Logo} alt="Logo 'GBL'" /></NavLink>
            </div>
            <div className='flex items-center gap-x-5'>
                <div className="ssm:hidden md:block flex items-center space-x-10 mr-20 text-textcolor font-medium">
                    <NavLink to='/projetos'>Projetos</NavLink>
                    <NavLink to='/contato'>Contato</NavLink>
                </div>
                <div className='md:hidden ssm:block'>
                    {toggle ? (
                        <AiOutlineCloseCircle onClick={closeMenu} size={30} color='#919DD2'/>
                    ):(
                        <HiMenuAlt1 onClick={openMenu} size={30} color='#919DD2'/>
                    )}
                </div>
                <div className='ssm:block md:hidden  p-1 bg-defaultcolordarker rounded-xl'>
                    <TiAdjustContrast size={30} color='#919DD2'/>
                </div>
                <div className='ssm:hidden md:block mr-12 p-1 bg-defaultcolordarker rounded-xl'>
                    <TiAdjustContrast size={40} color='#919DD2'/>
                </div>
            </div>
        </div>

        <div className='md:hidden ssm:block'>
            {toggle ? (
                <div className='absolute end-0 mr-5 text-right '>
                <ul className='text-textcolor font-medium bg-defaultcolordarker p-2 mb-5 rounded-2xl'>
                    <li className='p-1'><NavLink to='/projetos'>Projetos</NavLink></li>
                    <hr />
                    <li className='p-1'><NavLink to='/contato'>Contato</NavLink></li>
                </ul>
            </div>
            ):(
                <div></div>
            )
            }
        </div>
    </>
  )
}

export default nav