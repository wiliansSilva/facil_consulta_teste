import styled from "styled-components";


export const Header = styled.div`
    height: 80px;
    width: 100%;
    background-color: #0094CF;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 100px;
`

export const ContainerH = styled.div`
    width: 65%;
    display: flex;
    justify-content: flex-end;
`

export const WHTBtn = styled.button`
    height: 50px;
    width: 200px;
    background-color: white;
    border: 0;
    border-radius: 5px;
    color: #0094CF;
    font-size: 16px;
    font-family: Signika;
    @media (max-width: 692px) {
        margin-left: 0;
    }

    &:hover{
        background-color: #004768;
        color: white;
    }
`