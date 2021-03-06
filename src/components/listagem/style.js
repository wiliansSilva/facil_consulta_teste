import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

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

export const ContainerItem = styled.div`
    width: 65%;
    height: 300px;
    margin-bottom: 20px;
    background-color: white;
    display: flex;
    flex-direction: column;

    @media (max-width: 1180px) {
        height: 450px
    }

    @media (max-width: 668px) {
        height: 100%;
    }

    @media (max-width: 414px) {
        width: 90%;
    }
`
export const ContainerName = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-left: 5%;
    margin-right: 5%;

    @media (max-width: 692px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

export const TextName = styled.h3`
    margin-top: 20px;
    font-size: 28px;
    color: #004768;
    font-family: Signika;
`

export const ContainerButtons = styled.div`
    @media (max-width: 1112px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    @media (max-width: 428px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

export const Button = styled.button`
    height: 30px;
    width: 120px;
    margin: 20px 5px 0px 0px;
    background-color: white;
    border-width: 1px;
    border-color: #0094CF;
    color: #0094CF;
    border-radius: 5px;
    font-family: Signika;

    &:hover{
        background-color: #004768;
        border-color: #004768;
        color: white;
    }
`

export const ContainerHoursDad = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 50px;
    display:flex;
    justify-content: center;
    flex-direction: row;
`

export const ContainerHours = styled.div`
    width: 97%;
    height: 100%;
    margin-left: 5%;
    margin-right: 5%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;

    @media (max-width: 692px) {
        justify-content: center;
    }
`

export const TextHours = styled.h4`
    cursor: pointer;
    background-color: #0094CF;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    margin: 20px 2px 5px 0px;
    width: 200px;
    height: 40px;
    font-family: Signika;

    &:hover{
        background-color: #004768;
        color: white;
    }
`