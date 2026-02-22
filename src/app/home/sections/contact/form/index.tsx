"use client";
// import { MotionButton } from "@/app/components/motion";
import { toaster } from "@/components/ui/toaster";
import { Box, Button, Flex, Input, Text, Textarea } from "@chakra-ui/react";
import { FormEvent, useState, useTransition } from "react";

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

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    startTrans(() => {
      e.preventDefault();

      if (!fullName)
        return showToast("error", "Invalid input", "Enter your fullname");
      if (!email)
        return showToast("error", "Invalid input", "Your email is required");
      if (!message)
        return showToast("error", "Invalid input", "Expecting your message");

      if (!previewMsg) {
        return setPreviewMsg(true);
      }

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
    <form onSubmit={handleSubmit}>
      <Flex flexDirection={"column"}>
        <Input
          value={fullName}
          focusRingColor={"brand"}
          fontSize={14}
          //   borderColor={"whiteAlpha.200"}
          //   _placeholder={{ color: "whiteAlpha.800" }}
          borderRadius={"lg"}
          type="text"
          placeholder={"Full Name"}
          onChange={(e) => {
            setFullName(e.target.value);
          }}
        />
        <Input
          value={email}
          focusRingColor={"brand"}
          fontSize={14}
          //   borderColor={"whiteAlpha.200"}
          //   _placeholder={{ color: "whiteAlpha.800" }}
          rounded={"lg"}
          type="email"
          placeholder={"Email Address"}
          my={5}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <Textarea
          value={message}
          focusRingColor={"brand"}
          fontSize={14}
          //   borderColor={"whiteAlpha.200"}
          //   _placeholder={{ color: "whiteAlpha.800" }}
          rounded={"lg"}
          placeholder={"Message"}
          name="message"
          id="message"
          rows={5}
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
            rounded={"xl"}
          >
            {!previewMsg ? "Preview Message" : "Send"}
          </Button>
        {/* </Box> */}
      </Flex>
    </form>
  );
}
