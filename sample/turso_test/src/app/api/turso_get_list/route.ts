
import { NextResponse } from "next/server";
import LibTurso  from '../lib/LibTurso';
//import HttpCommon from '../lib/HttpCommon';

//
export async function POST(req: Request) {
  const retObj = {ret: "NG", data: [], message: ""};
  try{  
    const reqJson = await req.json();
    //console.log(reqJson);
    /*
    const url = process.env.API_URI;
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
    */
      const client = await LibTurso.getClient();
      const sql = `SELECT * FROM todos ORDER BY id DESC LIMIT 100;`;
console.log(sql);
      const resulte = await client.execute(sql);
//console.log(resulte.rows);
      retObj.ret = "OK";
      //@ts-ignore
      retObj.data = resulte.rows;
//console.log(json);
    return NextResponse.json(retObj);
  } catch (error) {
    console.error(error);
    return NextResponse.json(retObj);
  }
}
