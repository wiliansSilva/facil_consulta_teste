import React, {useState,useEffect} from 'react'
import {Container, Header, WHTBtn, ContainerCadastro, Title, ContainerInput, Text, Input, Button, TextUnder} from './style'

export default function Atualizar(){
        const [id,setId] = useState(0);
        const [pas,setPas] = useState('');

        const [newPassword,setNewPassword] = useState("111111")
        const [isNewPasswordValid,setValidNewPassword] = useState(false)
        const [errorNewPassword,setErrorNewPassword] = useState("")
        
        const [name,setName] = useState("wilians")
        const [isNameValid,setValidName] = useState(false)
        const [errorName,setErroName] = useState("")

        const [password,setPassword] = useState("000000")
        const [isPasswordValid,setValidPassword] = useState(false)
        const [errorPassword,setErrorPassword] = useState("")

        useEffect(() => {
            setId(localStorage.getItem('id'))
            setPas(localStorage.getItem('pass'))
        },[])
        
        useEffect(() =>{
            if (newPassword < 6){
                setErrorNewPassword('Senha inválida!')
                setValidNewPassword(false)
            }else{
                setErrorNewPassword('')
                setValidNewPassword(true)
            }
        },[newPassword])

        useEffect(() =>{
            if(name.length < 6){
                setErroName("Nome inválido!")
                setValidName(false)
            }else{
                setErroName("")
                setValidName(true)
            }
        },[name])

        useEffect(() =>{
            if(password.length < 6){
                setErrorPassword("Senha inválida!")
                setValidPassword(false)
            }else{
                setErrorPassword("")
                setValidPassword(true)
            }
        },[password])

        return(
            <Container>

                <Header>
                    <WHTBtn>Cadatro do médico</WHTBtn>
                </Header>
                <ContainerCadastro>
                    <Title>Editar médico</Title>
                    <ContainerInput method="POST" action="http://localhost/facil_consulta/facil_consulta_teste/api/atualizaMedico/">
                        <Text>Nome</Text>
                        <Input name="nome" id="nome" placeholder='Inisira o nome do profissional' onChange={e => setName(e.target.value)}/>
                        {errorName 
                            ?(<div style={{color: 'red'}}>{errorName}</div>)
                            : null}
                        <Text>Senha antiga</Text>
                        <Input name="senha" placeholder='Insira a senha antiga' onChange={e => setPassword(e.target.value)}/>
                        {errorPassword 
                            ?(<div style={{color: 'red'}}>{errorPassword}</div>)
                            : null}
                        <Text>Nova senha</Text>
                        <Input name="novasenha" placeholder='Escolha uma senha forte e segura' onChange={e => setNewPassword(e.target.value)}/>
                        {errorNewPassword 
                            ?(<div style={{color: 'red'}}>{errorNewPassword}</div>)
                            : null}
                        <Input type='hidden' name='clientId' value={id}/>
                        <Input type='hidden' name='clientPass' value={pas}/>
                        <Button type="submit" value="Atualizar cadastro" placeholder="teste"/>
                    </ContainerInput>
                    
                    <TextUnder>Voltar para a Página inicial</TextUnder>
                </ContainerCadastro>
            </Container>
        );
    
} 