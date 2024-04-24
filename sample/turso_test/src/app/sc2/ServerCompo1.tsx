//import {useState, useEffect}  from 'react';
import React from 'react'
import Link from 'next/link'

import fetchCommon from '../serverLib/fetchCommon';
//
/**
 *
 * @param
 *
 * @return
 */
const getList = async function(){
  try {
    const item  = {
      "userId": 0,
    }      
    const json = await fetchCommon.post(item, "/test/get_list");
//console.log(json);
    return json.data;
  } catch (e) {
    console.error(e);
  } 
}
//
export default async function Page() {
  console.log('#ServerCompo1.tsx: Server Side Test');
  //
  async function action_test(form: any) {
    'use server'
    const message = form.get('message')
    console.log("message=", message)
  }
  //
  const data = await getList();
  //
  return (
  <>
    <h1>ServerCompo1.tsx</h1>
    <hr className="my-1" />
    <form action={action_test}>
      <input type="text" name="message" />
      <button type="submit">OK</button>
    </form>
    <hr className="my-1" />
    {data.map((item: any ,index: number) => {
    return (
    <div key={index}>
        <h3 className="text-3xl font-bold">{item.title}</h3>
        <span>ID: {item.id}, {item.createdAt}</span>
        <hr />
    </div>
    )
    })} 
  </>
  )
}
/*
<a href={`/testshow?id=${item.id}`}>[ Show ]</a>
*/
