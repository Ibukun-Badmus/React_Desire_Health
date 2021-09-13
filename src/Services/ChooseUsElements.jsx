import styled from 'styled-components';
import { Link as LinkR }  from 'react-router-dom';

export const AboutContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space;
    align-items: center;
    background: #fff;

     @media screen and (max-width: 768px) {
         height: 100%;
     }
      @media screen and (max-width: 480px) {
         height: 100%;
     }
`;

export const AboutWrapper = styled.div`
    max-width: 1200px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 50px;

    @media screen and (max-width: 700px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 20px;
    }
`;



export const AboutH1 = styled.h1`
font-size: 3rem;
justify-items: center;
color: #000;
height: 50px;

@media screen and (max-width: 480px) {
    font-size: 3rem;
}
`;

export const AboutH2 = styled.h2`
    font-size: 1.5rem;
    display: contained;
    margin-bottom: 5px;
    justify-content: baseline;
    align-item: center;
 `;

export const AboutP = styled.h1`
    height: 50px;
    text-decoration: dotted;
    font-size: 1rem;
 `;
 export const PWrapper = styled.div`
    max-width: 100%;
    justify-cotent: space-around;
    height: 50px;
    padding-top: 20px;
    padding-bottom: 190px; 
    text-align: flex-start;
    text-decoration: dash;

 `;

 export const AboutColumn1 = styled.div`
    margin-bottom: 100px;
    padding: 0 15px;
    grid-area: col1;
    max-width: 500px;
    
`;

export const AboutColumn2 = styled.div`
    display: flex;
    padding: 0 15px;
    grid-area: col2;
    height: 250px;
`;

export const TextWrapper = styled.div`
    max-width: 100%;
    height: 100%;
    padding-top: 200px;
    padding-bottom: 60px; 
    align-items: flex-start;
    flex-direction: column;
    justify-items: baseline;
`;

export const BtnWrap = styled.h1`
    display: flex;
    justify-content: flex-start;
`;

export const ImgWrap = styled.div`
    display: flex;
    margin-left-radius: 100px;
`;

export const Img = styled.img`
    width: 550px;
    height: 400px;
    margin: 0 0 10px 0;
    padding-right: 0;
    padding-left: 50px;
    margin-bottom: 100px;
`;

export const ServicesBtnLink = styled(LinkR)`
    border-radius: 50px;
    background:  #022F8E;
    white-space: nowrap;
    padding: 10px 22px;
    color: #010606;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transiton: all 0.2s ease-in-out;
        background: #fff;
        color: #000;
    }
`;