import React from 'react'
import './counter.css' 
import {useSelector , useDispatch} from 'react-redux'
import {increment,decrement} from '../redux/reducer/reducer'

export const Counter = () => {
    const count = useSelector((state)=>state.counter.value)
    const dispatch = useDispatch()
  return (
    <div className='counter-container'>
        <h2 className='counter-title'>
            React js Redux Sample
        </h2>
        <p className='counter-value'>{count}</p>

        <div className="conter-buttons">
            <button className="counter-button" onClick={()=>dispatch(increment())}>
                increment
            </button>
            <button className="counter-button" onClick={()=>dispatch(decrement())}>
                decrement
            </button>
        </div>
    </div>
  )
}
