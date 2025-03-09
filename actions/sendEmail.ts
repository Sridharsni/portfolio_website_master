"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail") as string;
  const message = formData.get("message") as string;

  // ✅ Validate email format & ensure it's not empty
  if (!senderEmail || !senderEmail.includes("@") || !validateString(senderEmail, 500)) {
    return { error: "Please enter a valid email address." };
  }

  // ✅ Validate message content
  if (!validateString(message, 5000)) {
    return { error: "Message is too long or invalid." };
  }

  try {
    const data = await resend.emails.send({
      from: "onboarding@resend.dev", // ✅ Default verified sender
      to: "ssivak23@asu.edu", // ✅ Your email
      subject: "New Contact Form Message",
      reply_to: senderEmail, // ✅ Allows replying directly to the user
      react: React.createElement(ContactFormEmail, {
        message: message,
        senderEmail: senderEmail,
      }),
    });

    return { data };
  } catch (error: unknown) {
    return { error: getErrorMessage(error) };
  }
};
