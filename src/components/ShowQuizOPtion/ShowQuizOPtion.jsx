import { toast } from "react-toastify";
import { EyeIcon } from '@heroicons/react/24/solid'



const ShowQuizOPtion = ({ questionAndOption }) => {
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
        <div className='border rounded m-auto p-10 my-6 sm:w-10/12 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 shadow'>
            <div className="flex justify-between">
                <h2 className='font-serif text-sm font-semibold mt-4 text-white'>{question}</h2>
                <EyeIcon onClick={handleCorrectAnsShow} className="h-6 w-6 text-white" />
            </div>
            <div className='mt-6 grid sm:grid-cols-2'>
                {
                    options.map(option => <div key={option.id} >
                        <p className='font-serif font-bold mt-2 text-white m-4' onClick={() =>
                            handleCorrectAns(option)}><input type="radio" value="Male" name="gender" />{option}</p>
                    </div>)
                }
            </div>
        </div >
    );
};

export default ShowQuizOPtion;