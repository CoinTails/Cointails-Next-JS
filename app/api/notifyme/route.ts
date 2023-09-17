import { NextResponse } from "next/server";
export async function GET(
    req:Request,  

    ) { 
        try {
            console.log({req})
            const body = await req.json();
            const {email} = body;
        if (!email){
            return new NextResponse("Name is required",{status:400})
        }
                }catch(error){
            console.log('[STORES_POST]',error)
            return new NextResponse('Internal error',{status:500});
        }
    
}