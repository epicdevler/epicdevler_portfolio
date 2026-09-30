/** Static copy for the contact section (from the design). */
export const CONTACT_CONTENT = {
  stages: ["02 Product", "03 Interface", "04 System", "05 Data", "06 Delivery"],
  activeStage: "01 Problem — start here",
  eyebrow: "Let’s build something useful",
  title: "Have a problem worth turning into software?",
  lead: "Whether you're starting from an idea, replacing a manual workflow, or improving an existing product, let's figure out what should be built.",
  cta: "Let’s talk",
  form: {
    eyebrow: "Or write it out",
    title: "Send a message",
    lead: "Describe the problem, the people it affects, and what a good outcome looks like. I'll reply by email.",
    submit: "Send message",
    successTitle: "Message sent",
    successBody: "Thanks for reaching out. I'll get back to you soon.",
    errorTitle: "Message not sent",
    errorBody:
      "Something went wrong on my side. Please try again, or email me directly.",
  },
} as const;
