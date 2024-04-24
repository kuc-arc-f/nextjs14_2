"use client";
import {useState, useEffect}  from 'react';
import React from 'react'
import { useSearchParams } from 'next/navigation'
import HttpCommon from '../lib/HttpCommon';
import CrudIndex from './CrudIndex';

let itemId: number = 0;
let pageItem: any = {};
//
export default function Compo() {
  const [updatetime, setUpdatetime] = useState<string>("");
  const searchParams = useSearchParams()
  const id = searchParams.get('id')
//
  useEffect(() => {
    (async () => {
      itemId = Number(id);
console.log("id=", itemId);
      setUpdatetime(new Date().toString() + String(Math.random()));
      getItem();
    })()
  }, []);
  /**
   *
   * @param
   *
   * @return
   */
  const getItem = async function(){
    try {
//      console.log("#testPorc");
      const item  = {
        "id": itemId,
      }      
      const json = await HttpCommon.serverPost(item, "/test/get");
  console.log(json);
      pageItem = json.data;
  //      console.log(json.data);
        setUpdatetime(new Date().toString() + String(Math.random()));
    } catch (e) {
      console.error(e);
    } 
  }
  /**
   *
   * @param
   *
   * @return
   */
  const addPorc = async function(){
    try {
      await CrudIndex.addItem(); 
      location.reload();
    } catch (e) {
      console.error(e);
    } 
  }
  //
  return (
    <div >
      <h1>ClientCompo1.tsx</h1>
      <hr />
      <h1>{pageItem.title}</h1>
      <hr />
      <span>id: {pageItem.id}, {pageItem.createdAt}</span>
      <hr className="my-1" />
      <button onClick={()=>addPorc()}>Add</button>
      <hr className="my-1" />
    </div>
  );
}
