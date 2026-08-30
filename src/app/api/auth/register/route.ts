import dbConnect from "@/lib/dbconfig";
import User from "@/model/user.model";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {

    const { username, password } = await request.json()

    if(!username || !password){
        return NextResponse.json({ message: "All field required!" }, { status: 400 })
    }

    
    try {
        await dbConnect()
        const existing = await User.findOne({username})

        if (existing) {
            return NextResponse.json({ message: "User allready exists!" }, { status: 400 })
        }

        const user = await User.create({
            username,
            password
        })

        return NextResponse.json({ message: "User created successfully!",user }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Failed to create user",error }, { status: 500 })
    }

}