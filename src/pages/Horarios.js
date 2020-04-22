import React from 'react'
import Horario from './Horario'
import { useDatabase, useDatabasePush } from '../database'


const Horarios = () => {
    const dia = window.location.href.substr(-10,10)
    const diaFormatado = dia.replace('-','/').replace('-', '/')
    const data = useDatabase (`aulas/${dia}`)
    if (!data) {
        return <div>Nenhum horário planejado até o momento!</div>
    }
    const ids = Object.keys(data)
    return ids.map(id => {
        return <Horario key={id} horario={data[id]} id={id} />
    })
}

export default Horarios