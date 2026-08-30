import dbConnect from '@/lib/dbconfig'
import Contact from '@/model/contact.model';
import { getServerSession } from 'next-auth';
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {

    const data = await request.json()

    if (!data.name || !data.phoneNo || !data.email || !data.projectName) {
        return NextResponse.json({ message: "Please fill all the required fields!" }, { status: 400 })
    }

    try {
        await dbConnect();

        const contact = await Contact.create({
            name: data.name,
            phoneNo: data.phoneNo,
            email: data.email,
            projectName: data.projectName,
            message: data.message || "",
        })

        return NextResponse.json({ message: "Contact created succesfully!", contact }, { status: 200 })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: "Failed to creact contact", error }, { status: 500 })
    }
}

export async function GET(request: NextRequest) {

    try {
        await dbConnect();

        const sessions = await getServerSession();

        if (!sessions) {
            return NextResponse.json({ message: "You are not admin!" }, { status: 404 })
        }


        const [allContact, totalContact, pendingContact, acceptedContact] = await Promise.all([
            Contact.find().sort({ createdAt: -1 }),
            Contact.countDocuments({}),
            Contact.countDocuments({ status: "pending" }),
            Contact.countDocuments({ status: "accept" })
        ])

        if (!allContact || allContact.length === 0) {
            return NextResponse.json({
                message: "No one contact us!",
                allContact: [],
                totalContact: 0,
                pendingContact: 0,
                acceptedContact: 0
            }, { status: 404 })
        }

        return NextResponse.json({
            message: "Fetch all contact quaries!",
            contact: allContact,
            totalContact,
            pendingContact,
            acceptedContact
        }, { status: 201 })
    } catch (error) {
        return NextResponse.json({ message: "Error on fetching contacts!", error }, { status: 500 })
    }
}