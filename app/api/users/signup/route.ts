import { connectDB } from "@/db/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import { sendEmail } from "@/helpers/mailer";

connectDB();

export const POST = async (request: NextRequest, response: NextResponse) => {
  try {
    //! Destructure request body 😸
    const reqBody = await request.json();
    const { username, email, password } = reqBody;

    //! 1) Validate user input 🍒
    if (!email || !password || !username) {
      return NextResponse.json(
        { error: "Please enter all fields" },
        { status: 400 }
      );
    }

    //! 2) Check if user already exists 🤔
    const user = await User.findOne({ email }).select("-password");
    if (user) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    //! 3.1) Hash user password 🔒
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    //! 3.2) Create new user 🎉
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    //! 3.3) Save user to DB 🚀
    const saveUser = await newUser.save();
    console.log(saveUser);

    //! 4) Send verification email 📧
    await sendEmail({
      email,
      emailType: "verify",
      userId: saveUser._id,
    });

    //! 5) Return success response 🥳
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
