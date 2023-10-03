import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeftCircleIcon, ArrowRightIcon, EyeIcon } from '@heroicons/react/24/solid'

const ShowQuize = ({ showQuizType }) => {
    const { logo, name, id } = showQuizType;
    // console.log(showQuizType)
    const navigate = useNavigate()
    const handleShowQuiz = () => {
        navigate(`/quiz/${id}`)
    }
    return (
        <div className='w-[375px] mx-auto border rounded-md shadow-lg bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900'>
            <img className='w-44 h-44 m-auto' src={logo} alt="" />
            <div className='flex  justify-around mt-6'>
                <p className='text-white font-semibold'>{name}</p>
                <button onClick={handleShowQuiz} className='bg-cyan-500 hover:bg-cyan-400 px-4 py-2 rounded-md font-mono mb-4 text-white flex justify-center items-center'><p>Start Practice</p><ArrowRightIcon className='w-4 h-5'></ArrowRightIcon> </button>
            </div>
        </div>
    );
};

export default ShowQuize;

