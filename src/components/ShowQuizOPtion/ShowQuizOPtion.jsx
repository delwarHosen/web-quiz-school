const ShowQuizOPtion = ({ questionAndOption }) => {
    console.log(questionAndOption)
    const { question, options, correctAnswer } = questionAndOption;

    const handleCorrectAns = () => {
        console.log('clicked')
    }

    return (
        <div className='border m-auto p-10 my-6 w-4/5'>
            <h2>{question}</h2>
            <div className='mt-6'>
                {
                    options.map(option => <div key={option.id} onClick={handleCorrectAns}>
                        <input type="radio" value="Male" name="gender" /> <> {option}</>
                    </div>)
                }
            </div>
        </div >
    );
};

export default ShowQuizOPtion;