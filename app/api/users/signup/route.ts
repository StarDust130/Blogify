import { connectDB } from "@/db/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import { sendEmail } from "@/helpers/mailer";
import crypto from "crypto"; // For generating verification token

connectDB();

export const POST = async (request: NextRequest, response: NextResponse) => {
  try {
    // Destructure request body
    const reqBody = await request.json();
    const { username, email, password } = reqBody;

    // Validate user input
    if (!email || !password || !username) {
      return NextResponse.json(
        { error: "Please enter all fields" },
        { status: 400 }
      );
    }

    // Check if user already exists
    const user = await User.findOne({
      $or: [{ username }, { email }],
    }).select("-password");

    if (user) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    // Hash user password
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    // Generate verification token and expiry date
    const verifyToken = crypto.randomBytes(32).toString("hex");
    const verifyTokenExpiry = Date.now() + 24 * 60 * 60 * 1000; // Token valid for 24 hours

    // Create new user
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      verifyToken,
      verifyTokenExpiry,
    });

    // Save user to DB
    const saveUser = await newUser.save();
    console.log(saveUser);

    // Send verification email
    await sendEmail({
      email,
      emailType: "verify",
      token: verifyToken, // Pass the token to the email helper
    });

    // Return success response
    return NextResponse.json({
      msg: "User SignUp successfully",
      success: true,
      status: 200,
      data: {
        user: {
          saveUser,
        },
      },
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
