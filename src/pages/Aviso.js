import React, { useState, useEffect } from 'react'
import { useDatabaseDelete } from '../database'

const Aviso = ({ comment, id }) => {
    const [idExcluir, setIdExcluir] = useState('')
    const [, del] = useDatabaseDelete(`avisos/${idExcluir}`)

    useEffect(() => {
        if(idExcluir!==''){
            del()
        }
    },[idExcluir])

    const excluirAviso = () => {
        setIdExcluir(id)
        console.log('idExcluir = ', idExcluir)
    }    

    return (
        <div className='p-0 m-0 row'>
            <p className='p-0 m-0 overflow-hidden col-12 col-md-10'>
                {comment.content}
            </p>
            <button type='button' className='btn btn-danger ml-1 ml-md-5 float-right m-0 col-3 col-md-1' onClick={() => excluirAviso()}>Excluir</button>
        </div>
    )
}

export default Aviso