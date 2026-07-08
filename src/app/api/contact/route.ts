import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Contact from "@/models/Contact";

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const body = await req.json();

    const { name, phone, email, company, message } = body;

    // Validation
    if (!name || !phone || !email || !company || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "All fields are required.",
        },
        { status: 400 }
      );
    }

    const contact = await Contact.create({
      name,
      phone,
      email,
      company,
      message,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Form submitted successfully!",
        data: contact,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong.",
      },
      { status: 500 }
    );
  }
}