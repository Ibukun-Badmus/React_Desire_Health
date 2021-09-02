import React from 'react';
import { Button } from '../ButtonElements';
import Pregnant from '../Images/Pregnant.png';
import { 
    AboutContainer, 
    AboutH1, 
    AboutH2,
    AboutP,
    AboutWrapper, 
    BtnWrap, 
    AboutColumn1,
    AboutColumn2,
    Img, 
    ImgWrap, 
    PWrapper, 
    TextWrapper } from './ChooseUsElements';

const ChooseUs = () => {
    return (
        <AboutContainer id="feedback">
            <AboutH1>Why Choose Us</AboutH1>
            <AboutWrapper>
                <AboutColumn1>
                    <TextWrapper>
                        <AboutH2>Personalize Your Experience</AboutH2>
                        <PWrapper>
                        <AboutP>Uninterrupted Access</AboutP>
                        <AboutP>Seamless Transaction</AboutP>
                        <AboutP>Patient Engagement</AboutP>
                        <AboutP>Behaviour Support</AboutP>
                        <AboutP>Better Health Outcomes</AboutP>
                        </PWrapper>
                    </TextWrapper>
                        <BtnWrap>
                            <Button to='/login'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset={-80}
                                >Get Started</Button>
                        </BtnWrap>
                    </AboutColumn1>
                <AboutColumn2>
                    <ImgWrap>
                        <Img src={Pregnant} alt={Pregnant}/>
                    </ImgWrap>
                </AboutColumn2>
            </AboutWrapper>
        </AboutContainer>
    );
};

export default ChooseUs;
