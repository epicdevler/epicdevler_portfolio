import Container from "@/app/components/container";
import { Box, GridItem, SimpleGrid, Text } from "@chakra-ui/react";

import * as dotenv from "dotenv";
import { MailIcon, PhoneIcon } from "lucide-react";
import Footer from "../../footer";

dotenv.config();

import { ContactMeans } from "./contact-means";
import ContactForm from "./form";

export default function ContactSection() {
 

  return (
    <Box
      id="contact"
      className="section observe_view"
      
      as={"section"}
    >
      <Container py={200}>
        <SimpleGrid columns={{ base: 1, md: 2 }}>
          <GridItem /* initial={{ x: -100 }} whileInView={{ x: 0 }} */>
            <Box
              // initial={{ y: 100 }}
              // whileInView={{ y: 0 }}
              // viewport={{ once: true }}
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
              icon={PhoneIcon}
            />
            <ContactMeans
              label={"+234 808 0366 089"}
              url={"https://wa.me/+2348080366089"}
              icon={MailIcon}
            />
            <ContactMeans
              label={"dev.epicdevler@gmail.com"}
              url={"mailto:dev.epicdevler@gmail.com"}
              icon={MailIcon}
            />
          </GridItem>
          <GridItem
            // initial={{ x: 100 }}
            // whileInView={{ x: 0 }}
            mt={[10, 10, 0, 0]}
          >
            <ContactForm />
          </GridItem>
        </SimpleGrid>
      </Container>
      <Footer />
    </Box>
  );
}
