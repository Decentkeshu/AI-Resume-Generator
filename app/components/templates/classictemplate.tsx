"use client";
type props={
    data:any;
}
export default function ClassicTemplate({ data }:props) {
  return (
    <div className="cls_container">
      
      {/* Name */}
      <center>
        <h1 className="cls_name">{data.Name}</h1>
        <p className="cls_prof">{data.Profession}</p>
        <p className="css_email">{data.Email} | {data.Phone}</p>
        <p className="cls_add">{data.Add}</p>
      </center>

      <hr />

      {/* Summary */}
      <h2 className="cls_summ_h">Career Objective</h2>
      <p className="cls_summ">{data.summary}</p>

      {/* Education */}
      <h2 className="cls_edu_h">Education</h2>
      <table border={1} cellPadding="5" width="100%" className="cls_table">
        <thead className="cls_thead">
          <tr className="cls_trow">
            <th className="cls_header">Class</th>
            <th className="cls_header">Total Marks</th>
            <th className="cls_header">Obtained Marks</th>
            <th className="cls_header">Percentage</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="cls_data">Class 10</td>
            <td className="cls_data">{data.Total_10}</td>
            <td className="cls_data">{data.Get_10}</td>
            <td className="cls_data">{data.Percent_10}%</td>
          </tr>
          <tr>
            <td className="cls_data">Class 12</td>
            <td className="cls_data">{data.Total_12}</td>
            <td className="cls_data">{data.Get_12}</td>
            <td className="cls_data">{data.Percent_12}%</td>
          </tr>
          <tr>
            <td className="cls_data">B.Tech</td>
            <td className="cls_data">{data.Total_btech}</td>
            <td className="cls_data">{data.Get_btech}</td>
            <td className="cls_data">{data.Percent_btech}%</td>
          </tr>
        </tbody>
      </table>
      <h2 className="cls_skills_h">Languages</h2>
      {Array.isArray(data.languages) && 
      data.languages.map((language: string, index: number) => (
        <li key={index} className="cls_skills_item">{language}</li>
      ))
      }

      {/* Skills */}
      <h2 className="cls_skills_h">Skills</h2>
      <ul className="cls_skills">
        {data.skills?.map((skill:string, index:number) => (
          <li key={index} className="cls_skills_item">{skill}</li>
        ))}
      </ul>

      {/* Projects */}
      <h2 className="cls_proj_h">Projects</h2>
      <ul className="cls_projs">
        {data.projects?.map((project:string, index:number) => (
          <li key={index}>
            <strong className="cls_proj">{project}</strong>
            <p className="cls_proj_dsc">{data.projectDescriptions?.[index]}</p>
          </li>
        ))}
      </ul>
      <h2 className="cls_summ_h">EXPERIENCE</h2>
     <h3>{data.role}  - {data.experience}</h3>
     <h3 className="cls_summ">{data.experiencedescription}</h3>

    </div>
  );
}