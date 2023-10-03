import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ShowQuize from '../ShowQuize/ShowQuize';
const Home = () => {
    const quizes = useLoaderData();
    const showQuizTypes = quizes.data;
    // console.log(showQuizTypes)
    return (
        <div className='grid sm:grid-cols-2 gap-y-10 mt-2 mb-20'>
            {
                showQuizTypes.map(showQuizType => <ShowQuize
                    key={showQuizType.id}
                    showQuizType={showQuizType}
                ></ShowQuize>)
            }
        </div>
    );
};

export default Home;