import React, { useState, useEffect } from 'react'
import firebase from './firebase'
import { Redirect } from 'react-router-dom'

export const AuthContext = React.createContext()

const useGetUser = () => {
    const [user, setUser] = useState(null)
    const [login, setLogin] = useState('login')

    useEffect(() => {
        firebase.auth().onAuthStateChanged(currentUser => {
            if (currentUser) {
                setUser(currentUser) 
                setLogin('login')              
            } else {
                setUser(null)
                setLogin('logout')   
            }
        })
    }, [])
    return [user, login, setLogin]
}

const useSignInUser = () => {
    const [state, setState] = useState({
        error: '',
        success: ''
    })
    const signInUser = (email, passwd) => {
        firebase
        .auth()
        .signInWithEmailAndPassword(email, passwd)
        .catch(err => {
            setState({
                ...state,
                error: err.message
            })
        })
    }
    return [state, signInUser]
}

const signout = () => {
    firebase
        .auth()
        .signOut()
        .then(() => {
            console.log('signout')
    })
}



const useCreateUser = () => {
    const [state, setState] = useState({
        error: '',
        success: ''
    })
    const createUser = (email, passwd) => {
        firebase
        .auth()
        .createUserWithEmailAndPassword(email, passwd)
        .then( user => {
            if(user) {
                setState({
                    ...state,
                    success: 'Ok'
                })
            }
        })
        .catch(err => {
            setState({
                ...state,
                error: err.message
            })
        })
    }
    return [state, createUser]
}


export const AuthProvider = ({ children }) => {
    const [user, login, setLogin] = useGetUser()
    const [createUserState, createUser] = useCreateUser()
    const [signInUserState, signInUser] = useSignInUser()
    return (
        <AuthContext.Provider value={{ user,
        createUser:{
            createUserState, createUser
        },
        signInUser: {
            signInUser, signInUserState
        },
        signout,
        login,
        setLogin
    }
    }>
            {children}
        </AuthContext.Provider>
    )
}