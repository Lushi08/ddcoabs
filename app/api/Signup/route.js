import { connectMONGODB } from "@/app/lib/mongodb";
import Users from "@/app/models/user";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const body = await req.json();
        const usersReg = body.formData
        await connectMONGODB();
        await Users.create(usersReg);

        return NextResponse.json({ message: "User registered!" }, { status: 201 });
    } catch (error) {
        console.error("ERROR REGISTRY!", error);
        return NextResponse.json({ message: "ERROR REGISTRY!", error }, { status: 500 });
    }
}
