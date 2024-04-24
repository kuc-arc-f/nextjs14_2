
import { NextResponse } from "next/server";
//import HttpCommon from '../lib/HttpCommon';

//
export async function POST(req: Request) {
//  const { title, description } = await req.json();
  try{  
    const reqJson = await req.json();
    //console.log(reqJson);
      const url = process.env.API_URI; 
      const path = reqJson.api_url;	
console.log("path=", url + path);
      const body: any = JSON.stringify(reqJson);		
      const res = await fetch(url + path, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},      
        body: body
      });
      const json = await res.json()
//console.log(json);
    return NextResponse.json(json);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ret: 'NG', msg: 'sendPost_msg'});
  }
}
