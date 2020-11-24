import React, { useState, useEffect } from 'react'
import InputMask from 'react-input-mask';
import Header from '../header_comp'
import $ from "jquery"
import { Container, ContainerDivs, ContainerAdd, ContainerConfig, Text, TextT,Title, ContainerText, ContainerInput, Button, TextUnder, ContainerTextHours, Textremove, Divider} from './style'

export default function ConfiguraHorario() {

    const [hours,setHours] = useState([{}])
    const [data,setData] = useState('')
    const [id,setId] = useState('');

    useEffect(() => {
        setId(localStorage.getItem('id'))
        $.ajax({
            type: "POST",
            url: "http://localhost/facil_consulta/facil_consulta_teste/api/configura_horario/",
            dataType: "json",

            data: {id_medico: localStorage.getItem('id')},
            success: function (response){
                setHours(response)
                console.log(response)
            },
            error: function(response){
                console.log(response)
            }
        });
    },[])

    function changeeData(data){
        const d1 = data.slice(0,4);
        const d2 = data.slice(5,7)
        const d3 = data.slice(8,10);
        const h = data.slice(10,);
        return d3 + '/' + d2 + '/' + d1 + " " + h;
    }

    return (
        <Container>

            <Header/>
            <ContainerDivs>
                <ContainerAdd>
                    <Title>Adicionar horários</Title>
                    <ContainerText>
                        <Text>Nome:</Text>
                        {hours ? (<TextT>{hours[0].nome}</TextT>) : null}
                        <Text>Data</Text>
                        <ContainerInput>
                            <InputMask style={{width: '100%',height: 30}} mask="99/99/9999 99:99" type="data" placeholder="dd-mm-yyyy hh:mm" onChange={e => setData(e.target.value)}/>
                        </ContainerInput>
                    </ContainerText>
                    <Button onClick={() => {
                        const d1 = data.slice(0,2)
                        const d2 = data.slice(3,5)
                        const d3 = data.slice(6,10)
                        const h = data.slice(10,)
                        const formated = d3+'-'+d2+'-'+d1 + h;
                        $.ajax({
                            type: "POST",
                            url: "http://localhost/facil_consulta/facil_consulta_teste/api/configura_horario/add_horario/",
                            dataType: "json",
                
                            data: {data: formated,id: id},
                            success: function (response){                                                        
                                console.log(response)
                            },
                            error: function(response){
                                console.log(response)
                            }
                        });
                    }}>Adicionar horário</Button>
                    <TextUnder onClick={() => {
                        window.location = '/'
                    }}>Voltar para a página principal</TextUnder>
                </ContainerAdd>

                <ContainerConfig>
                    <Title>Horários configurados</Title>
                    {hours 
                        ? (
                            <>
                                {hours.map((item,index) => {
                                    return (
                                        <>
                                        <ContainerTextHours>
                                            {item.data_horario
                                                ?(<TextT>{changeeData(item.data_horario)}</TextT>)
                                                : null}
                                            {item.horario_agendado == 0
                                                ?(<Textremove onClick={() => {
                                                    $.ajax({
                                                        type: "POST",
                                                        url: "http://localhost/facil_consulta/facil_consulta_teste/api/configura_horario/deleta_horario/",
                                                        dataType: "json",
                                            
                                                        data: {id: item.id},
                                                        success: function (response){                                                        
                                                            console.log(response)
                                                            window.location.reload();
                                                        },
                                                        error: function(response){
                                                            console.log(response)
                                                        }
                                                    });
                                                }}>Remover</Textremove>)
                                                : null}
                                        </ContainerTextHours>
                                        <Divider/>
                                        </>
                                    );
                                })}
                            </>
                        )
                        : null}
                </ContainerConfig>
            </ContainerDivs>
        </Container>
    );
}