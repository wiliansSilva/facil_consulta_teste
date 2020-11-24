import React, { useState, useEffect } from 'react'
import Header from '../header_comp'
import { Container, ContainerItem, TextName, ContainerButtons, Button, ContainerHours, ContainerHoursDad, ContainerName, TextHours, ContainerH } from './style'
import $ from "jquery"

export default function Listagem() {

    const [db, setDb] = useState([{}]);
    const [dates, setDates] = useState([{}]);

    async function getItems() {
        try {
            const response = await fetch("http://localhost/facil_consulta/facil_consulta_teste/api/")
            const responseJson = await response.json()
            setDb(responseJson)
            console.log(responseJson)
        } catch (error) {
            console.log(error)
        }

    }

    useEffect(() => {
        getItems();
    }, [])


    function changeText(text) {
        
        if(text.slice(2,4).replace('"',"").length == 1){
            //inverte e faz um join na data e hora
            const d1 = text.slice(7, 11)
            const d2 = text.slice(12, 14)
            const d3 = text.slice(15, 17)

            const h1 = text.slice(18, 20)
            const h2 = text.slice(20, 23)
            const result = d3 + '/' + d2 + '/' + d1 + ' às ' + h1 + h2
            return result;
        }else{
            //inverte e faz um join na data e hora
            const d1 = text.slice(8, 12)
            const d2 = text.slice(13, 15)
            const d3 = text.slice(16, 18)

            const h1 = text.slice(19, 20)
            const h2 = text.slice(20, 24)
            const result = d3 + '/' + d2 + '/' + d1 + ' às ' + h1 + h2
            return result;
        }
        
    }

    return (
        <Container>

           <Header/>
            {db.map((items, index) => {
                return (
                    <ContainerItem key={index}>
                        <ContainerName>
                            <TextName>{db[index].nome}</TextName>
                            <ContainerButtons>
                                <Button onClick={() => {                                    
                                    localStorage.setItem('id',db[index].id);
                                    localStorage.setItem('pass',db[index].senha);
                                    window.location = '/Editar'
                                }}>Editar cadastro</Button>
                                <Button onClick={() =>{
                                    localStorage.setItem('id',db[index].id);
                                    window.location = '/Configurar_Horario'
                                }}>Configurar horarios</Button>
                            </ContainerButtons>
                        </ContainerName>



                        {typeof db[index].data_horario != 'undefined'
                            ? (<ContainerHoursDad>
                                <ContainerHours>
                                    {db[index].data_horario.map((itemHour, indexH) => {
                                        return (
                                            <TextHours onClick={() => {
                                                

                                                $.ajax({
                                                    type: "POST",
                                                    url: "http://localhost/facil_consulta/facil_consulta_teste/api/updateHours/",
                                                    dataType: "json",

                                                    data: {id: itemHour.slice(2,4).replace('"'," ")},
                                                    success: function (response){
                                                        window.location.reload();
                                                    },
                                                    error: function(response){
                                                        window.location.reload();
                                                    }
                                                });



                                            }}>{changeText(itemHour)}</TextHours>
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
