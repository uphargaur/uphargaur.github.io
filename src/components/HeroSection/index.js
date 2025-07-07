import React, { useEffect, useRef } from 'react'
import HeroBgAnimation from '../HeroBgAnimation'
import { HeroContainer, HeroBg, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle,SocialMediaIcons,SocialMediaIcon, ResumeButton } from './HeroStyle'
import upharProfilePic from '../../images/image.png'
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';
import { gsap } from 'gsap';

const HeroSection = () => {
    const heroRef = useRef(null);
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const imageRef = useRef(null);
    const buttonRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline();
        
        // Set initial states
        gsap.set([titleRef.current, subtitleRef.current, buttonRef.current], { 
            opacity: 0, 
            y: 50 
        });
        gsap.set(imageRef.current, { 
            opacity: 0, 
            scale: 0.8,
            rotationY: 15
        });

        // Animation sequence
        tl.to(titleRef.current, { 
            opacity: 1, 
            y: 0, 
            duration: 1, 
            ease: "power3.out" 
        })
        .to(subtitleRef.current, { 
            opacity: 1, 
            y: 0, 
            duration: 0.8, 
            ease: "power3.out" 
        }, "-=0.5")
        .to(imageRef.current, { 
            opacity: 1, 
            scale: 1, 
            rotationY: 0,
            duration: 1, 
            ease: "power3.out" 
        }, "-=0.6")
        .to(buttonRef.current, { 
            opacity: 1, 
            y: 0, 
            duration: 0.6, 
            ease: "power3.out" 
        }, "-=0.4");

        // Removed floating animation for cleaner look
    }, []);

    return (
        <div id="about">
            <HeroContainer ref={heroRef}>
                <HeroBg>
                    <HeroBgAnimation />
                </HeroBg>
                <HeroInnerContainer >
                    <HeroLeftContainer id="Left">
                        <Title ref={titleRef}>Hi, I am <br /> {Bio.name}</Title>
                        <TextLoop>
                            I am a
                            <Span>
                                <Typewriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>
                        </TextLoop>
                        <SubTitle ref={subtitleRef}>{Bio.description}</SubTitle>
                        <ResumeButton ref={buttonRef} href={Bio.resume} target='display'>Check Resume</ResumeButton>
                    </HeroLeftContainer>

                    <HeroRightContainer id="Right">
                        <Img ref={imageRef} src={upharProfilePic} alt="hero-image" />
                    </HeroRightContainer>
                </HeroInnerContainer>

            </HeroContainer>
        </div>
    )
}

export default HeroSection