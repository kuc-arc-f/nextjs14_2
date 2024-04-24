"use client";
import {useState, useEffect}  from 'react';
import React from 'react'
import HttpCommon from '../lib/HttpCommon';
import CrudIndex from './CrudIndex';

let pageItems: any[] = [];
//
export default function Compo() {
  console.log("Client Componentを実行しています");
  const [updatetime, setUpdatetime] = useState<string>("");
  //
  useEffect(() => {
    (async () => {
      setUpdatetime(new Date().toString() + String(Math.random()));
      getList();
    })()
  }, []);
  /**
   *
   * @param
   *
   * @return
   */
  const getList = async function(){
    try {
//      console.log("#testPorc");
      const item  = {
        "userId": 0,
      }      
      const json = await HttpCommon.serverPost(item, "/test/get_list");
  console.log(json);
      pageItems = json.data;
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
      <label>Title:</label>
      <input type="text" id="title" name="title"
      className="border border-gray-400 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
      /> 
      <hr className="my-1" />
      <label>Content:</label>
      <input type="text" id="content" name="content"
      className="border border-gray-400 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
      /> 
      <hr className="my-1" />
      <button onClick={()=>addPorc()}>Add</button>
      <hr className="my-1" />
      {pageItems.map((item: any ,index: number) => {
      return (
      <div key={index}>
          <h3 className="text-3xl font-bold">{item.title}</h3>
          <span>ID: {item.id}, {item.createdAt}</span>
          <a href={`/testshow?id=${item.id}`}>[ Show ]</a>
          <hr />
      </div>
      )
      })} 
    </div>
  );
}
