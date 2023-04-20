import { prisma } from "@/app/prisma/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(_request: NextRequest) {
  const chats = await prisma.chat.findMany();
  return NextResponse.json( chats );
}

export async function POST(request:NextRequest) {
  const { message } = await request.json();
  const chatCreated = await prisma.chat.create({
    data: {
      message
    }
  });

  return NextResponse.json(chatCreated)
}