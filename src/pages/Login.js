import React, { useContext, useState, useEffect } from 'react'
import './Login.css'
import Header from './Header'
import { AuthContext } from '../auth'
import firebase from '../firebase'
import { Redirect } from 'react-router-dom'


const Login = () => {
    const auth = useContext(AuthContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    if (auth.login === 'login') {        
        return <Redirect to='/home' />
    }

    return (
        <div className='inicial'>
            <Header />
            <div id='login'>
                <div className='container'>
                    <div id='login-row' className='row justify-content-center align-items-center'>
                        <div id='login-column' className='col-md-6'>
                            <div id='login-box' className='col-md-12'>
                                <div id='login-form' className='form' action='' method='post'>
                                    <h3 className='text-center text-info'>Logar</h3>
                                    <div className='form-group'>
                                        <label for='username' className='text-info'>Usuário:</label>
                                        <input type='text' name='username' id='username' className='form-control' placeholder='Digite seu e-mail' onChange={evt => { setEmail(evt.target.value) }} value={email} />
                                    </div>
                                    <div className='form-group'>
                                        <label for='password' className='text-info'>Senha:</label><br />
                                        <input type='password' name='password' id='password' className='form-control' placeholder='Digite sua senha' onChange={evt => { setPassword(evt.target.value) }} value={password} />
                                    </div>
                                    {
                                        auth.signInUser.signInUserState.error !== '' &&
                                        <p>{auth.signInUser.signInUserState.error}</p>
                                    }
                                    <div className='text-center'>
                                        <button onClick={() => auth.signInUser.signInUser(email, password)}>Entrar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login