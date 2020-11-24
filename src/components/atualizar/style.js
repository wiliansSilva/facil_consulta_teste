import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ContainerCadastro = styled.div`
    width: 42%;
    height: 500px;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center; 

    @media (max-width: 772px) {
        width: 60%
    }

    @media (max-width: 414px) {
        width: 80%
    }
`

export const Title = styled.h2`
    margin-top: 20px;
    font-size: 28px;
    font-weight: bold;
    font-family: Signika;
    color: #004768;
`

export const ContainerInput = styled.form`
    width: 100%;
    height: 50%;
    padding: 15px;
`

export const Text = styled.h3`
    margin-top: 20px;
    font-size: 18px;
    font-weight: normal;
    font-family: Signika;
    color: #004768;
`

export const Input = styled.input`
    width: 100%;
    height: 30px;
    padding: 5px;
    box-sizing: border-box;
    font-family: Signika;
`

export const Button = styled.input`
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
`

export const ContainerCenter = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`