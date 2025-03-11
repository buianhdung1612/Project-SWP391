import { NextResponse, NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {

  console.log("Chạy vào đây");
  const token = request.cookies.get('token');
  console.log(token)

  if (!token) {
    return NextResponse.redirect(new URL('/auth/login', request.url));
  }

  // const response = await fetch('https://freshskinweb.onrender.com/auth/getUser', {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json"
  //   },
  //   body: JSON.stringify({
  //     token: token
  //   })
  // })

  // const dataResponse = await response.json();

  // if (dataResponse.code == 200) {
  //   return NextResponse.next();
  // }
  // else {
  //   return NextResponse.redirect(new URL('/auth/login', request.url))
  // }
}

export const config = {
  matcher: ['/admin/:path*', '!/admin/auth/login']
};