import React from 'react'
import Login from './pages/Login'
import Home from './pages/Home'
import EscolhaCidade from './pages/EscolhaCidade'
import Teste from './pages/Teste'
import AgendarAula from './pages/AgendarAula'
import AdicionarHorario from './pages/AdicionarHorario'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { AuthProvider } from './auth'

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <div className='App'>
          <Route path='/' exact component={Login} />
          <Route path='/Teste' exact component={Teste} />
          <Route path='/EscolhaCidade' exact component={EscolhaCidade} />
          <Route path='/Home' exact component={Home} />
          <Route path='/AgendarAula/:id' exact component={AgendarAula} />
          <Route path='/AgendarAula/' exact component={AgendarAula} />
          <Route path='/AdicionarHorario/:id' exact component={AdicionarHorario} />
          </div>
        </Switch>   
      </Router>
    </AuthProvider>
  )
}

export default App