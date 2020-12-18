import React from 'react';
import Header from '../components/header/header.js';
import FormDoctor from '../components/form/form.js';

export default class CadDoctor extends React.Component{

    render(){
        return(
            <>
                <Header/>
                <FormDoctor/>
            </>
           
        )
    }
}