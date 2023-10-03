import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ShowQuizOPtion from '../ShowQuizOPtion/ShowQuizOPtion';

const ShowQuizeDetails = () => {
    const data = useLoaderData();
    const questionAndOptions = data.data.questions;
    // console.log(questionAndOptions)
    return (
        <div>
            <h3 className='text-center font-serif text-2xl font-bold mt-4 text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900'>Quiz Name: {data.data.name}</h3>
            <h4 className='text-center font-serif text-2xl font-bold mt-4 text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900'>Total Question: {data.data.total}</h4>
            {

                questionAndOptions.map(questionAndOption => <ShowQuizOPtion
                    key={questionAndOption.id}
                    questionAndOption={questionAndOption}
                ></ShowQuizOPtion>)
            }
        </div>
    );
};

export default ShowQuizeDetails;