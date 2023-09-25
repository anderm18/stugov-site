import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {

    const response = {
        "hello": "world!"
    }

    return NextResponse.json(response);
}