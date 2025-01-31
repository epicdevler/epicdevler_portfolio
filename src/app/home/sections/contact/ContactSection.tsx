"use client";
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
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { FormEvent, useEffect, useState } from "react";
import SocialIcon from "@/app/components/_social_icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faWhatsapp, IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

import * as dotenv from "dotenv";
import Footer from "../../footer/_footer";
import { motion } from "framer-motion";

dotenv.config();

export function ContactMeans({
  label,
  url,
  iconUrl,
  hoverBg,
  hoverContentColor,
}: {
  label: string;
  url: string;
  iconUrl: IconDefinition;
  hoverBg?: string;
  hoverContentColor?: string;
}) {
  return (
    <Flex alignItems={"center"} mt={5}>
      <SocialIcon
        showBorder={true}
        hoverBg={hoverBg}
        hoverContentColor={hoverContentColor}
        href={url}
        iconUrl={iconUrl}
      />

      <Text as={"a"} href={url} target={"_blank"} ms={"3"}>
        {label}
      </Text>
    </Flex>
  );
}

export default function ContactSection() {
  const toast = useToast();
  const [loading, setLoading] = useState(false);
  const [previewMsg, setPreviewMsg] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!previewMsg) {
      setPreviewMsg(true);
      return;
    }

    setLoading(true);

    var errorMsg: string | null;
    var fullNameError = validateName(fullName);
    var emailError = validateEmail(email);
    var messageError = validateMessage(message);

    if (fullNameError != null) {
      errorMsg = fullNameError;
    } else if (emailError != null) {
      errorMsg = emailError;
    } else if (messageError != null) {
      errorMsg = messageError;
    } else {
      errorMsg = null;
    }

    if (errorMsg != null) {
      showToast("error", "Input Error", errorMsg);
    } else {
      fetch("https://getform.io/f/amddzedb", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: fullName,
          email: email,
          message: message,
        }),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then(() => {
          showToast(
            "success",
            "Message Sent",
            "Thank you for reaching out, I will get back to you ASAP!"
          );
          setLoading(false);
        })
        .catch((error) => {
          showToast("success", "Sending Error", error);
          setLoading(false);
        });
    }
  };

  const showToast = (
    status: "error" | "info" | "warning" | "success" | "loading" | undefined,
    title: string,
    message: string
  ) => {
    toast({
      title: title,
      description: message,
      status: status,
      duration: 2000,
      isClosable: true,
    });
  };

  function validateName(value: string): string | null {
    let error = null;
    if (!value) {
      error = "Full Name is required";
    }
    return error;
  }

  function validateEmail(value: string): string | null {
    let error = null;
    if (!value) {
      error = "Email is required";
    }
    return error;
  }

  function validateMessage(value: string): string | null {
    let error = null;
    if (!value) {
      error = "Message is required";
    }
    return error;
  }

  return (
    <Box
      id="contact"
      className="section"
      bg={"blackAlpha.900"}
      textColor={"white"}
      as={"section"}
    >
      <Container maxW={"container.lg"} py={200}>
        <SimpleGrid columns={{ base: 1, md: 2 }}>
          <GridItem
            as={motion.div}
            initial={{ x: -100 }}
            whileInView={{ x: 0 }}
          >
            <Box
              as={motion.div}
              initial={{ y: 100 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
            >
              <Text fontWeight={500} fontSize={38}>
                Lets get in touch
              </Text>
              <Text fontWeight={400} fontSize={14} mb={16}>
                Fill out your details and I’ll get back to you ASAP
              </Text>
            </Box>

            <ContactMeans
              label={"+234 808 0366 089"}
              url={"tel:+234 808 0366 089"}
              iconUrl={faPhone}
            />
            <ContactMeans
              label={"+234 808 0366 089"}
              url={"https://wa.me/+2348080366089"}
              iconUrl={faWhatsapp}
            />
            <ContactMeans
              label={"dev.epicdevler@gmail.com"}
              url={"mailto:dev.epicdevler@gmail.com"}
              iconUrl={faEnvelope}
            />
          </GridItem>
          <GridItem
            as={motion.div}
            initial={{ x: 100 }}
            whileInView={{ x: 0 }}
            mt={[10, 10, 0, 0]}            
          >
            <form onSubmit={handleSubmit}>
              <Flex flexDirection={"column"}>
                <Input
                  value={fullName}
                  focusBorderColor={"brand"}
                  fontSize={14}
                  fontWeight={400}
                  borderColor={"whiteAlpha.200"}
                  _placeholder={{ textColor: "whiteAlpha.800" }}
                  borderRadius={8}
                  type="text"
                  placeholder={"Full Name"}
                  isRequired={true}
                  onChange={(e) => {
                    setFullName(e.target.value);
                  }}
                />
                <Input
                  value={email}
                  focusBorderColor={"brand"}
                  fontSize={14}
                  fontWeight={400}
                  borderColor={"whiteAlpha.200"}
                  _placeholder={{ textColor: "whiteAlpha.800" }}
                  borderRadius={8}
                  type="email"
                  isRequired={true}
                  placeholder={"Email Address"}
                  my={5}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <Textarea
                  value={message}
                  focusBorderColor={"brand"}
                  fontSize={14}
                  fontWeight={400}
                  isRequired={true}
                  borderColor={"whiteAlpha.200"}
                  _placeholder={{ textColor: "whiteAlpha.800" }}
                  borderRadius={8}
                  placeholder={"Message"}
                  name="message"
                  id="message"
                  cols={5}
                  rows={13}
                  resize={"none"}
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                />

                <Text hidden={!previewMsg} py={3}>
                  Hello, I&rsquo;m {fullName} and here is my email{" "}
                  <Text as={"span"} color={"brand"}>
                    {email}
                  </Text>
                  <br />
                  <br />
                  My Message:
                  <br />
                  {message}
                </Text>

                <Box>
                  <Button
                    as={motion.button}
                    whileTap={{ scale: 0.9 }}
                    isLoading={loading}
                    type="submit"
                    mt={10}
                    w='full'
                    bg={"brand"}
                    _hover={{}}
                    _active={{}}
                    textColor={"white"}
                    fontWeight={400}
                    fontSize={14}
                    borderRadius={8}
                  >
                    {!previewMsg ? "Preview Message" : "Send"}
                  </Button>
                </Box>
              </Flex>
            </form>
          </GridItem>
        </SimpleGrid>
      </Container>
      <Footer />
    </Box>
  );
}
