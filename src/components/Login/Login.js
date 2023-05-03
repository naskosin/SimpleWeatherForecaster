import { useDispatch } from "react-redux";
import { logInAction } from "../../store";
import { Form } from "react-router-dom";
import { logIn } from "../../services/authService";

export const Login = ()=>{
const dispatch = useDispatch();
const loginSubmithandler =(e)=>{
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get('user');
    const password = form.get('password');
    logIn(email, password)
    .then(result=>{
        console.log(result)
   
    dispatch(logInAction(result))})
}
return(
<form onSubmit={loginSubmithandler}>
<label htmlFor="user">User</label>
<input id = 'user' name= 'user'/>
<label htmlFor="password">Password</label>
<input type='password' name= 'password'/>
<button type="submit">Submit</button>
</form>
)
}