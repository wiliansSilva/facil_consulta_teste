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
            sortItems(responseJson)
            console.log(responseJson)
        } catch (error) {
            console.log(error)
        }

    }

    function sortItems() {

    }

    useEffect(() => {
        getItems();
    }, [])


    function changeText(text) {


        //inverte e faz um join na data e hora
        const d1 = text.slice(2, 6)
        const d2 = text.slice(7, 9)
        const d3 = text.slice(10, 12)

        const h1 = text.slice(13, 16)
        const h2 = text.slice(16,18)
        const result = d3 + '/' + d2 + '/' + d1 + ' às ' + h1 + h2
        return result;


    }

    return (
        <Container>

            <Header />
            {db.map((items, index) => {
                return (
                    <ContainerItem key={index}>
                        <ContainerName>
                            <TextName>{db[index].nome}</TextName>
                            <ContainerButtons>
                                <Button onClick={() => {
                                    localStorage.setItem('id', db[index].id);
                                    localStorage.setItem('pass', db[index].senha);
                                    window.location = '/Editar'
                                }}>Editar cadastro</Button>
                                <Button onClick={() => {
                                    localStorage.setItem('id', db[index].id);
                                    window.location = '/Configurar_Horario'
                                }}>Configurar horarios</Button>
                            </ContainerButtons>
                        </ContainerName>



                        {typeof db[index].data_horario != 'undefined'
                            ? (<ContainerHoursDad>
                                <ContainerHours>
                                    {db[index].data_horario.map((itemHour, indexH) => {
                                        return (
                                            <>
                                                { itemHour == ""
                                                    ? (null)
                                                    : (<TextHours onClick={() => {
                                                        
                                                          

                                                        $.ajax({
                                                            type: "POST",
                                                            url: "http://localhost/facil_consulta/facil_consulta_teste/api/updateHours/",
                                                            dataType: "json",

                                                            data: { id: itemHour.slice(0, 2) },
                                                            success: function (response) {
                                                                window.location.reload();
                                                            },
                                                            error: function (response) {
                                                                window.location.reload();
                                                            }
                                                        });



                                                    }}>{changeText(itemHour)}</TextHours>)}
                                            </>
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
