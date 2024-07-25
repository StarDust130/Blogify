import { connectDB } from "@/db/dbConfig";
import { getDataFromToken } from "@/helpers/getDataFromToken";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
connectDB();

export const GET = async (request: NextRequest, response: NextResponse) => {
  const userID = await getDataFromToken(request);
  const user = await User.findById({ _id: userID }).select("-password");

  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 400 });
  }

  return NextResponse.json({
    msg: "User found successfully",
    data: {
      user: user,
    },
  });
};
