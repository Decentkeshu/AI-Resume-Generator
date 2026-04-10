"use client";

type Props = {
  data: any;
};

import { useRouter } from "next/navigation";
import { useState,useEffect ,useRef} from "react";
import { json } from "stream/consumers";

export default function ModernTemplate({ data }: Props) {
  const router = useRouter()
  const resumeref = useRef(null);

   const downloadpdf = async()=>{
        const html2pdf = (await import ("html2pdf.js")).default;
       const options = {
    margin: 10,
    filename: `${data.Name}_Resume.pdf`,
    image: { type: "jpeg" as const, quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "mm" as const, format: "a4", orientation: "portrait" as const },
};
if (resumeref.current) {
    html2pdf().set(options).from(resumeref.current).save();
}

    }
  return (
    <div className="mod_container" ref={resumeref}>
      
      {/* LEFT SIDEBAR */}
      <div className="mod_Lsidebar"
      >
        <h1 className="mod_name">{data.Name}</h1>
        <p className="mod_profession">{data.Profession}</p>

        <hr className="mod_hr" />

        <h3 className="mod_contacts">Contact</h3>
        <p className="mod_email">{data.Email}</p>
        <p className="mod_phone">{data.Phone}</p>
        <p className="mod_add">{data.Add}</p>

        <hr className="mod_hr"/>
        <h3 className="mod_skills_h">Languages</h3>
        <ul className="mod_skills"> 
        {Array.isArray(data.languages) && 
        data.languages.map((language:string,index:number)=>(
          <li key={index}>{language}</li>
        ))}
        </ul>

        <h3 className="mod_skills_h">Skills</h3>
        <ul className="mod_skills">
          {data.skills?.map((skill: string, index: number) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>

      {/* RIGHT CONTENT */}
      <div className="mod_Rsidebar">
        
        <h2 className="mod_summ_h">Professional Summary</h2>
        <p className="mod_summ">{data.summary}</p>

        <h2 className="mod_edu_h">Education</h2>
        <p className="mod_edu">Class 10 - {data.Percent_10}%</p>
        <p className="mod_edu">Class 12 - {data.Percent_12}%</p>
        <p className="mod_edu">B.Tech - {data.Percent_btech}%</p>

        <h2 className="mod_proj_h">Projects</h2>
        {data.projects?.map((project: string, index: number) => (
          <div key={index} className="mod_projs">
            <h4 className="mod_proj">{project}</h4>
            <p className="mod_proj_des">{data.projectDescriptions?.[index]}</p>
          </div>
        ))}
        <h2 className="mod_summ_h">EXPERIENCE</h2>
       <h3>{data.role}  - {data.experience}</h3>
       <h3 className="mod_summ">{data.experiencedescription}</h3>
        
      </div>

             <div className="button_s">
    <button onClick={downloadpdf} className="print">
        Download as Pdf
    </button>


<button onClick={() => window.print()} className="print">
  Print Resume
</button>
 <button type="button" onClick={()=>router.push("/builder?edit=true")} className="print">Edit Resume</button>
    </div>
    </div>
  );
}