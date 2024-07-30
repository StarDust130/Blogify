import { connectDB } from "@/db/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";

connectDB();

export const POST = async (request: NextRequest, response: NextResponse) => {
  try {
    // Get user id from request body
    const reqBody = await request.json();
    const { token } = reqBody;
    console.log("Received token:", token);

    // Validate user input
    if (!token) {
      return NextResponse.json({ error: "Token not found" }, { status: 400 });
    }

    // Inside the POST function for verification
    const query = {
      verifyToken: token,
      verifyTokenExpiry: { $gt: new Date() },
    };
    console.log("Query to find user:", query);

    // Find user by token and check if token has not expired
    const user = await User.findOne(query);
    console.log("User found:", user);

    console.log("User found:", user); // Check what is being returned

    // Check if user exists
    if (!user) {
      console.log("User not found or token expired");
      return NextResponse.json({
        error: "Invalid token or token expired",
        status: 404,
      });
    }

    // Update user verification status
    user.isVerified = true;
    user.verifyToken = undefined; // remove token for DB
    user.verifyTokenExpiry = undefined; // remove token and expiry date

    // Save user to DB
    await user.save();

    // Return success response
    return NextResponse.json({
      msg: "User verified successfully",
      success: true,
      status: 200,
    });
  } catch (error: any) {
    console.error("Server error:", error);
    return NextResponse.json({
      error: "Server error, User not verified",
      status: 500,
    });
  }
};
