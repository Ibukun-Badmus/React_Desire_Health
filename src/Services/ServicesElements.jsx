import styled from 'styled-components';

export const ServicesContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #f1f1f1;
    margin-bottom: 100px;

    @media screen and (max-width: 768px) {
        height: 1300px;
    }
    @media screen and (max-width: 480px) {
        height: 1300px;
    }
`;

export const ServicesWrapper = styled.div`
    max-width: 900px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 18px;
    padding: 0 50px;
    margin-bottom: 50px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 100px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`;

export const ServicesCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 20px;
    max-height: 3000px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0,2);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02)
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
 `;

 export const ServicesIcon = styled.img`
    height: 50px;
    width: 78px;
    margin-top: 10px;
    margin-bottom: 10px;
 `;


 export const ServicesH1 = styled.h1`
    font-size: 2.5rem;
    color: #000;
    margin-top: 100px;
    margin-bottom: 150px;
    text-decoration: dashed;
    

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
 `;

 export const ServicesH2 = styled.h2`
    font-size: 1rem;
    display: flex;
    margin-bottom: 5px;
    justify-content: center;
    align-item: center;
 `;

 export const ServicesP = styled.p`
    font-size: 1rem;
    text-align: center;
 `;
