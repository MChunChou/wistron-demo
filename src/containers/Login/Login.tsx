import React, {useState} from 'react'
import './Login.scss'
import Helper from './userhelper'

import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../../store'
import {addUser, removeUser, clearAll} from '../../store/userSlice'

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

interface State {
    user: null | string;
    password: null | string;
}

const Login: React.FC = () => {

    const hu = useAppSelector(state => state.user);
    const dispatch = useDispatch();
    
    const user : State = {
        user: null,
        password: null,
    }

    const [state, setState] = useState(user);
    

    function handleInputChange(evt: React.ChangeEvent<HTMLInputElement> ): void {
        const {value, name} = evt.target;

        if(name === 'user'){
            setState({user: value, password: state.password})
        }else if(name === 'pwd'){
            setState({user: state.user, password:value})
        }        
    }

    function handleLogin(): void {
        const {user, password} = state;        

        if(user != null && password != null){
           if(Helper({name: user, password: password})){
               alert("You Are Login");
               dispatch(addUser({name: user, status: true}))
           }else {
               alert("Your username or password is wrong");
               dispatch(addUser({name: user, status: false}))
           }
        }else {
            alert("Please Enter username and password")
        }
    }

    return (<div className="login">    
            <div className='login-form'>
            <input name='user' placeholder='User' className='circle-input' onChange={handleInputChange}></input>
            <input type='password' placeholder='Password' name='pwd' className='circle-input' onChange={handleInputChange}></input>        
            <input type='button' name='login' className='circle-button' onClick={handleLogin} value="Login"></input>
            </div>           
            <div className='login-log'>
                <div>Login Status</div>
                <ul>
                {
                    hu.map((o,i)=>{
                        return <li key={`status-${i}`}>{`User: ${o.name} login  ${o.status? '': 'failed'}`} <button className='cancle-status' onClick={(e)=>{
                            dispatch(removeUser(i))
                        }}>X</button></li>
                    })
                }
                </ul>
                <button onClick={()=>{dispatch(clearAll())}}>Clear ALL</button>
            </div>     

            <div className='show-redux-state'>
                <div>Redux states</div>
                {hu.map((v, i)=>{
                    return <div key={i}>{JSON.stringify(v)}</div> 
                })}
            </div>
    </div>)
}

export default Login;