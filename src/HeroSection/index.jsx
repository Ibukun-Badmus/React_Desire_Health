//import { ArrowUpward } from '@material-ui/icons';
import React, {useState} from 'react';
import { Button } from '../ButtonElements';
import homeImg from '../Images/homeImg.png';
import { 
    HeroBg, 
    HeroBtnWrapper, 
    HeroContainer, 
    HeroContent, 
    HeroP, 
    HeroH1,
    ImgBg, 
    ArrowForward,
    ArrowUpward
} from './HeroElements';

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }


    return (
       <HeroContainer id="Home" >
           <HeroBg>
               <ImgBg src={homeImg} alt="homeimg" />
           </HeroBg>
           <HeroContent>
               <HeroH1>Health Education Platform You Can Trust. </HeroH1>
               <HeroP> 
                   For your routine education sessions on Antenatal
                   care, Adolescent Reproductive Health and More! 
                   </HeroP>
               <HeroBtnWrapper>
                   <Button to='/login' 
                   onMouseEnter={onHover} 
                   onMouseLeave={onHover}
                   primary='true'
                   dark='true' >
                       Get started {hover ? <ArrowForward /> : <ArrowUpward
                       />}
                   </Button>
               </HeroBtnWrapper>
           </HeroContent>
       </HeroContainer>
    );
};

export default HeroSection;
