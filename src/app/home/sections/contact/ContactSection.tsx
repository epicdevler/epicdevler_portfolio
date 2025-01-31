'use client'
import {
    Box, Button, Container, Flex, GridItem, Input, SimpleGrid, Text, Textarea, useColorModeValue, useToast
} from "@chakra-ui/react";
import { FormEvent, useState } from "react";
import SocialIcon from "@/app/components/_social_icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faWhatsapp, IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from '@fortawesome/free-solid-svg-icons';

import * as dotenv from 'dotenv'
import Footer from "../../footer/_footer";

dotenv.config()


export function ContactMeans({
    label, url, iconUrl,
    hoverBg, hoverContentColor
}: {
    label: string, url: string, iconUrl: IconDefinition,
    hoverBg?: string, hoverContentColor?: string,
    
}) {
    return (<Flex alignItems={'center'} mt={5}>
        <SocialIcon hoverBg={hoverBg} hoverContentColor={hoverContentColor} href={url} iconUrl={iconUrl} />

        <Text as={'a'} href={url} target={'_blank'} ms={'3'}>
            {label}
        </Text>
    </Flex>)
}

export default function ContactSection() {

    const toast = useToast()
    const disableInputs = true
    const [loading, setLoading] = useState(false);
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const inputBg = useColorModeValue("rgba(98,98,98,0.14)", "rgba(30,31,34,0.34)",);
    const inputTextColor = useColorModeValue("#1e1e1e", "#c4c4c4",);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        setLoading(true)
        console.log(process.env.EMAIL_USER)

        var errorMsg: string | null
        var fullNameError = validateName(fullName)
        var emailError = validateEmail(email)
        var messageError = validateMessage(message)

        if (fullNameError != null) {
            errorMsg = fullNameError
        } else if (emailError != null) {
            errorMsg = emailError
        } else if (messageError != null) {
            errorMsg = messageError
        } else {
            errorMsg = null
        }

        if (errorMsg != null) {
            showToast("error", "Input Error", errorMsg)
        } else {
            const res = await fetch('/api/contact', {
                method: 'POST', headers: {
                    'Content-Type': 'application/json',
                }, body: JSON.stringify({ "name": fullName, "email": email, "message": message }),
            });
            if (res.ok) {
                setFullName("")
                setEmail("")
                setMessage("")
            }
            if (res.status === 200) {
                showToast("success", "Success", "I'm so excited to see what you sent :)")

            } else {
                showToast("error", "Something went wrong", 'Failed to send message.');
            }
        }
        setLoading(false)
    }

    const showToast = (status: "error" | "info" | "warning" | "success" | "loading" | undefined, title: string, message: string) => {
        toast({
            title: title, description: message, status: status, duration: 2000, isClosable: true,
        })
    }


    function validateName(value: string): string | null {
        let error = null
        if (!value) {
            error = 'Full Name is required'
        }
        return error
    }

    function validateEmail(value: string): string | null {
        let error = null
        if (!value) {
            error = 'Email is required'
        }
        return error
    }

    function validateMessage(value: string): string | null {
        let error = null
        if (!value) {
            error = 'Message is required'
        }
        return error
    }

    return (
        <Box id="contact" className="section" bg={'blackAlpha.800'} textColor={'white'} as={'section'}>
            <Container maxW={'container.lg'} py={200}>
                <SimpleGrid columns={{ base: 1, md: 2 }}>
                    <GridItem>
                        <Box>
                            <Text
                                fontWeight={500}
                                fontSize={38}
                            >
                                Lets get in touch
                            </Text>
                            <Text
                                fontWeight={400}
                                fontSize={14}
                                mb={16}
                            >
                                Fill out your details and I’ll get back to you ASAP
                            </Text>


                            <ContactMeans label={'+234 808 0366 089'} url={'tel:+234 808 0366 089'}
                                iconUrl={faPhone} />
                            <ContactMeans label={'+234 808 0366 089'} url={'https://wa.me/+2348080366089'}
                                iconUrl={faWhatsapp} />
                            <ContactMeans label={'dev.epicdevler@gmail.com'} url={'mailto:dev.epicdevler@gmail.com'}
                                iconUrl={faEnvelope} />


                        </Box>
                    </GridItem>
                    <GridItem mt={[10, 10, 0, 0]}>
                        <form onSubmit={handleSubmit}>
                            <Flex flexDirection={'column'}>
                                <Input disabled={disableInputs} value={fullName} focusBorderColor={'brand'} fontSize={14}
                                    fontWeight={400}
                                    _placeholder={{ textColor: '#626262' }} textColor={inputTextColor} bg={inputBg}
                                    borderRadius={8} type="text"
                                    placeholder={'Full Name'}
                                    onChange={(e) => {
                                        setFullName(e.target.value)
                                    }}
                                />
                                <Input disabled={disableInputs} value={email} focusBorderColor={'brand'} fontSize={14}
                                    fontWeight={400}
                                    _placeholder={{ textColor: '#626262' }} textColor={inputTextColor} bg={inputBg}
                                    borderRadius={8} type="email"
                                    placeholder={'Email Address'} my={5}
                                    onChange={(e) => {
                                        setEmail(e.target.value)
                                    }}
                                />
                                <Textarea disabled={disableInputs} value={message} focusBorderColor={'brand'} fontSize={14}
                                    fontWeight={400}
                                    _placeholder={{ textColor: '#626262' }} textColor={inputTextColor} bg={inputBg}
                                    borderRadius={8}
                                    placeholder={'Message'} name="message" id="message" cols={5} rows={13}
                                    resize={'none'}
                                    onChange={(e) => {
                                        setMessage(e.target.value)
                                    }}></Textarea>

                                {disableInputs ?

                                    <Button isLoading={loading} mt={10} colorScheme={'brand'} _hover={{}}
                                        textColor={'white'} fontWeight={400} fontSize={14}
                                        borderRadius={8}>
                                        You can reach me through, email, whatsapp or phone call
                                    </Button> :

                                    <Button isDisabled={disableInputs} isLoading={loading} type="submit" mt={10}
                                        bg={'brand'} _hover={{}} textColor={'white'} fontWeight={400} fontSize={14}
                                        borderRadius={8}>
                                        Send
                                    </Button>}
                            </Flex>
                        </form>
                    </GridItem>
                </SimpleGrid>
            </Container>
            <Footer />
        </Box>
    )
}