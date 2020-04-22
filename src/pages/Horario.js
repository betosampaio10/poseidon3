import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDatabasePush, useDatabaseDelete, useDatabase } from '../database'
import Alunos from './Alunos'



const Horario = ({ horario, id }) => {
    const dia = window.location.href.substr(-10,10)
    const [idExcluir, setIdExcluir] = useState('')
    const [status, save] = useDatabasePush(`alunos/${dia}/${horario.horario}`)
    const [, del] = useDatabaseDelete(`aulas/${dia}/${idExcluir}`)
    const [, del2] = useDatabaseDelete(`alunos/${dia}/${horario.horario}`)
    const alunos = useDatabase(`alunos/${dia}/${horario.horario}`)
    const [totalAlunos, setTotalAlunos] = useState(0)
    
    useEffect(()=> {
        if (!alunos) {
            setTotalAlunos(0)
        } else {
            setTotalAlunos(Object.keys(alunos).length)
        }
    }, [alunos])
    
    const [nome, setNome] = useState('')

    const adicionarAluno = numAlunos => {  
        if(nome!='' && numAlunos > totalAlunos) {      
            save({
                nome
            })
            setNome('')
        } else {
            alert('Número máximo de alunos atingido!')
        }      
    }
    
    useEffect(() => {
        if(idExcluir!==''){
            del()
            del2()
        }
    },[idExcluir])
    
    const excluirHorario = () => {
        setIdExcluir(id)
    }
    
 return (
    <div className="card col-12 col-md-3 mt-5 p-0 mb-3 ">
        <div className='row m-0 card-header' >
            <div className='ml-0'>
                <h5 className='m-0'>Horário - {horario.horario}</h5>
                <p className='m-0'><div className='mt-0 alunos'>Alunos máximos: {horario.numAlunos} {}</div></p>
                <p className='m-0'><div className='mt-0 alunos'>Vagas Disponíveis: {horario.numAlunos-totalAlunos} {}</div></p>
            </div>            
            <button type='button' className='btn btn-danger ml-2 float-right' onClick={() => excluirHorario()}>Excluir</button>
        </div >
        <div className='row m-0 mt-1 p-0'>
            <div className='col-2 p-0 m-0'></div>
            <button className='btn btn-success col-4 mr-1'>Agendar</button>
            <button className='btn btn-danger col-4'>Cancelar</button>
            <div className='col-2 p-0 m-0 '></div>
        </div>
        <div className='row mt-2'>
            <h5 className='col-12 text-center'>Alunos confirmados:</h5>
        </div>
        <div>
        <div className='m-0'>
         <Alunos horario={horario.horario} dia={dia}/>
        </div>        
        <div className='m-0 p-0'>
            <input type='text' value={nome} onChange={evt => setNome(evt.target.value)} className='col-8' placeholder='Digite o nome aqui'></input>
            <button className='p-0 m-0 btn btn-success col-4'onClick={() => adicionarAluno(horario.numAlunos)}>Adicionar!</button>
        </div>
        </div>
        
        
    </div>
    )
}

export default Horario
