import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ShowQuizOPtion from '../ShowQuizOPtion/ShowQuizOPtion';

const ShowQuizeDetails = () => {
    const data = useLoaderData();
    const questionAndOptions = data.data.questions;
    // console.log(data.data.questions)
    return (
        <div>
            <h3>Quiz Of {questionAndOptions.name}</h3>
            <h4>Total Question {questionAndOptions.total}</h4>
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