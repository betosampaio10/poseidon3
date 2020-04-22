import React, { useState, useContext, useEffect } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import './Home.css'
import Header from './Header'
import Avisos from './Avisos'
import NewAviso from './NewAviso'
import { AuthContext } from '../auth'
import { Redirect } from 'react-router-dom'

const Home = () => {
    const auth = useContext(AuthContext)
    const [date, setDate] = useState([])

    const onChange = date => {
        setDate(date)
        const stringDate = JSON.stringify(date)
        const year = stringDate.substr(1, 4)
        const month = stringDate.substr(6, 2)
        const day = stringDate.substr(9, 2)
        const dia = `${day}-${month}-${year}`
        window.location.href = `/AgendarAula/${dia}`
    }

    if (auth.login === 'logout') {
        return <Redirect to='/' />
    }

    return (
        <div className='home'>
            <Header />
            {
                // Botão para teste - mudança do estado do login com redirecionamento.
            }
            <button className="btn-primary btn-block" onClick={() => {
                auth.setLogin('logout')
            }}>change</button>

            {JSON.stringify(auth)}
            <div className='row mt-5'>
                <div className='col-12 col-md-4 text-center'>
                    <h2 className=''>Agendar Aula</h2>
                    <div className='ml-2'>
                        <Calendar className='calendar' onChange={onChange} />
                    </div>
                </div>
                <div className='col-12 col-md-8 ml-0 text-left'>
                    <div className='ml-3'>
                        <h2>Avisos</h2>
                        <Avisos />
                        <NewAviso />
                        <button onClick={auth.signout}>Sair</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Home

