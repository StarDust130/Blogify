import { connectDB } from "@/db/dbConfig";
import { NextRequest, NextResponse } from "next/server";
connectDB();

export const GET = async (request: NextRequest, response: NextResponse) => {
  try {
    //! 1) Create a Response 😘
    const response = NextResponse.json({
      msg: "User Logout successfully",
      success: true,
      status: 200,
    });

    //! 2) Clear the token cookie 🍪
    response.cookies.set("token", "", {
      httpOnly: true,
      expires: new Date(0),
    });

    //! 3) Return the response 🚀
    return response;
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
