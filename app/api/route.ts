import { cookies } from "next/headers";
import { NextRequest } from "next/server";

export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {

    // console.log(request.cookies.get('theme'))
    console.log(cookies().getAll())


    return Response.json({ name: new Date().toLocaleTimeString() }, {
        headers: {
            'Content-Type': 'application/json',
            'Set-Cookie': 'theme=dark',
        },
        status: 200
    })
}