import React, {useState} from 'react';
import video from "../../videos/video.mp4";
import {Button} from '../ButtonElement'
import {HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowDown, ArrowDownBig} from "./HeroElements"

const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    }
    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={video} type="video/mp4" />
            </HeroBg>
            <HeroContent>
                <HeroH1>Finn Huynh</HeroH1>
                <HeroP>A second-year Computer Science student with a great passion for innovative technology.</HeroP>
                <HeroBtnWrapper>
                    <Button to="about"
                     onMouseEnter={onHover}
                     onMouseLeave={onHover}
                     primary="true"
                     dark="false"
                     smooth={true}
                     duration={500}
                     spy={true}
                     exact='true'
                     offset={-80}
                     >
                        Get started {hover ? <ArrowDownBig />: <ArrowDown/>}
                        </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
