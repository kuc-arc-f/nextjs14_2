import HttpCommon from '../lib/HttpCommon';
import LibConfig  from '../lib/LibConfig';
import Crud from './Crud';
//
const CrudIndex = {
  /**
   * getList
   * @param
   *
   * @return
   */
  getList :async function (): Promise<any>
  {
    try{
      const item  = {
        "userId": 0,
      }      
      const body: any = JSON.stringify(item);		
      const res = await fetch("/api/turso_get_list", {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},      
        body: body
      });
      const json = await res.json()
//console.log(json);      
//      let items: any[] = [];
//      items = json.data;
      return json;
    } catch (e) {
        console.error(e);
        throw new Error("Error, getList");
    } 
  },  
  /**
   *
   * @param
   *
   * @return
   */
  addItem : async function() : Promise<any>
  {
      try{
          let ret = false;
          const values = Crud.getInputValues();
          const item = {
              "api_key": "",
              "title": values.title,
              "content": "content1",
              "completed": 0,
              "userId": 0
          };            
console.log(item);
//return; 
          const json = await HttpCommon.serverPost(item, "/test/create");
console.log(json);
          if (json.ret ===  LibConfig.OK_CODE) {
              ret = true;
          }
          //clear
          Crud.clearInputValues(); 
          return ret;
      } catch (e) {
          console.error("Error, addItem");
          console.error(e);
          throw new Error('Error , addItem');
      }
  },
  /**
 *
 * @param key: any
 *
 * @return
 */     
  displayAlert: function (idName: string) {
      //console.log("displayAlert=");
      const elm = document.querySelector(`#${idName}`);
      if(elm) {elm.classList.remove('d-none');}
      setTimeout(function(){
          if(elm) {elm.classList.add('d-none');}
      }, 4000)
  },
}

export default CrudIndex;
