import nodemailer from "nodemailer";

export const sendEmail = async ({ email, emailType, userId }: any) => {
  try {
    //TODO: Implement the logic to send email

    const transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false,
      auth: {
        user: "maddison53@ethereal.email",
        pass: "jn7jnAPss4f63QBp6D",
      },
    });

    const mailOptions = {
      from: "learnprogramming130@gmail.com",
      to: email,
      subject:
        emailType == "verify" ? "Verify your email" : "Reset your password",
      html: "<b>Hello world?</b>",
    };

    const mailResponse = await transporter.sendMail(mailOptions);

    console.log("Message sent: %s", mailResponse.messageId);

    return mailResponse;
  } catch (error: any) {
    throw new Error("Error in sending email 📧 😢");
  }
};
