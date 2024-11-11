// route.ts - API endpoint to serve demo block data
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    message: 'This is a demo text block for order summary.',
    title: 'Order Summary Demo',
  });
}