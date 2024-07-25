import { connectDB } from "@/db/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";

connectDB();

export const POST = async (request: NextRequest, response: NextResponse) => {
  try {
    //!  Get user id from request body 😸
    const reqBody = await request.json();
    const { token } = reqBody;
    console.log(token);

    //! 1) Validate user input 🍒
    if (!token) {
      return NextResponse.json({ error: "Token not found" }, { status: 400 });
    }

    //! 3) Find user by id 🕵️‍♂️
    const user = await User.findOne({
      verifyToken: token,
      verifyTokenExpiry: { $gt: Date.now() },
    });

    //! 4) Check if user exists 🤔
    if (!user) {
      return NextResponse.json({
        error: "Invalid token or token expired",
        status: 404,
      });
    }

    //! 5) Update user verification status 🎉
    user.isVerified = true;
    user.verifyToken = undefined; // remove token for DB
    user.verifyTokenExpiry = undefined; // remove token and expiry date

    //! 6) Save user to DB 🚀
    await user.save();

    //! 7) Return success response 🥳

    return NextResponse.json({
      msg: "User verified successfully",
      success: true,
      status: 200,
    });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({
      error: "Server error , User not verfiy 😿",
      status: 500,
    });
  }
};
