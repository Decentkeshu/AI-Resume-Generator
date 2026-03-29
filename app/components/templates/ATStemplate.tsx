"use client";

type Props = {
  data: any;
};

export default function ATSTemplate({ data }: Props) {
  return (
    <div className="ats_container">
      
      {/* Name */}
      <h1 className="ats_name">{data.Name}</h1>
      <p className="ats_email">{data.Email} | {data.Phone}</p>
      <p className="ats_add">{data.Add}</p>

      {/* Summary */}
      <h2 className="ats_summ_h">Professional Summary</h2>
      <p className="ats_summ">{data.summary}</p>
      
      <h2 className="ats_skills_h">Languages</h2>
      {Array.isArray(data.languages) && 
      data.languages.map((language,index)=>(
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

    </div>
  );
}