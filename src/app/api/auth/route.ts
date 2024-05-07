import { NextResponse } from "next/server";
import users from "@/db/users.json";
import { NextApiRequest, NextApiResponse } from "next";

export async function POST(request: NextApiRequest, response: NextApiResponse) {
  return NextResponse.json(users);
}
