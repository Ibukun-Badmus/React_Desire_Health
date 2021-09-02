import styled from "styled-components/macro";
import  background from '../Images/loginBg.png'



export const Main = styled.div`
display:flex;
height:100vh;
width: 100%;

`;

export const Container = styled.div`
    display : flex;
    width: 100%;
    min-height: 100vh;
    height: auto;
    background-image : url(${background});
    background-color : white;
    background-repeat: no-repeat;
    // background-position: center;
    background-size: 100%;
`;



export const FormContent = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 480px) {
        padding: 10px;
    }
`;

export const Form = styled.form`
position: absolute;
width: 490px;
height: 392px;
left: 870px;
top: 136px;


background: #FFFFFF;
border-radius: 2px;

@media screen and (max-width: 400px){
    padding:32px 32px;

    }
`;

export const FormH1 = styled.h1`
    margin-bottom: 40px;
    color: blue;
    font-size: 20px;
    font-weight: 400;
    text-align: center;
`;

export const FormLabel = styled.label`
    width: 74px;
    height: 16px;
    left:918px;
    top: 283px;

    font-family: Roboto;
    font-style: normal;
    font-weight: 500;

    margin-bottom: 8px;
    font-size: 14px;
    color: #6A6A6A;
    ;
`;

export const FormInput = styled.input`

left: 55.75%;
right: 17.89%;
top: 60.83%;
bottom: 47.02%;
height: 30px;


background: #FFFFFF;
border: 1px solid rgba(163, 162, 162, 0.75);
box-sizing: border-box;
border-radius: 4px;
`;

export const FormButton = styled.button`

background: #0E2A8D;
    cursor: pointer;
    color: white;
    height: 30px;
`;

export const Text = styled.span`
    text-align: center;
    margin-top: 24px;
    color: #0E2A8D;
    font-size: 14px;
`;