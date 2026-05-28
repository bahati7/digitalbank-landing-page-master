import logo from '../assets/logo-dark.svg';
import close from '../assets/icon-close.svg';
import menu from '../assets/icon-hamburger.svg';
import {useState} from 'react';
import { navItems } from "../constants";

const Navbar = () => {

    const [mobileDropdown, setMobileDropdown] = useState(false);

    const toggleMobileDropdown = () => {
        setMobileDropdown(!mobileDropdown);
    }

  return (
<nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b
    border-neutral-200/50">

           <div className="container px-4 mx-auto relative text-sm">
            <div className="flex justify-between items-center">
                <div className="flex items-center shrink-0">
                    <img className='h-10 w-32' src={logo} alt="logo" />
                    
                </div>
                <ul className='hidden lg:flex ml-14 space-x-12'>
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <a href={item.href} >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className="hidden lg:flex justify-center space-x-12 items-center">
                    <a href="" className="py-2 px-5 rounded-full text-white bg-linear-to-r from-brand-green to-brand-cyan hover:opacity-90 active:scale-98">Request Invite</a>
                    
                </div>
                <div className="lg:hidden md:flex flex-col justify-end">
                    <button onClick={toggleMobileDropdown}>
                        {mobileDropdown ?  <img className='h-5 w-5' src={close} alt="logo" /> :  <img className='h-5 w-5' src={menu} alt="logo" />}
                    </button>
                </div>
            </div>
            {mobileDropdown && (
                <div className='fixed right-0 z-20   w-full  p-12 flex flex-col
                 justify-center items-center lg:hidden text-center'>
                    <div className='bg-white p-12 w-full rounded-md'>
                    <ul className='text-black'>
                        {navItems.map((item,index)=>(
                            <li key={index} className='py-4'>
                                <a href={item.ref}>{item.label}</a>
                            </li>

                        )

                        )}
                    </ul>
                  </div>

                </div>
            )}
        </div>
    </nav>
  )
}

export default Navbar