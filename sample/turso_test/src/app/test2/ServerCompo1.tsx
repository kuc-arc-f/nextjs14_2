//import {useState, useEffect}  from 'react';
import React from 'react'
import Link from 'next/link'
//
export default function Page() {
  console.log('#ServerCompo1.tsx: Server Side Test');
  //
  return (
  <>
    <h1>Server Side Test</h1>
    <hr />
    <a href="/test">[ Test_Link ]</a>
  </>
  )
}
