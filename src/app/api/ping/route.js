const { NextResponse } = require("next/server");

export async function GET() {
    try {
        const time = new Date().toLocaleTimeString();
        return NextResponse.json({ 
            pong: "pong",
            time: time
         });
    } catch (error) {
        console.log(error);
    }
}