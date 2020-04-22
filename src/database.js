import { useState, useEffect } from 'react'
import firebase from './firebase'


export const useDatabasePush = endpoint => {
    const [status, setStatus] = useState('')
    const save = data => {
        const ref = firebase.database().ref(endpoint)
        ref.push(data, err => {
            if (err) {
                setStatus('ERROR')
            } else {
                setStatus('SUCCESS')
            }
        })
    }
    return [status, save]
}


export const useDatabase = endpoint => {
    const [data, setData] = useState({})

    useEffect(() => {
        const ref = firebase.database().ref(endpoint)
        ref.on('value', snapshot => {
            console.log(snapshot.val())
            setData(snapshot.val())
        })
        return () => {
            ref.off()
        }
    }, [endpoint])
    return data
}

export const useDatabaseDelete = endpoint => {
    const [status, setStatus] = useState('')
    const removeData = () => {
        const ref = firebase.database().ref(endpoint)
        ref.remove(err => {
            if (err) {
                setStatus('ERROR')
            } else {
                setStatus('SUCCESS')
            }
        })
    }
    return [status, removeData]
}
