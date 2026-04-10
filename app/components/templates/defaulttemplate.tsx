"use client"
import { useRouter } from "next/navigation";
type props = {
    data : any;
}
import Image from "next/image";
import { useState,useEffect ,useRef} from "react";
import { json } from "stream/consumers";
export default   function Defaulttemplate({data}:props,){
    // const [data,setdata] = useState(null);
     const router = useRouter()
    const resumeref = useRef(null);
    // useEffect(()=>{
    //     const stored_data = JSON.parse(localStorage.getItem("userData"));
    //     setdata(stored_data);
    // },[])
    if (!data) return <h2>Loading...</h2>;
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
    // const stored_data = await searchstored_data;
    return<div> 
    <div className="resume" ref={resumeref}>
        <div className="header"> 
         <h1>RESUME</h1>
         {/* <Image src= {`data:${data.imageData.mediaType};base64,${data.imageData.data}`} alt="Profile-Image" width={100} height={100} className="images"></Image> */}
         {data.imageData && (
  <Image
    src={`data:${data.imageData.mediaType};base64,${data.imageData.data}`}
    alt="Profile-Image"
    width={100}
    height={100}
    className="images"
  />
)}
         </div>
         <h2 className="pers_info">PERSONAL INFORMATION</h2>
         <br/>
        <h3 className="res_name">Name : {data.Name}</h3>
        <h3 className="res_profession">Profession : {data.Profession}</h3>
        <h3 className="res_email">Email : {data.Email}</h3>
        <h3 className="res_add">Address : {data.Add}</h3>
        <h3 className="res_phn">Phone NO.: {data.Phone}</h3>
        <br/>
        <h2 className="summary">SUMMARY</h2><br/>
        <h3 className="summ_text">{data.summary}</h3>
         <h2 className="education">EDUCATION</h2><br/>
     {/* 
    
     <h3 className="marks">TOTAL MARKS/CGPA</h3>
     <h3 className="marks">OBTAINED MARKS/CGPA</h3>
     <h3 className="marks">PERCENTAGE</h3> */}
     <table className="table">
        <thead className="thead">
            <tr className="throw">
                <th className="th"></th>
                <th className="th">TOTAL MARKS</th>
                <th className="th">OBTAINED MARKS</th>
                <th className="th">PERCENTAGE</th>
            </tr>
        </thead>
        <tbody className="tbody">
            <tr className="tbrow">
                <td className="tdata">CLASS 10</td>
                <td className="tdata">{data.Total_10}</td>
                <td className="tdata">{data.Get_10}</td>
                <td className="tdata">{data.Percent_10}</td>
            </tr>
            <tr className="tbrow">
                <td className="tdata">CLASS 12</td>
                <td className="tdata">{data.Total_12}</td>
                <td className="tdata">{data.Get_12}</td>
                <td className="tdata">{data.Percent_12}</td>
            </tr>
             <tr className="tbrow">
                <td className="tdata">BTECH</td>
                <td className="tdata">{data.Total_btech}</td>
                <td className="tdata">{data.Get_btech}</td>
                <td className="tdata">{data.Percent_btech}</td>
            </tr>
        

        </tbody>
     </table>
     <h2 className="skills">LANGUAGES</h2>
     <ul> 
        <div className="SKILLS"> 
     {Array.isArray(data.languages) && 
     data.languages.map((language:string,index:number)=>(
        <li key={index}>{language}</li>
     ))}
     </div>
     </ul>
    <h2 className="skills">SKILLS</h2>
<ul>
    <div className="SKILLS"> 
  {Array.isArray(data.skills) &&
    data.skills.map((skill:string, index:number) => (
      <li key={index}>{skill}</li>  
    ))}
    </div>
</ul>
    <h2 className="projects">PROJECTS</h2>
<ul className="PROJECTS">
  {Array.isArray(data.projects) &&
    data.projects.map((project:string, index:number) => (
      <li key={index}>
        <strong>{project}</strong>
        {data.projectDescriptions?.[index] && (
          <p>{data.projectDescriptions[index]}</p>
        )}
      </li>
    ))}
</ul>
<h2 className="summary">EXPERIENCE</h2>
<h3>{data.role}  - {data.experience}</h3>
<h3 className="summ_text">{data.experiencedescription}</h3>
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
}