import React, { useState, useEffect } from 'react'
import { Container, Header, WHTBtn, ContainerItem, TextName, ContainerButtons, Button, ContainerHours, ContainerHoursDad, ContainerName, TextHours, ContainerH } from './style'

export default function Listagem() {

    const [db, setDb] = useState([{}]);
    const [dates, setDates] = useState([{}]);

    async function getItems() {
        try {
            const response = await fetch("http://localhost/facil_consulta/facil_consulta_teste/api/")
            const responseJson = await response.json()
            setDb(responseJson)
        } catch (error) {
            console.log(error)
        }

    }

    useEffect(() => {
        getItems();
    }, [])

    
    function changeText(text){
        //inverte e faz um join na data e hora
        const d1 = text.slice(2,6)
        const d2= text.slice(7,9)
        const d3= text.slice(10,12)

        const h1 = text.slice(12,16)
        const h2 = text.slice(16,18)
        const result = d3+'/'+d2+'/'+d1+' às '+h1+h2
        return result;
    }

    return (
        <Container>

            <Header>
                <ContainerH>
                    <WHTBtn onClick={() => {
                        window.location = '/Cadastro';
                    }}>Cadatro do médico</WHTBtn>
                </ContainerH>
            </Header>
            {db.map((items, index) => {
                return (
                    <ContainerItem key={index}>
                        <ContainerName>
                            <TextName>{db[index].nome}</TextName>
                            <ContainerButtons>
                                <Button>Editar cadastro</Button>
                                <Button>Configurar horarios</Button>
                            </ContainerButtons>
                        </ContainerName>



                        {typeof db[index].data_horario != 'undefined'
                            ? (<ContainerHoursDad>
                                <ContainerHours>
                                    {db[index].data_horario.map((itemHour,indexH) => {
                                            return (
                                                <TextHours>{changeText(itemHour)}</TextHours>
                                            );
                                        })
                                    }
    
                                </ContainerHours>
                            </ContainerHoursDad>)
                            : null}


                    </ContainerItem>
                );
            })}
        </Container>
    );

} 
