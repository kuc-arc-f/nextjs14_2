//
//import prisma from "../../../lib/prismaClient";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
//    const todoPosts = await prisma.post.findMany();
    return NextResponse.json([]);
}

//
export async function POST(req: Request) {
  /*
    const { title, description } = await req.json();
    const post = await prisma.post.create({
        data: {
            title,
            description,
        },
    });
  */
  return NextResponse.json({ret: 'OK', msg: 'post_msg'});
}
