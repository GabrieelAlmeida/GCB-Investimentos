import React, {useState, useEffect} from 'react';
import '../form/formAlterar.css';
import doctorSchema from '../../services/yup.js';
import apiCorreios from '../../services/apiCorreios.js';
import Select from 'react-select';
import Mask from 'react-input-mask';
import api from '../../services/api.js';
import AlterarDoctor from '../../pages/alterarDoctor';
import {Link} from 'react-router-dom';


export default function FormAlterarDoctor(props){

    const [nome,setNome] = useState('');
    const [crm,setCrm] = useState('');
    const [telefoneFixo, setTelefoneFixo] = useState('');
    const [telefoneCelular, setTelefoneCelular] = useState('');
    const [cep, setCep] = useState('');
    const [logradouro, setLogradouro] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');
    const [especialidade, setEspecialidade] = useState([]);

    const address = window.location.pathname;
    console.log(address.split('/')[2])
    var response = ''

    useEffect(()=>{
        loadDoctor();
    });

     

    const loadDoctor = async () =>{
        response = await api.get(`/doctors/${address.split('/')[2]}`);
        //response.data

        /*setNome(response.data.nome)
        setCrm(response.data.crm)
        setTelefoneFixo(response.data.telefoneFixo)
        setTelefoneCelular(response.data.telefoneCelular)
        setCep(response.data.cep)
        setLogradouro(response.data.logradouro)
        setBairro(response.data.bairro)
        setCidade(response.data.cidade)
        setEstado(response.data.estado)*/
        
            
        };

        
    
    
    const options = [
        {value: 'Alergologia', label: 'Alergologia'},
        {value: 'Buco Maxilo', label: 'Buco Maxilo'},
        {value: 'Cardiologia Clínica', label: 'Cardiologia Clínica'},
        {value: 'Cardiologia Infantil' , label: 'Cardiologia Infantil'},
        {value: 'Cirgurgia Cabeça e Pescoço', label: 'Cirgurgia Cabeça e Pescoço'},
        {value: 'Cirurgia Cardíaca', label: 'Cirurgia Cardíaca'},
        {value: 'Cirurgia de Tórax', label: 'Cirurgia de Tórax'}
    ]
    

    function onBlurCep(ev){
        apiCorreios.get(ev.target.value+'/json').then(response =>{
            console.log(response.data)
            setLogradouro(response.data.logradouro)
            setBairro(response.data.bairro)
            setCidade(response.data.localidade)
            setEstado(response.data.uf)

        }).catch(err =>{
            alert('Ocorreu um erro: ' + err)
        });
    }

    function handleRegister(e){
        e.preventDefault();

        if(especialidade === null ||  especialidade.length === 0){
             especialidade.push(options[2]);
             especialidade.push(options[3])
        }

        const data = {nome, crm, telefoneFixo, telefoneCelular, cep, logradouro, bairro, cidade, estado, especialidade}

        doctorSchema.isValid(data).then(valid =>{
                console.log(data)
                
                //api
                api.put(`/doctors/${address.split('/')[2]}`, data);

                setNome('')
                setCrm('')
                setTelefoneFixo('')
                setTelefoneCelular('')
                setCep('')
                setLogradouro('')
                setBairro('')
                setCidade('')
                setEstado('')
            
        }).catch(err =>{
            alert('Ocorreu um erro: ' + err)

        });
    }


    return(
        <div id='form-app'>
            <div id='title'>
                <h3>Alterar Cadastro:</h3>
            </div>
            <div id='form'>
                <form onSubmit={handleRegister}>
                    <div className='inputElements'>
                        <div className='part1'>
                            <input value={nome} id='inputDoctor' max='120' onChange={e => setNome(e.target.value)} required placeholder='Digite o nome do médico...'/>
                            <Mask  value={crm} id='inputCRM' onChange={e => setCrm(e.target.value)} required placeholder='Digite o CRM...' mask="99.999.99"/>
                            <Select options={options} id='select' onChange={setEspecialidade} isMulti defaultValue={[options[2], options[3]]} border-radius='200px'/>
                            <input type='tel' value={telefoneFixo} id='inputTelefoneFixo' onChange={e => setTelefoneFixo(e.target.value)} required placeholder='Digite o Telefone Fixo...'/>
                            <input type='tel' value={telefoneCelular} id='inputTelefoneCelular' onChange={e => setTelefoneCelular(e.target.value)} required placeholder='Digite o Telefone Celular...'/>
                        </div>
                        
                        <div className='part2'>
                        <Mask value={cep} id='inputCEP' onChange={e => setCep(e.target.value)} onBlur={onBlurCep} required placeholder='Digite o CEP...' mask='99999-999'/>
                        <input value={logradouro} id='inputLougradouro' onChange={e => setLogradouro(e.target.value)} required placeholder='Digite o nome do Logradouro...'/>
                        <input value={bairro} id='inputBairro' onChange={e => setBairro(e.target.value)} required placeholder='Digite o nome do Bairro...'/>
                        <input value={cidade} id='inputCidade' onChange={e => setCidade(e.target.value)} required placeholder='Digite o nome da Cidade...'/>
                        <input value={estado} id='inputEstado' onChange={e => setEstado(e.target.value)} required placeholder='Digite o nome do Estado...'/>
                        </div>
                    </div>
                    <div className='btnAlterar'>
                        
                        <div className='btnCancelar'>
                            <Link to='/listar-doctor'><button id='btnCancelar'>Cancelar</button></Link>
                        </div>
                        <button type='submit'>Alterar</button>
                    </div>
                   
                </form>
            </div>
        </div>
    )
}

