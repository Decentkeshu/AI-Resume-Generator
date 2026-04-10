"use client";
import { useRouter } from "next/navigation";
import { useState,useEffect,useRef } from "react";
import ClassicTemplate from "../components/templates/classictemplate";
import Defaulttemplate from "../components/templates/defaulttemplate";
import ATSTemplate from "../components/templates/ATStemplate";
import ModernTemplate from "../components/templates/moderntemplate";

export default function Resultpage(){
    const router = useRouter()
    const [data, setdata] = useState<any>(null);
   const resumeref = useRef<HTMLDivElement>(null);
   useEffect(()=>{
        const stored_data = JSON.parse(localStorage.getItem("userData") || "null");
        setdata(stored_data);
    },[])
    if(!data) return <h2>Loading...</h2>

    const rendertemplate = ()=>{
        switch(data.template){
        case  "ats":
            return<ATSTemplate data={data}/>
            break;
        case  "classic":
            return<ClassicTemplate data={data}/>
            break;
        case "modern":
            return<ModernTemplate data={data}/>
            break;
        default:
            return<Defaulttemplate data={data}/>
        
     }
    }

    return<>
    

     
       <div ref={resumeref}>

        {rendertemplate()}

  
   </div>
  
    </>
}