"use client";
// import { MotionButton } from "@/app/components/motion";
import { toaster } from "@/components/ui/toaster";
import {
  Alert,
  Box,
  Button,
  Flex,
  Input,
  Presence,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { FormEvent, SubmitEventHandler, useState, useTransition } from "react";

const showToast = (
  status: "error" | "info" | "warning" | "success" | "loading" | undefined,
  title: string,
  message: string,
) => {
  toaster.create({
    title: title,
    description: message,
    type: status,
    // duration: 5000,
    closable: true,
  });
};

export default function ContactForm() {
  const [isSubmitting, startTrans] = useTransition();
  const [previewMsg, setPreviewMsg] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState<string>();

  const handleSubmit: SubmitEventHandler<HTMLDivElement> = async (e) => {
    e.preventDefault();
    setError(undefined);

    if (!fullName) return setError("Enter your full name");
    if (!email) return setError("Your email is required");
    if (!message) return setError("Expecting your message");

    if (!previewMsg) {
      return setPreviewMsg(true);
    }
    startTrans(() => {
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
          showToast(
            "success",
            "Message Sent",
            "Thank you for reaching out, I will get back to you ASAP!",
          );
          return response.json();
        })
        .catch((error) => {
          showToast("success", "Sending Error", error);
        });
    });
  };

  return (
    <VStack as="form" onSubmit={handleSubmit} flexDirection={"column"}>
      <Presence
        w="full"
        present={!!error}
        animationName={{ _open: "scale-in", _closed: "scale-out" }}
      >
        <Alert.Root status={"error"}>
          <Alert.Indicator />
          <Alert.Content>{error}</Alert.Content>
        </Alert.Root>
      </Presence>
      <Input
        value={fullName}
        focusRingColor={"brand"}
        fontSize={14}
        //   borderColor={"whiteAlpha.200"}
        //   _placeholder={{ color: "whiteAlpha.800" }}
        rounded={"none"}
        type="text"
        placeholder={"Full Name"}
        onChange={e => {
          setError(undefined);
          setFullName(e.target.value);
        }}
      />
      <Input
        value={email}
        focusRingColor={"brand"}
        fontSize={14}
        //   borderColor={"whiteAlpha.200"}
        //   _placeholder={{ color: "whiteAlpha.800" }}
        rounded={"none"}
        type="email"
        placeholder={"Email Address"}
        my={5}
        onChange={e => {
          setError(undefined);
          setEmail(e.target.value);
        }}
      />
      <Textarea
        value={message}
        focusRingColor={"brand"}
        fontSize={14}
        //   borderColor={"whiteAlpha.200"}
        //   _placeholder={{ color: "whiteAlpha.800" }}
        rounded={"none"}
        placeholder={"Message"}
        name="message"
        id="message"
        rows={5}
        resize={"none"}
        onChange={(e) => {
          setError(undefined);
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

      {/* <Box> */}
      <Button
        // whileTap={{ scale: 0.9 }}
        loading={isSubmitting}
        type="submit"
        mt={10}
        w="full"
        bg={"brand"}
        _hover={{}}
        _active={{}}
        color={"white"}
        fontWeight={400}
        fontSize={14}
        rounded={"none"}
      >
        {!previewMsg ? "Preview Message" : "Send"}
      </Button>
      {/* </Box> */}
    </VStack>
  );
}
