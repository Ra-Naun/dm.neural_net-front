import { NextRequest, NextResponse } from 'next/server';

import redirectToCurrentLangSuffix from '../middlewares/redirectToCurrentLangSuffix';

export function middleware(request: NextRequest) {
  let isRedirect = redirectToCurrentLangSuffix(request);
  if(isRedirect) return isRedirect;
}
