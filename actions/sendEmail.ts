"use server";

import nodemailer from "nodemailer";
import { validateString, getErrorMessage } from "@/lib/utils";

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail"); // Recruiter's email
  const message = formData.get("message"); // Message content

  // Simple validation
  if (!validateString(senderEmail, 500)) {
    return { error: "Invalid sender email" };
  }
  if (!validateString(message, 5000)) {
    return { error: "Invalid message" };
  }

  // Configure SMTP transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER, // Your email (receiver)
      pass: process.env.GMAIL_PASS, // Gmail App Password
    },
  });

  const mailOptions = {
    from: `"Sridharsni Portfolio Contact Form" <${process.env.GMAIL_USER}>`, // Your email
    to: "ssivak23@asu.edu", // Your email (receiver)
    subject: "New Contact Form Submission",
    text: `From: ${senderEmail}\n\nMessage:\n${message}`, // Plain text
    replyTo: senderEmail, // Allows you to reply to the sender
  };

  try {
    await transporter.sendMail(mailOptions);
    return { data: "Email sent successfully!" };
  } catch (error) {
    return { error: getErrorMessage(error) };
  }
};
