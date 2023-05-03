import { State } from "@ngrx/store"
import { useSelector, useDispatch } from "react-redux";
import {increment, decrement} from '../../store'


export const GreetingsTwo=()=>{
   const counter = useSelector((state)=>{return state});
   console.log(counter)
    //const dispatch = useDispatch();
    return(
        <>
        <p style={{color:'green'}}>Nice to meet you {counter.email}</p>
        {/* <button onClick={()=>dispatch(increment())}>Increment</button><button onClick={()=>dispatch(decrement())}>Decrement</button> */}
        </>
    )
}