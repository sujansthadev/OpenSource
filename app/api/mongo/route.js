import { NextResponse } from "next/server";

export async function GET(req) {
	return NextResponse.json({ hello: 21 });
}

export async function POST(request) {
	return NextResponse.json({ hello: 2 });
}
