import React from 'react'
import {Container, Header, WHTBtn, ContainerItem, TextName, ContainerButtons, Button, ContainerHours, ContainerHoursDad, ContainerName, TextHours, ContainerH} from './style'

export default class Listagem extends React.Component{
    
    render(){
        
        return(
            <Container>

                <Header>
                    <ContainerH>
                        <WHTBtn onClick={() => {
                            window.location = '/Cadastro';
                        }}>Cadatro do médico</WHTBtn>
                    </ContainerH>
                </Header>
                <ContainerItem>
                    <ContainerName>
                        <TextName>DR. João augusto de alcantara</TextName>
                        <ContainerButtons>
                            <Button>Editar cadastro</Button>
                            <Button>Configurar horarios</Button>
                        </ContainerButtons>
                    </ContainerName>

                    <ContainerHoursDad>
                        <ContainerHours>
                            <TextHours>16/04/2021 às 07:45</TextHours>
                            <TextHours>16/04/2021 às 07:45</TextHours>
                            <TextHours>16/04/2021 às 07:45</TextHours>
                            <TextHours>16/04/2021 às 07:45</TextHours>

                            <TextHours>16/04/2021 às 07:45</TextHours>
                            <TextHours>16/04/2021 às 07:45</TextHours>
                            <TextHours>16/04/2021 às 07:45</TextHours>
                            <TextHours>16/04/2021 às 07:45</TextHours>
                        </ContainerHours>
                    </ContainerHoursDad>

                </ContainerItem>
            </Container>
        );
    }
} 
