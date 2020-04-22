import React, { useState, useContext } from 'react'
import { useDatabasePush } from '../database'
import Header from './Header'
import { AuthContext } from '../auth'
import { Redirect } from 'react-router-dom'


const AdicionarHorario = () => {
    const auth = useContext(AuthContext)
    const dia = window.location.href.substr(-10,10)
    const [horario, setHorario] = useState('')
    const [status, save] = useDatabasePush(`aulas/${dia}`)    
    const [numAlunos, setNumAlunos] = useState('')
    

    const createhorario = () => {
        if(horario!=='' && numAlunos!=='') {
          save({
            numAlunos,
            horario
            })
            setHorario('')
            setNumAlunos('')
        }        
      }    

      if (auth.user === null) {
        return <Redirect to='/' />
    }

    return(
        <div>
            <Header />
            <h1 className='mt-3 ml-2'>Adicionar Horário</h1>
            {status=='SUCCESS' && <div class="alert alert-success" role="alert">Horário salvo com sucesso!</div>}
            <div class='row ml-2'>
                <label className='col-5 col-md-2'>Número de alunos:</label>
                <input type='number' value={numAlunos} className='ml-2 col-6 col-md-1' onChange={evt => setNumAlunos(evt.target.value)}></input> <br />
            </div>
            <div className='row ml-2 mt-2'>
                <label className='col-5 col-md-2'>Horário:</label>
                <input type='time' value={horario} onChange={evt => setHorario(evt.target.value)} className='ml-2 col-6 col-md-1'></input>
            </div>
            <div className='row mt-2 ml-2'>
                <button onClick={createhorario} className='btn btn-success col-5 col-md-1'>Confirmar</button>
                <button className='btn btn-warning ml-1 col-6 col-md-1' onClick={() => {window.location.href=`/AgendarAula/${dia}`}}>Voltar</button>
            </div>
            
        </div>
    )
}

export default AdicionarHorario