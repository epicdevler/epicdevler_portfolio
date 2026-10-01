"use client";

import { toaster } from "@/components/toaster";
import {
  Box,
  Button,
  Field,
  Input,
  Textarea,
  type SystemStyleObject,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { submitContactMessage } from "../actions/contact.actions";
import { CONTACT_CONTENT } from "../contact-content";
import {
  CONTACT_FORM_DEFAULTS,
  CONTACT_LIMITS,
  contactSchema,
  type ContactFormValues,
} from "../utils/contact.schema";

/** Shared input look for the ink background: legible, with a green focus ring. */
const fieldControlStyles = {
  bg: "bg.inverted.subtle",
  color: "fg.inverted.strong",
  borderColor: "border.inverted.strong",
  borderRadius: "card",
  fontSize: "16px",
  px: "16px",
  focusRingColor: "border.accent.onDark",
  _placeholder: { color: "fg.inverted.subtle" },
  _hover: { borderColor: "border.inverted.emphasized" },
  _focusVisible: { borderColor: "border.accent.onDark" },
  _invalid: { borderColor: "fg.error" },
} as const satisfies SystemStyleObject;

const labelStyles = {
  color: "fg.inverted.body",
  fontSize: "14px",
  fontWeight: "500",
} as const;

/**
 * Contact form (name, email, message + honeypot). Validates with Zod on the
 * client, submits via a server action that re-validates and forwards to
 * Getform, and reports the outcome with a toast.
 */
export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: CONTACT_FORM_DEFAULTS,
    mode: "onTouched",
  });

  const onSubmit = async (values: ContactFormValues) => {
    const { form } = CONTACT_CONTENT;
    try {
      const result = await submitContactMessage(values);
      if (result.status === "success") {
        toaster.create({
          type: "success",
          title: form.successTitle,
          description: form.successBody,
          closable: true,
        });
        reset(CONTACT_FORM_DEFAULTS);
        return;
      }
      toaster.create({
        type: "error",
        title: form.errorTitle,
        description:
          result.error?.code === "VALIDATION_ERROR"
            ? "Please check the highlighted fields and try again."
            : form.errorBody,
        closable: true,
      });
    } catch {
      toaster.create({
        type: "error",
        title: form.errorTitle,
        description: form.errorBody,
        closable: true,
      });
    }
  };

  return (
    <Box
      asChild
      display="grid"
      gridTemplateColumns="repeat(auto-fit, minmax(min(100%, 220px), 1fr))"
      gap="24px"
      position="relative"
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        aria-label="Contact form"
      >
        <Field.Root invalid={!!errors.name} required disabled={isSubmitting}>
          <Field.Label {...labelStyles}>
            Name <Field.RequiredIndicator color="fg.accent.onDark" />
          </Field.Label>
          <Input
            {...fieldControlStyles}
            h="52px"
            autoComplete="name"
            maxLength={CONTACT_LIMITS.name.max}
            {...register("name")}
          />
          <Field.ErrorText color="fg.error">
            {errors.name?.message}
          </Field.ErrorText>
        </Field.Root>

        <Field.Root invalid={!!errors.email} required disabled={isSubmitting}>
          <Field.Label {...labelStyles}>
            Email <Field.RequiredIndicator color="fg.accent.onDark" />
          </Field.Label>
          <Input
            {...fieldControlStyles}
            h="52px"
            type="email"
            inputMode="email"
            autoComplete="email"
            maxLength={CONTACT_LIMITS.email.max}
            {...register("email")}
          />
          <Field.ErrorText color="fg.error">
            {errors.email?.message}
          </Field.ErrorText>
        </Field.Root>

        <Field.Root
          invalid={!!errors.message}
          required
          disabled={isSubmitting}
          gridColumn="1 / -1"
        >
          <Field.Label {...labelStyles}>
            Message <Field.RequiredIndicator color="fg.accent.onDark" />
          </Field.Label>
          <Textarea
            {...fieldControlStyles}
            py="14px"
            rows={6}
            resize="vertical"
            minH="160px"
            maxLength={CONTACT_LIMITS.message.max}
            {...register("message")}
          />
          <Field.ErrorText color="fg.error">
            {errors.message?.message}
          </Field.ErrorText>
        </Field.Root>

        {/* Honeypot: hidden from people and assistive tech; bots fill it. */}
        <Box
          aria-hidden="true"
          position="absolute"
          left="-10000px"
          top="auto"
          w="1px"
          h="1px"
          overflow="hidden"
        >
          <label htmlFor="contact-website">Leave this field empty</label>
          <input
            id="contact-website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            {...register("website")}
          />
        </Box>

        <Box gridColumn="1 / -1">
          <Button
            type="submit"
            variant="accent"
            size="lg"
            loading={isSubmitting}
            loadingText="Sending…"
            disabled={isSubmitting}
            w={{ base: "full", sm: "auto" }}
          >
            {CONTACT_CONTENT.form.submit} <span aria-hidden="true">→</span>
          </Button>
        </Box>
      </form>
    </Box>
  );
}
