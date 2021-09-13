import React, {useState} from 'react';
import HeroSection from '../HeroSection';
import InfoSection from '../InfoSection';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import Services from '../Services';
import Footer from '../Footer';
import About from '../Services/ChooseUsIndex';
import { homeObjOne } from '../InfoSection/Data';

const Home = () => {
    const [isOpen, setisOpen] = useState(false)

    const toggle = () => {
        setisOpen( ! isOpen);
    };

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSection />
            <InfoSection {...homeObjOne}/>
            <Services  />
            <About />
            <Footer />
        </>
    );
};

export default Home;



