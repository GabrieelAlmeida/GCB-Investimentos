import React from 'react';
import {Link} from 'react-router-dom';
import '../header/header.css'


export default class Header extends React.Component{


    render(){
        return(
            <header>
                <Link to='/'><h3>Cadastrar</h3></Link>
                <Link to='/listar-doctor'><h3>Médicos</h3></Link>
            </header>
        )
    }
}
