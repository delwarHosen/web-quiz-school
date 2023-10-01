import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Path to your CSS file
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'

const Header = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className='flex justify-between bg-gradient-to-r from-cyan-500 to-blue-500 p-6'>
            <div>
                <h2 className='ml-16 text-3xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text'>WEB QUIZE SCHOOL</h2>
            </div>
            <div>
                <div onClick={() => setOpen(!open)} className='md:hidden'>
                    <span> {open === true ?
                        <XMarkIcon className="h-6 w-6 text-white"></XMarkIcon>
                        :
                        <Bars3BottomRightIcon className="h-6 w-6 text-white" />}</span>
                </div>
                <div className={`absolute duration-700 ${open ? 'top-10' : '-top-44'}`}>
                    <div className='md:flex space-x-6 -ml-16 nav'>
                        <div>
                            <Link className='font-mono text-slate-600 font-medium text-xl' to='/'>Home</Link>
                        </div>
                        <div>
                            <Link className='font-mono text-slate-600 font-medium text-xl' to='/quiz'>Quiz</Link>
                        </div>
                        <div>
                            <Link className='font-mono text-slate-600 font-medium text-xl' to='/'>Home</Link>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Header;

