import React, { useState, useEffect } from 'react'
import {useDatabase, useDatabaseDelete} from '../database'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'



const Alunos = ({ horario, dia }) => {
    const data = useDatabase (`alunos/${dia}/${horario}`)
    const [id, setId] = useState('')
    const [status, del] = useDatabaseDelete(`alunos/${dia}/${horario}/${id}`)
    const [cont, setCont] = useState(0)
    useEffect(() => {
        if(id!==''){
            del()
        }
    },[id])
    
    const excluirAluno = id => {
        setId(id)        
    }
    
    
    
    
    if(!data) {
        return <div> Nenhum aluno até o momento!</div>
    }
    const ids = Object.keys(data)


    return ids.map(id => {        
        return (
            <>
                <div className='row m-0 p-1'>
                    <p className='m-0 col-8'>{data[id].nome}</p>                    
                    <button type="button" class="btn btn-danger btn-sm col-4" onClick={() => excluirAluno(id, data[id].nome)}>Excluir</button>
                </div>
            </>                     
        )   
    })
}

export default Alunos
