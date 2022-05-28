import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  console.log('[middleware] req url:', req.url);
  return NextResponse.next();
}
