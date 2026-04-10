"use client";

type Props = {
  data: any;
};
import { useRouter } from "next/navigation";
import { useState,useEffect ,useRef} from "react";
import { json } from "stream/consumers";

export default function ATSTemplate({ data }: Props) {

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
    <div className="ats_container" ref={resumeref}>
      
      {/* Name */}
      <h1 className="ats_name">{data.Name}</h1>
      <p className="ats_email">{data.Email} | {data.Phone}</p>
      <p className="ats_add">{data.Add}</p>

      {/* Summary */}
      <h2 className="ats_summ_h">Professional Summary</h2>
      <p className="ats_summ">{data.summary}</p>
      
      <h2 className="ats_skills_h">Languages</h2>
      {Array.isArray(data.languages) && 
      data.languages.map((language: string, index: number) => (
        <li key={index}>{language}</li>
      ))}

      {/* Skills */}
      <h2 className="ats_skills_h">Skills</h2>
      <ul className="ats_skills">
        {data.skills?.map((skill: string, index: number) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>

      {/* Education */}
      <h2 className="ats_edu_h">Education</h2>
      <p className="ats_edu">Class 10 - {data.Percent_10}%</p>
      <p className="ats_edu">Class 12 - {data.Percent_12}%</p>
      <p className="ats_edu">B.Tech - {data.Percent_btech}%</p>

      {/* Projects */}
      <h2 className="ats_proj_h">Projects</h2>
      {data.projects?.map((project: string, index: number) => (
        <div key={index} className="ats_proj">
          <p><strong>{project}</strong></p>
          <p>{data.projectDescriptions?.[index]}</p>
        </div>
      ))}
      <h2 className="ats_summ_h">EXPERIENCE</h2>
      <h3>{data.role}  - {data.experience}</h3>
      <h3 className="ats_summ">{data.experiencedescription}</h3>

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

    // </div>
  );
}