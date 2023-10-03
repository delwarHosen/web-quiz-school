import React from 'react';
import { useNavigate } from 'react-router-dom';

const ShowQuize = ({ showQuizType }) => {
    const { logo, name, id } = showQuizType;
    // console.log(showQuizType)
    const navigate = useNavigate()
    const handleShowQuiz = () => {
        navigate(`/quiz/${id}`)
    }
    return (
        <div className='border rounded-md shadow-lg bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900'>
            <img className='w-64 h-56 m-auto' src={logo} alt="" />
            <div className='flex  justify-around mt-6'>
                <p className='text-white font-semibold'>{name}</p>
                <button onClick={handleShowQuiz} className='bg-cyan-500 hover:bg-cyan-600 px-4 py-2 rounded-sm font-mono mb-4 text-white '>Start Practice</button>
            </div>
        </div>
    );
};

export default ShowQuize;

