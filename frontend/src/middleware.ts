import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const response = NextResponse.next()
  
  // Add AdSense headers
  response.headers.set('X-Google-AdSense', 'ca-pub-5179832879235237')
  
  return response
}

export const config = {
  matcher: '/:path*',
} 