import React, { useContext } from 'react'
import { AuthContext } from '../auth'
import firebase from '../firebase'
import { Redirect } from 'react-router-dom'

const Teste = () => {
    //const auth = useContext(AuthContext)
    
    const logarUsuario = (email, password) => {
        firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        
        /*.then(currentUser => {
            console.log(currentUser)
            if (currentUser.user) {
                window.location.href=`/Home`}
            })*/
            //if (currentUser) {window.location.href=`/Home`}})        
        //.catch(err => {setState({...state, error: err.message})})
        //.onAuthStateChanged(currentUser => {if (currentUser) {return <Redirect to='/Home' />}})
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
              return (window.location.href=`/Home`)
            }
          })
    }

    return(
        <div>
            <button onClick={() => logarUsuario('betsampa@hotmail.com', 'beto123')}>Entrar</button>
        </div>
    )
}

export default Teste