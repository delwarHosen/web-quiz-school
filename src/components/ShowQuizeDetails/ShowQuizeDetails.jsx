import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ShowQuizOPtion from '../ShowQuizOPtion/ShowQuizOPtion';

const ShowQuizeDetails = () => {
    const data = useLoaderData();
    const questionAndOptions = data.data.questions;
    // console.log(questionAndOptions)
    return (
        <div>
            <h3>Quiz Of {data.data.name}</h3>
            <h4>Total Question {data.data.total}</h4>
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