import type { NextFetchEvent, NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(req: NextRequest, _ev: NextFetchEvent) {
  console.log('[middleware] req url:', req.url);
  return NextResponse.next();
}
