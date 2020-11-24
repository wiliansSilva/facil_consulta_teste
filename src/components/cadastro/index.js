import React, {useState,useEffect} from 'react'
import {Container, Header, WHTBtn, ContainerCadastro, Title, ContainerInput, Text, Input, Button, TextUnder, ContainerCenter} from './style'

export default function Listagem(){
    
        const [email,setEmail] = useState("teste@teste.com")
        const [isEmailValid,setValidEmail] = useState(false)
        const [errorEmail,setErrorEmail] = useState("")
        
        const [name,setName] = useState("wilians")
        const [isNameValid,setValidName] = useState(false)
        const [errorName,setErroName] = useState("")

        const [password,setPassword] = useState("000000")
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
                    <Title>Cadastro de médico</Title>
                    <ContainerInput method="POST" action="http://localhost/facil_consulta/facil_consulta_teste/api/cadastro/">
                        <Text>Nome</Text>
                        <Input name="nome" id="nome" placeholder='Inisira o nome do profissional' onChange={e => setName(e.target.value)}/>
                        {errorName 
                            ?(<div style={{color: 'red'}}>{errorName}</div>)
                            : null}
                        <Text>Email</Text>
                        <Input name="email" placeholder='exemplo@dominio.com.br' onChange={e => setEmail(e.target.value)}/>
                        {errorEmail 
                            ?(<div style={{color: 'red'}}>{errorEmail}</div>)
                            : null}
                        <Text>Senha</Text>
                        <Input name="senha" placeholder='Escolha uma senha forte e segura' onChange={e => setPassword(e.target.value)}/>
                        {errorPassword 
                            ?(<div style={{color: 'red'}}>{errorPassword}</div>)
                            : null}
                        <ContainerCenter>
                            <Button type="submit" value="Realizar cadastro" placeholder="teste"/>
                            <TextUnder onClick={() => {
                                window.location = '/';
                            }}>Voltar para a Página inicial</TextUnder>
                        </ContainerCenter>
                        
                    </ContainerInput>
                    
                    
                </ContainerCadastro>
            </Container>
        );
    
} 