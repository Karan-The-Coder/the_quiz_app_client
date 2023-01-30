import React, { useEffect, useState } from 'react'

// custom hook
import { useFetchQuestion } from '../hooks/FetchQuestion';

// redux store import
import {useDispatch, useSelector} from 'react-redux'

// import { updateResultAction } from '../redux/result_reducer';
import { updateResult } from '../hooks/SetResult';

const Questions = ({ onChecked }) => {

    // react Hook
    const [checked, setChecked] = useState(undefined);
    const { trace } = useSelector(state => state.questions)
    const result  = useSelector(state => state.result.result)
    const [{ isLoading , apiData, serverError }] = useFetchQuestion();
   

    // react Hook 
    const questions = useSelector(state => state.questions.queue[state.questions.trace]);

    const dispatch = useDispatch() 

    useEffect(()=> {
        dispatch(updateResult({trace, checked}))
    })


    // Radio button event handler
    function onSelect(i){
        onChecked(i)
        setChecked(i)
        dispatch(updateResult({trace, checked}))
    }

    if(isLoading) return <h3 className="text-light">Please wait while Loading...</h3>
    if(serverError) return <h3 className="text-light">{serverError || "Unknown Error"}</h3>

  return (
    <div className='questions'>
        <h2 className='text-light'>{questions?.questions}</h2>

        <ul key={questions?.id}>
            {
                questions?.options.map((q, i)=>(
                    <li key={i}>
                        <input 
                            type="radio"
                            value={false}
                            name="options"
                            id={`q${i}-option`}
                            onChange={() => onSelect(i)} 
                        />
        
                        <label htmlFor={`q${i}-option`} className='text-primary'>{q}</label>
                        <div className={`check ${ result[trace] === i ? 'checked' : '' }`}></div>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default Questions
