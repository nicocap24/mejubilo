import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const COUNTER_FILE = path.join(process.cwd(), 'visit-counter.txt');

// Initialize counter file if it doesn't exist
if (!fs.existsSync(COUNTER_FILE)) {
  fs.writeFileSync(COUNTER_FILE, '0');
}

export async function GET() {
  try {
    const count = parseInt(fs.readFileSync(COUNTER_FILE, 'utf-8'));
    return NextResponse.json({ count });
  } catch (error) {
    return NextResponse.json({ count: 0 });
  }
}

export async function POST() {
  try {
    const count = parseInt(fs.readFileSync(COUNTER_FILE, 'utf-8'));
    const newCount = count + 1;
    fs.writeFileSync(COUNTER_FILE, newCount.toString());
    return NextResponse.json({ count: newCount });
  } catch (error) {
    return NextResponse.json({ count: 0 });
  }
} 