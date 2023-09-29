import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    
    const response = [
        {
            subheader: "Contribute",
            header: "Work with your Community",
            desc: "Student Government gives students the opportunity to make real differences in the Rensselaer community. Contribute meaningful changes to make the student experience unforgettable."
        }
    ];

    return NextResponse.json(response);
}