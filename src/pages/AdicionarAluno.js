import React from 'react'
import { useDatabasePush } from '../database'

const AdicionarAluno = (aluno, data, horario) => {
    const [status, save] = useDatabasePush(`alunos/${data}/${horario}`)
    const createAluno = () => {
        if(aluno!='') {
          save({
            aluno
            })
        }        
    } 
    createAluno()
}

export default AdicionarAluno