import { connectDB } from "@/db/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

connectDB();

export const POST = async (request: NextRequest, response: NextResponse) => {
  try {
    const reqBody = await request.json();
    const { usernameOrEmail, password } = reqBody;

    //! 1) Validate user input 🍒
    if (!usernameOrEmail || !password) {
      return NextResponse.json(
        { error: "Please enter all fields" },
        { status: 400 }
      );
    }

    //! 2) Check if user exists 🤔
    const user = await User.findOne({
      $or: [{ email: usernameOrEmail }, { username: usernameOrEmail }],
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 400 });
    }

    //! 3) Check if password is correct
    const isMatch = await bcryptjs.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 400 }
      );
    }

    //! 4) Generate JSON WEB Token 🫦
    const tokenData = {
      id: user._id,
      username: user.username,
      email: user.email,
    };

    const token = jwt.sign(tokenData, process.env.TOKEN_SECRET!, {
      expiresIn: "1d",
    });

    //! 4) Response with user data
    const response = NextResponse.json({
      msg: "User Login successfully",
      success: true,
      status: 200,
      data: {
        user: user,
      },
    });

    //! 5) Set cookie 🍪 and send response
    response.cookies.set("token", token, {
      httpOnly: true,
    });

    return response;
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({
      error: "Server error, User not login 😿",
      status: 500,
    });
  }
};
