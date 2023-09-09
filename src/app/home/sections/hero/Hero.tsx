import Navbar from "@/app/home/navbar/_navbar";
import style from './hero.module.css';
import Image from "next/image";
import {Button, Container, HStack} from "@chakra-ui/react";
import SectionTitle from "@/app/components/_section_title";
import Typed from 'react-typed';

export default function HeroSection() {

    return (
        <header className={style.hero}>
            <div>
                <Container className={style.graphicOverlay} maxW={'container.xl'}>
                    <Image className={style.artwork} src={'/hero_two_sided.png'} alt={"img"} width={50} height={50}/>
                    <svg className={style.graphic1} xmlns="http://www.w3.org/2000/svg" width="514" height="672"
                         viewBox="0 0 514 672" fill="none">
                        <path opacity="0.8"
                              d="M395.228 35.8535C538.15 189.321 560.691 435.794 415.497 586.859C276.593 731.379 55.925 677.951 -80.8046 531.133C-220.584 381.041 -277.722 142.713 -135.721 -5.0299C12.4402 -159.181 249.386 -120.749 395.228 35.8535Z"
                              fill="#6842EF"/>
                    </svg>
                    <svg className={style.graphic2} xmlns="http://www.w3.org/2000/svg" width="514" height="283"
                         viewBox="0 0 514 283" fill="none">
                        <path opacity="0.85"
                              d="M613.228 138.853C756.15 292.321 778.691 538.794 633.497 689.859C494.593 834.379 273.925 780.951 137.195 634.133C-2.58352 484.041 -59.7224 245.713 82.2793 97.9701C230.44 -56.1814 467.386 -17.7492 613.228 538.853Z"
                              fill="#FF4D9C"/>
                    </svg>
                </Container>
            </div>
            <div className={style.glass}>

                <Navbar/>

                <Container maxW={'container.lg'} paddingY={100} textColor={"white"}>
                    <SectionTitle labelBehind={'I am'} labelInFront={'Nwadike Philip'}/>
                    <p className={style.role}>
                        <Typed
                            strings={['Android Developer', 'Web Developer', 'Freelance Developer', 'Backend Developer']}
                            typeSpeed={40}
                            backDelay={4000}
                            loop={true}
                        />

                    </p>
                    <p className={style.brief_intro}>
                        Lorem ipsum dolor sit amet consectetur. Eget lacinia nam at urna sed lectus. Nisl habitant
                        placerat neque donec aliquam bibendum tellus libero turpis. Turpis aliquam nullam venenatis
                        laoreet suscipit mattis duis venenatis iaculis. Viverra vitae mattis molestie enim nisl leo
                        volutpat ultricies.
                    </p>
                    <HStack mt={10} spacing={8}>
                        <Button borderRadius={100} bg={'brand'} borderWidth={0} fontWeight={500} textColor={"white"}>
                            Hire Me
                        </Button>
                        <Button borderRadius={100} bg={'transparent'} borderColor={'white'} fontWeight={500}
                                borderWidth={1}
                                textColor={"white"}>
                            my CV
                        </Button>
                    </HStack>
                </Container>

            </div>
        </header>
    )
}
