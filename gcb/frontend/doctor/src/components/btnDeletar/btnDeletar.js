import React,{useState} from 'react';
import '../btnDeletar/btnDeletar.css';
import api from '../../services/api.js';

const BtnDeletar = (props)=>{

    const [id, setId] = useState('');
    
    function deletar(){
        const id2 = props.idDoctor;
        setId(id2)
        const data = {"id": id2}
        api.delete(`/doctors/${id2}`);

        console.log(data)
    }
   
    return(
        <>
        <button id='btnDeletar' type='submit' onClick={deletar}>Deletar</button>
        </>
    )

}


export default BtnDeletar;

