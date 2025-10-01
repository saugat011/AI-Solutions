// app/api/admin/badge-counts/route.ts

import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // TODO: Replace with your actual database queries
    // Example: const inquiryCount = await db.inquiries.count({ where: { status: 'unread' }});
    
    const badgeCounts = {
      inquiries: 12, // Replace with actual count from DB
      notifications: 5, // Replace with actual count from DB
    };

    return NextResponse.json(badgeCounts);
  } catch (error) {
    console.error('Error fetching badge counts:', error);
    return NextResponse.json(
      { inquiries: 0, notifications: 0 },
      { status: 500 }
    );
  }
}