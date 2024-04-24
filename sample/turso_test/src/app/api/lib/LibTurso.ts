
import { createClient } from "@libsql/client";
//
const  LibTurso = {
  /**
  * 
  * @param
  *
  * @return
  */ 
  getClient: function(){
    try{
//console.log("=", process.env.TORSO_URL);
      //@ts-ignore
      const url: string = process.env.TURSO_URL?.toString();
      //@ts-ignore
      const authToken: string = process.env.TURSO_AUTH_TOKEN?.toString();
      //
      const client = createClient({
        url: url,
        authToken: authToken,
      });
      return client;      
    } catch (err) {
      console.log(err);
      throw new Error('Error, getClient');
    }
  },       
}
export default LibTurso;
