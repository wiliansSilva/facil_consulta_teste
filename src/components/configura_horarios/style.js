import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ContainerDivs = styled.div`
    width: 70%;
    height: 100%;
    margin-bottom: 20px;
    display: flex;
    flex-direction: row;
    
    @media (max-width: 1180px) {
        height: 100%;
        flex-direction: column;
        justify-content: center;
        align-items:center;
    }

    @media (max-width: 668px) {
        height: 100%;
    }

    @media (max-width: 414px) {
        width: 90%;
    }
`
export const ContainerAdd = styled.div`
    width: 49%;
    height: 70%;
    margin-right: 2%;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 612px) {
        width: 80%;
    }
`
export const ContainerConfig = styled.div`
    width: 49%;
    height: 100%;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 1180px) {
        margin-top: 50px;
    }

    @media (max-width: 612px) {
        width: 80%;
    }
`

export const Title = styled.h2`
    margin-top: 20px;
    font-size: 28px;
    font-weight: bold;
    font-family: Signika;
    color: #004768;

    @media (max-width: 1180px) {
        text-align: center;
    }
`

export const Text = styled.h3`
    margin-top: 20px;
    font-size: 18px;
    font-weight: normal;
    font-family: Signika;
    color: #0094CF;
`

export const TextT = styled.h3`
    margin-top: 20px;
    font-size: 20px;
    font-weight: normal;
    font-family: Signika;
    color: #004768;
`

export const ContainerText = styled.div`
    width: 100%;
    display:flex;
    flex-direction: column;
    padding: 10px;
`

export const ContainerInput = styled.form`
    width: 100%;
    height: 50%;
    margin-top: 12px;
`

export const Input = styled.input`
    width: 100%;
    height: 30px;
    box-sizing: border-box;
    font-family: Signika;
`

export const Button = styled.button`
    cursor: pointer;
    width: 200px;
    height: 50px;
    background-color: #0094CF;
    border: none;
    color: white;
    border-radius: 10px;
    font-family: Signika;
    font-size: 16px;
    margin-top: 50px;
`

export const TextUnder = styled.h4`
    cursor: pointer;
    margin-top: 20px;
    font-size: 12px;
    text-decoration: underline;
    font-family: Signika;
    color: #0094CF;
    margin-bottom: 12px;
`

export const ContainerTextHours = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    font-weight: normal;
    padding: 10px;
    justify-content: space-between;
`

export const Textremove = styled.h3`
    cursor: pointer;
    margin-top: 20px;
    font-size: 16px;
    font-weight: normal;
    font-family: Signika;
    color: red;
`

export const Divider = styled.div`
    width: 95%;
    height: 1px;
    margin-left: 10px;
    margin-right: 10px;
    background-color: #737373;
`