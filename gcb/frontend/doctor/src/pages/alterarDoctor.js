import React from 'react';
import Header from '../components/header/header.js';
import FormAlterarDoctor from '../components/form/formAlterar';

export default class AlterarDoctor extends React.Component{

    render(){
        return(
            <>
                <Header/>
                <FormAlterarDoctor/>
            </>
           
        )
    }
}