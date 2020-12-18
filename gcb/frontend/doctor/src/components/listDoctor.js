
import React, {useState, useEffect} from 'react';
import api from '../services/api';
import './listDoctor/listDoctor.css';
import Deletar from '../components/btnDeletar/btnDeletar.js';
import Alterar from '../components/btnAlterar/btnAlterar.js';
import {Link} from 'react-router-dom';

export default function Listar(){

    const [doctor, setDoctor] = useState([]);
    const [search, setSearch] = useState([]);

    useEffect(() =>{
        loadDoctor();
        //console.log('h')

        const d= document.getElementsByClassName('appList');

        
        for (var i=0;i<d.length;i+=1){
            d[i].style.display = 'none';
        }

        


    });

    const loadDoctor = async () =>{
        const response = await api.get('/doctors');
        //console.log(response.data);

        setDoctor(response.data);


    };

    const pesquisar = async (e) =>{
        //console.log(typeof(e));
        //console.log(window.location.pathname + '/' + e);
        
        //document.getElementsByClassName('appList').style.display =  'none';
        //document.getElementsByClassName('appList2').style.display = 'block';

        /*const ddad= document.getElementsByClassName('appList');
        
        for (var i=0;i<ddad.length;i+=1){
            ddad[i].style.display = 'none';
        }*/

        const da= document.getElementsByClassName('appList');
        for (var i=0;i<da.length;i+=1){
            da[i].style.display = 'none';
        }

       if (e ===''){
        const da= document.getElementsByClassName('appList2');
        for (var i=0;i<da.length;i+=1){
            da[i].style.display = 'none';
        }
        }else{
            const da= document.getElementsByClassName('appList2');
        for (var i=0;i<da.length;i+=1){
            da[i].style.display = 'block';
        }

        }

        //nome

        doctor.map(async (i)=>{
            if(e === i.nome){
                const response = await api.get('/doctors/pesquisar/' + e);
                console.log(response.data);
                setSearch(response.data);
            }else if (e === i.crm){
               const response2 = await api.get('/doctors/pesquisar-crm/' + e);
               console.log(response2.data);
               setSearch(response2.data);
           }else if (e === i.telefoneFixo){
            const response3 = await api.get('/doctors/pesquisar-telefoneFixo/' + e);
            console.log(response3.data);
            setSearch(response3.data);

           }else if (e === i.telefoneCelular){
            const response4 = await api.get('/doctors/pesquisar-telefoneCelular/' + e);
            console.log(response4.data);
            setSearch(response4.data);

           }else if (e === i.cep){
            const response5 = await api.get('/doctors/pesquisar-cep/' + e);
            console.log(response5.data);
            setSearch(response5.data);

           }else if (e === i.logradouro){
            const response6 = await api.get('/doctors/pesquisar-logradouro/' + e);
            console.log(response6.data);
            setSearch(response6.data);

           }else if (e === i.bairro){
            const response6 = await api.get('/doctors/pesquisar-bairro/' + e);
            console.log(response6.data);
            setSearch(response6.data);

           }else if (e === i.cidade){
            const response7 = await api.get('/doctors/pesquisar-cidade/' + e);
            console.log(response7.data);
            setSearch(response7.data);

           }else if (e === i.estado){
            const response8 = await api.get('/doctors/pesquisar-cidade/' + e);
            console.log(response8.data);
            setSearch(response8.data);

           }

           i.especialidade.map(async (esp) =>{
               if (e === esp.value){
                    const response9 = await api.get('/doctors/pesquisar-especialidade/' + e);
                    console.log(response9.data);
                    setSearch(response9.data);

               }
           });

        });


    }

    
        return(
            <>      
                    <input id='busca' placeholder='Pesquise algum médico...' onChange={e =>pesquisar(e.target.value)}/>

                    <div className='appList2'>
                        {search.map((item) => (
                            <div className='itemList' key={item._id}>
                                <p>Nome do Médico: <strong>{item.nome}</strong></p>
                                <p>CRM: <strong>{item.crm}</strong></p>
                                <p>Telefone Fixo: <strong>{item.telefoneFixo}</strong></p>
                                <p>Telefone Celular: <strong>{item.telefoneCelular}</strong></p>
                                <p>Cep: <strong>{item.cep}</strong></p>
                                <p>Logradouro: <strong>{item.logradouro}</strong></p>
                                <p>Bairro: <strong>{item.bairro}</strong></p>
                                <p>Cidade: <strong>{item.cidade}</strong></p>
                                <p>Estado: <strong>{item.estado}</strong></p>
                                {item.especialidade.map((l) =>(
                                    <p>Especialidade: <strong>{l.value}</strong></p>
                                ))}
                                <Link to='/alterar-doctor'><Alterar idDoctor={item}/></Link>
                                <Deletar idDoctor={item._id}/>
                            </div>
                        ))}
                    </div> 
                    <div className='appList'>
                        {doctor.map((item) => (
                            <div className='itemList' key={item._id}>
                                <p>Nome do Médico: <strong>{item.nome}</strong></p>
                                <p>CRM: <strong>{item.crm}</strong></p>
                                <p>Telefone Fixo: <strong>{item.telefoneFixo}</strong></p>
                                <p>Telefone Celular: <strong>{item.telefoneCelular}</strong></p>
                                <p>Cep: <strong>{item.cep}</strong></p>
                                <p>Logradouro: <strong>{item.logradouro}</strong></p>
                                <p>Bairro: <strong>{item.bairro}</strong></p>
                                <p>Cidade: <strong>{item.cidade}</strong></p>
                                <p>Estado: <strong>{item.estado}</strong></p>
                                <Link to='/alterar-doctor'><Alterar idDoctor={item}/></Link>
                                <Deletar idDoctor={item._id}/>
                            </div>
                        ))}
                    </div> 
            </>
        
        )
}



