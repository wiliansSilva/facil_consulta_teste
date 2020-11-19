import React, {useState,useEffect} from 'react'
import {Container, Header, WHTBtn, ContainerCadastro, Title, ContainerInput, Text, Input, Button, TextUnder} from './style'

export default function Listagem(){
    
        const [email,setEmail] = useState("teste@teste.com")
        const [isEmailValid,setValidEmail] = useState(false)
        const [errorEmail,setErrorEmail] = useState("")
        
        const [name,setName] = useState("wilians")
        const [isNameValid,setValidName] = useState(false)
        const [errorName,setErroName] = useState("")

        const [password,setPassword] = useState("")
        const [isPasswordValid,setValidPassword] = useState(false)
        const [errorPassword,setErrorPassword] = useState("")

        
        useEffect(() =>{
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
                setErrorEmail('')
                setValidEmail(true)
            }else{
                setErrorEmail('Email inválido!')
                setValidEmail(false)
            }
        },[email])

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
                setErrorPassword("Senha inválido!")
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
                    <Title>Cadastro de médico</Title>
                    <ContainerInput>
                        <Text>Nome</Text>
                        <Input placeholder='Inisira o nome do profissional' onChange={e => setName(e.target.value)}/>
                        {errorName 
                            ?(<div style={{color: 'red'}}>{errorName}</div>)
                            : null}
                        <Text>Email</Text>
                        <Input placeholder='exemplo@dominio.com.br' onChange={e => setEmail(e.target.value)}/>
                        {errorEmail 
                            ?(<div style={{color: 'red'}}>{errorEmail}</div>)
                            : null}
                        <Text>Senha</Text>
                        <Input placeholder='Escolha uma senha forte e segura' onChange={e => setPassword(e.target.value)}/>
                        {errorPassword 
                            ?(<div style={{color: 'red'}}>{errorPassword}</div>)
                            : null}
                    </ContainerInput>
                    <Button onClick={() => console.log(email)}>Realizar cadastro</Button>
                    <TextUnder>Voltar para a Página inicial</TextUnder>
                </ContainerCadastro>
            </Container>
        );
    
} 