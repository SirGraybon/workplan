import Image from "next/image";
import "./styles/globals.css";
import data from '@/data/data.json'
import Tasks from "./tasks/page";

export default function Home() {
  return (
<div className="page">
    <h1>workPlan</h1>
    
        <Tasks/>
</div>

        
  );
}
