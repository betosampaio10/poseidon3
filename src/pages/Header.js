import React from 'react'
import logo from '../imgs/logoCompleto1.png'
import {Link} from 'react-router-dom'

const Header = () => {
    return(
        <div className='row mt-3'>
            <span className='col-2'></span>
            <Link to='/Home'><img className='col-12 float-center' src={logo}></img></Link>
            <span className='col-2'></span>
        </div>
    )
}

export default Header