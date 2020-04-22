import React from 'react'
import Aviso from './Aviso'

import { useDatabase} from '../database'

const Avisos = () => {
    const data = useDatabase('avisos')

    if(!data){
        return <p>Nenhum aviso enviado até o momento.</p>
    }
    
    const ids = Object.keys(data)
    if(ids.length === 0) {
      return <p>Carregando...</p>
    }
    return ids.map( id => {
      return (
        <div className='mt-2 row mr-5'>
            <div className='col-12'>
                <Aviso key={id} comment={data[id]} id={id} />
            </div>            
        </div>
    )})
}


export default Avisos