import { NextResponse, NextRequest } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const keySequence = body?.keys || [];

        const expectedCode =
            process.env.EASTER_EGG_CODE ||
            "ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightKeyBKeyA";

        const receivedCode = keySequence.join("");

        if (receivedCode !== expectedCode) {
            return NextResponse.json(
                { error: "Unauthorized" },
                { status: 403 }
            );
        }

        const url =
            process.env.SECRET_LINK || process.env.NEXT_PUBLIC_SECRET_LINK;

        if (!url) {
            return NextResponse.json(
                { error: "Not configured" },
                { status: 404 }
            );
        }

        const allowedPrefix = "https://wa.me/";
        if (!url.startsWith(allowedPrefix)) {
            return NextResponse.json({ error: "Invalid link" }, { status: 400 });
        }

        return NextResponse.json({ url });
    } catch (err) {
        console.error("Secret link error:", err);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
