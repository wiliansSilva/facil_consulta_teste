import React, { useState, useEffect } from 'react'
import { Header, WHTBtn, ContainerH } from './style'

export default function HeaderComp(){
    return(
        <Header>
        <ContainerH>
            <WHTBtn onClick={() => {
                window.location = '/Cadastro';
            }}>Cadatro do médico</WHTBtn>
        </ContainerH>
    </Header>
    );
}