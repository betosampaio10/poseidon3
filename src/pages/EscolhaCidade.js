import React, { useContext} from 'react'
import './EscolhaCidade.css'
import { AuthContext } from '../auth'
import { Redirect } from 'react-router-dom'

const EscolhaCidade = () => {
    const auth = useContext(AuthContext)
    if (auth.user === null) {
        return <Redirect to='/' />
    }

    return(
        <div className='escolhacidade'>
            <div>Qual praia você quer agendar suas aulas?</div>
            <div className='p-3'>
                <button type="button" className="btn btn-primary btn-lg botao">Santos</button>
                <button type="button" className="btn btn-secondary btn-lg botao">Guarujá</button>
            </div>            
        </div>
    )
}

export default EscolhaCidade