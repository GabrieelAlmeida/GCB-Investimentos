import React,{useState} from 'react';
import '../btnAlterar/btnAlterar.css';
import api from '../../services/api.js';
import FormAlterarDoctor from '../form/formAlterar.js';

const BtnAlterar = (props)=>{

    const [id, setId] = useState('');
    
    function alterar(){
        const id2 = props.idDoctor;
        /*setId(id2)
        const data = {"id": id2}
        api.delete(`/doctors/${id2}`);

        console.log(data)*/
        console.log(id2)
        document.location.pathname = `/alterar-doctor/${id2._id}`;
        
            
        
        
    }

   
    return(
        <>
        <button id='btnAlterar' type='submit' onClick={alterar}>Alterar</button>
        {/*<FormAlterarDoctor idDoctor={props.idDoctor}/>*/}
        </>
    )

}


export default BtnAlterar;

