import { prisma } from "@/app/prisma/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(_request: NextRequest) {
  const chats = await prisma.chat.findMany();
  return NextResponse.json( chats )
}