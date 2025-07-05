'use client'
import { testFunc } from "@/lib/taskFunctions";

export default function home() {
  return(

    <>
  <button onClick={testFunc}>Click me!</button>
  </>
  )
}