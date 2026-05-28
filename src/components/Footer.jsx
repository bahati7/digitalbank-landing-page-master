import {aboutLinks, careerLinks} from "../constants";
import logo from '../assets/logo-light.svg';
import youtube from '../assets/icon-youtube.svg';
import facebook from '../assets/icon-facebook.svg';
import twitter from '../assets/icon-twitter.svg';
import instagram from '../assets/icon-instagram.svg';

const Footer = () => {
  return (
    <footer className=" border-t py-10 border-neutral-700">
        <div className=" grid grid-cols-1 lg:grid-cols-4 gap-2">
            <div className="flex flex-col items-center md:items-start gap-2">
                <img className='h-10 w-32' src={logo} alt="logo" />
                <p className="pt-12">
                    <img className="inline mr-2" src={facebook} alt="facebook" />
                    <img className="inline mr-2" src={youtube} alt="youtube" />
                    <img className="inline mr-2" src={twitter} alt="twitter" />
                    <img className="inline mr-2" src={instagram} alt="instagram" />
                </p>
            </div>
            <div>
                
                <ul className="space-y-2 flex flex-col items-center md:items-start gap-2">
                    {aboutLinks.map((link,index)=>(
                        <li key={index} className="mb-2 pt-4 text-sm">
                            <a href={link.href} className="text-neutral-50 hover:text-neutral-300 transition duration-200">{link.text}</a>
                        </li>
                    ))}
                </ul>
            </div>

             <div>
              
                <ul className="space-y-2 flex flex-col items-center md:items-start gap-2">
                    {careerLinks.map((link,index)=>(
                        <li key={index} className="mb-2 text-sm pt-4">
                            <a href={link.href} className="text-neutral-50 hover:text-neutral-300 transition duration-200">{link.text}</a>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="flex flex-col items-center md:items-end gap-2">
                     <a href="" className="py-2 px-5 rounded-full text-white bg-linear-to-r from-brand-green to-brand-cyan hover:opacity-90 active:scale-98">Request Invite</a>
                        <p className="text-sm text-neutral-500 mt-4">© Digitalbank. All Rights Reserved</p>
            </div>

        </div>
   </footer>
  )
}

export default Footer