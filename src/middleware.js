import { NextResponse } from "next/server";

export function middleware(request) {

   //TODO PROTEGER RUTAS
   // if(request.url.includes('redeemRoute')) {
   //    if(!request.cookies.get('winary')) {
   //     return  NextResponse.redirect(new URL('/' ,request.url))
   //    }
   // }


   return NextResponse.next()
}