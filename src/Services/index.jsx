import React from 'react';
import Icon1 from '../Images/Icon1.png';
import Icon2 from '../Images/Icon2.png';
import Icon3 from '../Images/Icon3.png';
import Icon4 from '../Images/Icon4.png';
import Icon5 from '../Images/Icon5.png';
import Icon6 from '../Images/Icon6.png';
import { 
    ServicesCard,
    ServicesContainer, 
    ServicesH1, 
    ServicesH2,
    ServicesIcon, 
    ServicesP, 
    ServicesWrapper,
} from './ServicesElements';


const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>eANCare</ServicesH2>
                    <ServicesP>Mothers and mothers-to-be, we provide you with Antenatal care informations. Find clinics that suit you best, reach our health workers whenever and wherever you need to!</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>growingUp</ServicesH2>
                    <ServicesP>Adolescent finds Informations and Supports Here. Find centers close to you,join a Reproductive health group and share your experience with other adolescents like you.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>Health Workers</ServicesH2>
                    <ServicesP>We connect you with patients and the community you've always cared for. Find technology to stay connected and engage your patients even beyond the clinic for better outcomes. Change your Game,your clinic experience is about to get better!</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon4} />
                    <ServicesH2>Hospitals & Clinics</ServicesH2>
                    <ServicesP>Get support for patients engagement, manage appointments and patients.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon5} />
                    <ServicesH2>Volunteers</ServicesH2>
                    <ServicesP>We Neen You!, Volunteering with Us will be a rewarding experience. Join Us!</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon6} />
                    <ServicesH2>Non-profits & NGOs</ServicesH2>
                    <ServicesP>Connect with your community and find communication tools and templates here for your health educations projects.</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
        
    );
};

export default Services;