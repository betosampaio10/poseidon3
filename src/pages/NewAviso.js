import React, { useState, useContext } from 'react'
import { useDatabasePush } from '../database'
import firebase from 'firebase'

const NewAviso = () => {
  const [, save] = useDatabasePush('avisos')
  const [comment, setComment] = useState('')

  const createComment = () => {
    if(comment!=='') {
      save({ content: comment
      })
      setComment('')
    }
  }
  return(
    <div className='mr-5 mb-0 mt-2'>
      <div className="form-group">
        <textarea value={comment} class="form-control" id="exampleFormControlTextarea1" rows="3" onChange={evt => setComment(evt.target.value)}></textarea>
      </div>
      <button className='m-0 btn btn-light' onClick={createComment}>Comentar!</button>
    </div>
  )
}

export default NewAviso