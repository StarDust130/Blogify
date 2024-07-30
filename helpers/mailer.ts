import User from "@/models/userModel";
import nodemailer from "nodemailer";
import crypto from "crypto";
import getEmailHtml from "./emailHtml";

export const sendEmail = async ({ email, emailType, userId }: any) => {
  try {
    const hashToken = crypto.randomBytes(20).toString("hex");

    if (emailType == "verify") {
      await User.findByIdAndUpdate(userId, {
        $set: {
          verifiyToken: hashToken,
          verifyTokenExpiry: Date.now() + 3600000, // 1 hour
        },
      });
    } else if (emailType == "reset") {
      await User.findByIdAndUpdate(userId, {
        $set: {
          forgotPasswordToken: hashToken,
          forgotPasswordTokenExpiry: Date.now() + 3600000, // 1 hour
        },
      });
    } else {
      throw new Error("Invalid email type");
    }

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
      html: getEmailHtml(emailType, hashToken),
    };

    const mailResponse = await transporter.sendMail(mailOptions);

    console.log("Message sent: %s", mailResponse.messageId);

    return mailResponse;
  } catch (error: any) {
    throw new Error("Error in sending email 📧 😢");
  }
};
