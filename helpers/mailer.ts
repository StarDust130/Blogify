import nodemailer from "nodemailer";
import getEmailHtml from "./emailHtml";

export const sendEmail = async ({ email, emailType, token }: any) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "67f0d74c9a8ba3",
        pass: "1e21ff544aeb65",
      },
    });

    const mailOptions = {
      from: "learnprogramming130@gmail.com",
      to: email,
      subject:
        emailType == "verify" ? "Verify your email" : "Reset your password",
      html: getEmailHtml(emailType, token),
    };

    const mailResponse = await transporter.sendMail(mailOptions);

    console.log("Message sent: %s", mailResponse.messageId);

    return mailResponse;
  } catch (error: any) {
    throw new Error("Error in sending email 📧 😢");
  }
};
