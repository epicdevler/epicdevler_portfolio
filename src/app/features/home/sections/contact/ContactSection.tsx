import { Eyebrow } from "@/components/layout/Eyebrow";
import { GridOverlay } from "@/components/layout/GridOverlay";
import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Reveal } from "@/components/motion/Reveal";
import { SiteConfig } from "@/site-config";
import { Box, Button, Flex, Heading, Link, Text } from "@chakra-ui/react";
import { SECTION_IDS } from "../../section-ids";
import { CONTACT_CONTENT } from "./contact-content";
import { ContactForm } from "./form/ContactForm";

const CONTACT_LINKS = [
  { label: "Email", href: SiteConfig.contact.email.href, external: false },
  {
    label: SiteConfig.socials.linkedin.label,
    href: SiteConfig.socials.linkedin.href,
    external: true,
  },
  {
    label: "WhatsApp",
    href: SiteConfig.contact.whatsapp.href,
    external: true,
  },
] as const;

/** Final CTA on ink: headline, direct links and a contact form. */
export function ContactSection() {
  const { form } = CONTACT_CONTENT;

  return (
    <Section
      id={SECTION_IDS.contact}
      tone="ink"
      size="lg"
      overlay={<GridOverlay variant="dark" />}
      aria-labelledby="contact-heading"
    >
      <Flex direction="column" gap="clamp(32px, 4vw, 52px)">
        {/* Decorative echo of the hero's six-stage track. */}
        
        <Reveal>
          <Flex
          aria-hidden="true"
          wrap="wrap"
          columnGap="20px"
          rowGap="8px"
          textStyle="mono.sm"
          color="fg.inverted.faint"
        >
          {/* <Box as="span" color="fg.accent.onDark">
            ● {CONTACT_CONTENT.activeStage}
          </Box> */}
          
          <SectionHeader
            eyebrow={CONTACT_CONTENT.eyebrow}
            title={<span id="contact-heading">{CONTACT_CONTENT.title}</span>}
            size="contact"
            onDark
            gap="clamp(28px, 3vw, 40px)"
            maxW="1300px"
            color="fg.inverted.strong"
          />
        </Flex>

        </Reveal>

        <Reveal
          display="grid"
          gridTemplateColumns="repeat(auto-fit, minmax(min(100%, 320px), 1fr))"
          gap="40px"
          alignItems="end"
          mt="clamp(8px, 2vw, 24px)"
        >
          <Text
            textStyle="lead"
            fontSize="clamp(18px, 1.6vw, 22px)"
            color="fg.inverted.lead"
            maxW="520px"
            m="0"
          >
            {CONTACT_CONTENT.lead}
          </Text>

          <Flex
            direction="column"
            gap="24px"
            alignItems="flex-start"
            justifySelf={{ base: "start", md: "end" }}
          >
            <Button asChild variant="accent" size="xl">
              <a href={SiteConfig.contact.email.href}>
                {CONTACT_CONTENT.cta} <span aria-hidden="true">→</span>
              </a>
            </Button>
            <Flex
              as="ul"
              listStyleType="none"
              m="0"
              pl="8px"
              columnGap="28px"
              rowGap="12px"
              wrap="wrap"
              fontSize="15px"
            >
              {CONTACT_LINKS.map((link) => (
                <Box as="li" key={link.label}>
                  <Link
                    variant="inverted"
                    href={link.href}
                    {...(link.external
                      ? {
                          target: "_blank",
                          rel: "noopener noreferrer",
                          "aria-label": `${link.label} (opens in a new tab)`,
                        }
                      : {})}
                  >
                    {link.label}
                  </Link>
                </Box>
              ))}
            </Flex>
          </Flex>
        </Reveal>

        <Reveal
          display="grid"
          gridTemplateColumns="repeat(auto-fit, minmax(min(100%, 320px), 1fr))"
          columnGap="clamp(32px, 5vw, 72px)"
          rowGap="40px"
          mt="clamp(40px, 6vw, 96px)"
          pt="clamp(40px, 5vw, 72px)"
          borderTopWidth="1px"
          borderTopStyle="solid"
          borderTopColor="border.inverted.strong"
        >
          <Flex direction="column" gap="20px" maxW="420px">
            <Eyebrow onDark>{form.eyebrow}</Eyebrow>
            <Heading
              as="h3"
              textStyle="title.sm"
              color="fg.inverted.strong"
              m="0"
            >
              {form.title}
            </Heading>
            <Text
              m="0"
              fontSize="16px"
              lineHeight="1.6"
              color="fg.inverted.muted"
            >
              {form.lead}
            </Text>
          </Flex>
          <ContactForm />
        </Reveal>
      </Flex>
    </Section>
  );
}
