import {
    Box,
    Button,
    Container,
    Flex,
    GridItem,
    Input,
    SimpleGrid,
    Text,
    Textarea,
    useColorModeValue
} from "@chakra-ui/react";
import {useState} from "react";
import SocialIcon from "@/app/components/_social_icons";
import {faEnvelope} from "@fortawesome/free-regular-svg-icons";
import {faWhatsapp, IconDefinition} from "@fortawesome/free-brands-svg-icons";
import {faPhone} from '@fortawesome/free-solid-svg-icons';

export function ContactMeans(
    {
        label,
        url,
        iconUrl
    }: {
        label: string,
        url: string,
        iconUrl: IconDefinition,
    }
) {
    return (
        <Flex id={'contact'} alignItems={'center'} mt={5}>
            <SocialIcon href={url} iconUrl={iconUrl}/>

            <Text as={'a'} href={url} target={'_blank'} ms={'3'}>
                {label}
            </Text>
        </Flex>
    )
}

export default function ContactSection() {

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const inputBg = useColorModeValue(
        "rgba(98,98,98,0.14)",
        "rgba(30,31,34,0.34)",
    );
    const inputTextColor = useColorModeValue(
        "#1e1e1e",
        "#c4c4c4",
    );

    function validateName(value: string) {
        let error
        if (!value) {
            error = 'Full Name is required'
        }
        return error
    }

    function validateEmail(value: string) {
        let error
        if (!value) {
            error = 'Email is required'
        }
        return error
    }

    function validateMessage(value: string) {
        let error
        if (!value) {
            error = 'Message is required'
        }
        return error
    }

    return (
        <Container as={'section'} maxW={'container.lg'} py={200}>
            <SimpleGrid columns={{base: 1, md: 2}}>
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
                                      iconUrl={faPhone}/>
                        <ContactMeans label={'+234 808 0366 089'} url={'https://wa.me/+2348080366089'}
                                      iconUrl={faWhatsapp}/>
                        <ContactMeans label={'dev.epicdevler@gmail.com'} url={'mailto:dev.epicdevler@gmail.com'}
                                      iconUrl={faEnvelope}/>


                    </Box>
                </GridItem>
                <GridItem mt={[10, 10, 0, 0]}>
                    <Flex flexDirection={'column'}>
                        <Input value={fullName} focusBorderColor={'brand'} fontSize={14} fontWeight={400}
                               _placeholder={{textColor: '#626262'}} textColor={inputTextColor} bg={inputBg}
                               borderRadius={8} type="text"
                               placeholder={'Full Name'}
                               onChange={(e) => {
                                   setFullName(e.target.value)
                               }}
                        />
                        <Input value={email} focusBorderColor={'brand'} fontSize={14} fontWeight={400}
                               _placeholder={{textColor: '#626262'}} textColor={inputTextColor} bg={inputBg}
                               borderRadius={8} type="email"
                               placeholder={'Email Address'} my={5}
                               onChange={(e) => {
                                   setEmail(e.target.value)
                               }}
                        />
                        <Textarea value={message} focusBorderColor={'brand'} fontSize={14} fontWeight={400}
                                  _placeholder={{textColor: '#626262'}} textColor={inputTextColor} bg={inputBg}
                                  borderRadius={8}
                                  placeholder={'Message'} name="message" id="message" cols={5} rows={13} resize={'none'}
                                  onChange={(e) => {
                                      setMessage(e.target.value)
                                  }}></Textarea>

                        <Button mt={10} bg={'brand'} textColor={'white'} _hover={{}} fontWeight={400} fontSize={14}
                                borderRadius={8}>
                            Send
                        </Button>
                    </Flex>
                </GridItem>
            </SimpleGrid>
        </Container>
    )
}