import React, { useContext } from 'react'
import Header from './Header'
import './AgendarAula.css'
import { Link } from 'react-router-dom'
import './AgendarAula.css'
import Horarios from './Horarios'
import { AuthContext } from '../auth'
import { Redirect } from 'react-router-dom'


const AgendarAula = () => {
    const auth = useContext(AuthContext)
    const dia = window.location.href.substr(-10,10)
    const diaFormatado = dia.replace('-','/').replace('-', '/')

    if (auth.user === null) {
        return <Redirect to='/' />
    }

    return (
        <div>
            <Header />
            <div className='container'>
                <div className='row mt-2'>
                    <h3 className='col-6 col-md-4'>{diaFormatado}</h3>
                </div>
                <div className='row ml-0'>
                    <Link to={`/AdicionarHorario/${dia}`}><button className='btn btn-primary mt-3'>Adicionar Horário</button></Link>
                </div>
                <Horarios />
            </div>
        </div>        
    )
}

export default AgendarAula