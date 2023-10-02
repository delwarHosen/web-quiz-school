import { toast } from "react-toastify";
import { EyeIcon } from '@heroicons/react/24/solid'



const ShowQuizOPtion = ({ questionAndOption }) => {
    // console.log(questionAndOption.options)
    // console.log(questionAndOption)
    const { question, options, correctAnswer } = questionAndOption;
    // console.log(options)


    // get quiz and clcik the option show right or wrong ans
    const handleCorrectAns = (option) => {
        // console.log(option)
        if (option === correctAnswer) {
            toast.success('Congrass', { autoClose: 300 })
        }
        else {
            toast.warning('wrong answer', { autoClose: 300 })
        }

    }

    //  Eye button click and sho the correct ans
    const handleCorrectAnsShow = () => {
        toast(correctAnswer, { autoClose: 2000 })
    }

    return (
        <div className='border m-auto p-10 my-6 w-2/3'>
            <div className="flex justify-between">
                <h2>{question}</h2>
                <EyeIcon onClick={handleCorrectAnsShow} className="h-6 w-6 text-blue-500" />
            </div>
            <div className='mt-6'>
                {
                    options.map(option => <div key={option.id} >
                        <p onClick={() => handleCorrectAns(option)}><input type="radio" value="Male" name="gender" />{option}</p>
                    </div>)
                }
            </div>
        </div >
    );
};

export default ShowQuizOPtion;