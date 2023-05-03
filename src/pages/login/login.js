import {useState} from 'react';
import { useNavigate } from 'react-router';


function Login(){

    const [name, setName] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    const handleNameChange = (event) => {
        setName(event.target.value)
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }

    const handleClick = () => {
        if(name === 'admin' && password === 'admin'){
            navigate('/');
        }else{
            navigate('/users')
        }

    }

    return(
        <div className="login_container">
            <h1>Login</h1>
            <input placeholder="Please enter your username" type='text' onChange={handleNameChange}/>
            <input placeholder="Please enter your username" type='password' onChange={handlePasswordChange}/>
            <button onClick={handleClick}>Login</button>
        </div>
    )
}

export default Login;