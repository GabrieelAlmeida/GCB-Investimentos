import React, {useState} from 'react';
import '../form/form.css';
import doctorSchema from '../../services/yup.js';
import apiCorreios from '../../services/apiCorreios.js';
import Select from 'react-select';
import Mask from 'react-input-mask';
import api from '../../services/api.js';


export default function FormDoctor(){

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
    
    //especialidade médica

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
                api.post('/doctors/cadastrar', data);

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

    //<input type='number' value={crm} id='inputCRM' onChange={e => setCrm(e.target.value)} required placeholder='Digite o CRM...'/>

    return(
        <div id='form-app'>
            <div id='title'>
                <h3>Faça o Cadastro:</h3>
            </div>
            <div id='form'>
                <form onSubmit={handleRegister}>
                    <div className='inputElements'>
                        <div className='part1'>
                            <input value={nome} id='inputDoctor' max='120' onChange={e => setNome(e.target.value)} required placeholder='Digite o nome do Médico...'/>
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
                    <div className='btnCadastrar'>
                        <button type='submit'>Cadastrar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

