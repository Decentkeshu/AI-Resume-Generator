"use client"
import { useRouter } from "next/navigation";
import { useState,useEffect } from "react";
import Defaulttemplate from "../components/templates/defaulttemplate";
import { useSearchParams } from "next/navigation";
export default  function Builder(){
    const searchParams = useSearchParams();
    const isEdit = searchParams.get("edit") === "true";
    const router = useRouter()
    const[skills,setskills] = useState([""]);
    const[projects,setprojects] = useState([""]);
    const[summary,setsummary] = useState("");
    const[loading,setloading] = useState(false);
    const[projectdispcription,setprojectdiscription] = useState([""]);
    const[loadingproject,setloadingproject] = useState<boolean[]>([]);
    const[imageData,setImageData] = useState(null);
    const[template,settemplate] = useState("default");
    const[languages,setlanguages] = useState([""]);
    const[experience,setexperience] = useState("");
    const[role,setrole] = useState("");
    const[experiencedescription,setexperiencedescription] = useState("");
    const[loadingrole,setloadingrole] = useState(false);
    const[name,setname] = useState("");
    const[profession,setprofession] = useState("");
    const[email,setemail] = useState("");
    const[phoneNo,setphoneNo] = useState("");
    const[address,setaddress] = useState("");
    const[total10,settotal10] = useState();
    const[get10,setget10] = useState();
    const[total12,settotal12] = useState();
    const[get12,setget12] = useState();
    const[totalbtech,settotalbtech] = useState();
    const[getbtech,setgetbtech] = useState();

    useEffect(() => {
    if(!isEdit) return;
  const storedData = localStorage.getItem("userData");
  if (storedData) {
    const parsed = JSON.parse(storedData);

    setname(parsed.Name || "");
    setprofession(parsed.Profession || "");
    setemail(parsed.Email || "");
    setphoneNo(parsed.Phone || "");
    setaddress(parsed.Add || "");

    settotal10(parsed.Total_10 || "");
    setget10(parsed.Get_10 || "");
    settotal12(parsed.Total_12 || "");
    setget12(parsed.Get_12 || "");
    settotalbtech(parsed.Total_btech || "");
    setgetbtech(parsed.Get_btech || "");

    setskills(parsed.skills || [""]);
    setprojects(parsed.projects || [""]);
    setlanguages(parsed.languages || [""]);
    setsummary(parsed.summary || "");
    setexperience(parsed.experience || "");
    setrole(parsed.role || "");
    setexperiencedescription(parsed.experiencedescription || "");
    setprojectdiscription(parsed.projectDescriptions || [""]);
    setImageData(parsed.imageData || null);
    settemplate(parsed.template || "default");
  }
}, []);

    const generateprojectdiscription = async (index:number) =>{
            const projectName = projects[index];
            if (!projectName.trim()) return alert("Enter a project name first!");

            setloadingproject((prev)=>{
                const updated = [...prev];
                updated[index] = true;
                return updated;
            });
            const res = await fetch("/api/project",{
                method:"POST",
                headers : {"Content-Type":"application/json"},
                body:JSON.stringify({
                    projectName,
                    skills:skills.join(", "),
                })
            })
            const data = await res.json();
             setprojectdiscription((prev) => {
    const updated = [...prev];
    updated[index] = data.description;
    return updated;
  });
     setloadingproject((prev) => {
    const updated = [...prev];
    updated[index] = false;
    return updated;
  });

    }
    
    const explainRole = async() =>{
      if(!role || !experience){
        alert("Enter role and experience first");
        return;
      }
      setloadingrole(true);
      const res = await fetch("/api/role",{
        method : "POST",
        headers:{
          "Content-Type":"application/json",
        },
        body:JSON.stringify({
          role,
          experience
        }),
      });
      const data = await res.json();
      setexperiencedescription(data.description);
      setloadingrole(false);

    }


    const generatesummary = async()=>{
        setloading(true);
        const name = document.querySelector('[name="user_name"]').value;
        const profession = document.querySelector('[name="user_profession"]').value;
        const skilltext = skills.join(", ");
        const projecttext = projects.join(", ");


        const res = await fetch("/api/summary",{
            method:"POST",
            headers : {
                "Content-Type":"application/json",
            },
            body:JSON.stringify({
                name,
                profession,
                skills: skilltext,
                projects:projecttext,
            }),
        });
        const data = await res.json();
        console.log("API response :",data);
        setsummary(data.summary);
        setloading(false);
        // setLoading(false);

    //     <button type="button" onClick={generatesummary}>
    //     {loading ? "Generating...":"Generate AI summary"}
    // </button>
    };
    

    const addskills = ()=>{
        setskills([...skills,""]);
    }
    
    const updateskills = (index,value)=>{
        const newskills = [...skills];
        newskills[index] = value;
        setskills(newskills);
    }

    const addlanguages = ()=>{
      setlanguages([...languages,""]);
    }

    const updatelanguage = (index,value)=>{
      const newlanguage = [...languages];
      newlanguage[index] = value;
      setlanguages(newlanguage);
    }
    const addProjects = ()=>{
        setprojects([...projects,""]);
    }
    const updateProjects = (index,value)=>{
        const newProjects = [...projects];
        newProjects[index] = value;
        setprojects(newProjects);
    }
    const handleprofilepic = (event)=>{
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = ()=>{
          const base64Data = reader.result.split(",")[1];
          setImageData({data:base64Data,mediaType:file.type})
        };
        reader.readAsDataURL(file);
    }
    const deleteskill = (index)=>{
         const updated = skills.filter((_, i) => i !== index);
         setskills(updated)

    }
    const deleteproject = (index)=> {
      const updated = projects.filter((_, i) => i !== index);
      setprojects(updated);
    }
    const deletelanguage = (index)=>{
      const updated = languages.filter((_, i) => i !== index);
      setlanguages(updated);
    }
    // const[]
    const handlesubmit = async (event)=>{
        event.preventDefault();
     const Name = name; 
     const Profession = profession;
     const Email = email;
     const Add = address;
     const Phone = phoneNo;
     const Total_10 = total10;
     const Get_10 = get10;
     const Percent_10 = (Get_10/Total_10)*100;
     const Total_12 = total12;
     const Get_12 = get12;
     const Percent_12 = (Get_12/Total_12)*100;
     const Get_btech = getbtech;
     const Total_btech = totalbtech;
     const Percent_btech = (Get_btech/Total_btech)*100;
    //  const summary_manual = event.target.user_text.value;
     const finalsummary = summary;

    //  console.log(`name is ${total_10} and profession is ${get_10}`)
    // const skills = event.target.user_skills.value;
    // const projects = event.target.user_projects.value;

    const userData = {
    Name,
    Profession,
    Email,
    Add,
    Phone,
    Percent_10,
    Percent_12,
    Percent_btech,
    // summary_manual,
    Get_10,
    Get_12,
    Get_btech,
    Total_10,
    Total_12,
    Total_btech,
    skills,
    projects,
    summary:finalsummary,
    projectDescriptions: projectdispcription,
    imageData,
    template,
    languages,
    experience,
    role,
    experiencedescription,
  
  };

 localStorage.setItem("userData", JSON.stringify(userData));
// await fetch("/api/resume", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify(userData),
// });

  router.push("/result");
    //   router.push(`/result?name=${name}&profession=${profession}&email=${email}&add=${add}&phone=${phone}&percent_10=${percent_10}&percent_12=${percent_12}&total_10=${total_10}&get_10=${get_10}&total_12=${total_12}&get_12=${get_12}&get_btech=${get_btech}&total_btech=${total_btech}&percent_btech=${percent_btech}`)
    }

   
    return<> 
    <form onSubmit={handlesubmit} className="form" >  
    <label>Name:</label>
    <input name="user_name" type="text"  value= {name} placeholder="Enter your name" className="name" onChange={(e)=>setname(e.target.value)}></input>
    <label >Profession:</label>
    <input name="user_profession" type="text" placeholder="Enter your profession" value= {profession} className="profession" onChange={(e)=>setprofession(e.target.value)}></input>
    <label >Email:</label>
    <input name = "user_email" type="email" placeholder="Enter your email" value={email} className="email" onChange={(e)=>setemail(e.target.value)}></input>
    <br/>
    <label>Profie Pic:</label>
    <input type="file" name="user_profile" accept="image/*" onChange={handleprofilepic}></input>
    <label > ADD:</label>
    <input name="user_add" type="text" placeholder="Enter your address" value={address} className="address" onChange={(e)=>setaddress(e.target.value)}></input>
    <label>Phone:</label>
    <input name="user_phone" type="number" placeholder="Enter your number" value={phoneNo} className="phone_no" onChange={(e)=>setphoneNo(e.target.value)}></input>
    {/* <button type="submit">submit</button> */}
    <br/>

    <label>10 Total marks:</label>
    <input name="user_total_10" type="number" placeholder="Enter total marks" value={total10} className="total_marks_10" onChange={(e)=>settotal10(e.target.value === "" ? "" : Number(e.target.value))}></input>
    <label>10 Obtained marks:</label>
    <input name="user_get_10" type="number" placeholder="Enter your marks" value={get10} className="get_marks_10" onChange={(e)=>setget10(e.target.value === "" ? "" : Number(e.target.value))}></input>
    <br/>
    <label>12 Total marks:</label>
    <input name="user_total_12" type="number" placeholder="Enter total marks" value={total12} className="total_marks_12" onChange={(e)=>settotal12(e.target.value === "" ? "" : Number(e.target.value))}></input>
    <label>12 Obtained marks:</label>
    <input name="user_get_12" type="number" placeholder="Enter your marks" value={get12} className="get_marks_12" onChange={(e)=>setget12(e.target.value === "" ? "" : Number(e.target.value))}></input>
    <br/>
    <label>Btech Total:</label>
    <input name="user_total_btech" type="number" placeholder="Enter total marks" value={totalbtech} className="total_marks_btech" onChange={(e)=>settotalbtech(e.target.value === "" ? "" : Number(e.target.value))}></input>
    <label>Btech Obtained:</label>
    <input name="user_get_btech" type="number" placeholder="Enter your marks" value={getbtech} className="get_marks_btech" onChange={(e)=>setgetbtech(e.target.value === "" ? "" : Number(e.target.value))}></input>
    <br/>
    {/* <label>Summary:</label>
    <textarea name="user_text" placeholder="Enter your career summary" className="text_are"></textarea> */}
    <br/>
    <label>Languages:</label>
    {languages.map((language,index)=>(
    <div key={index}> 
      <input 
      type="text" name="user_lang" value={language} placeholder="Enter Language:"
      onChange={(event)=>updatelanguage(index,event.target.value)}
      />
      <button type="button" onClick={(e)=>deletelanguage(index)}>Delete</button>
       </div>
    ))}
    <button type="button" onClick={addlanguages}>Add Languages:</button>
    
    <label>Skills:</label>

{skills.map((skill, index) => (
  <div  key={index}> 
  <input 
   
    type="text"
    name="user_skills"
    value={skill}
    placeholder="Enter skills"
    onChange={(e) => updateskills(index, e.target.value)}
   
  />
   <button type="button" onClick={()=>deleteskill(index)}>Delete</button>
   </div>
))}

<button type="button" onClick={addskills}>
  Add Skill
</button>
    <br/>
    <label>Projects:</label>
{projects.map((project, index) => (
  <div key={index} className="project-block">
    <input
      type="text"
      name="user_projects"
      placeholder="Enter project name"
      value={project}
      onChange={(e) => updateProjects(index, e.target.value)}
    />

    <button type="button" onClick={(e)=> deleteproject(index)}>Delete</button>
    {/* 👇 These must be INSIDE the map */}
    <button
      type="button"
      onClick={() => generateprojectdiscription(index)}
      disabled={loadingproject[index]}
    >
      {loadingproject[index] ? "Generating..." : "Generate Description"}
    </button>
    <textarea
      placeholder="AI generated description will appear here"
      value={projectdispcription[index] || ""}
      onChange={(e) => {
        const updated = [...projectdispcription];
        updated[index] = e.target.value;
        setprojectdiscription(updated);
      }}
    />
  </div>  
))}

<button type="button" onClick={addProjects}>Add Project</button>
    <br/>


  <label>Experience</label>
  <input type="text" name="user_exp" placeholder="Enter your experience" className="experience" value={experience}  onChange={(e) => setexperience(e.target.value)}></input>
  <label>Role</label>
  <input type="text" name="user_exp_role" placeholder="Enter your role" className="exp_role" value={role} onChange={(e)=>setrole(e.target.value)}></input>
  {/* <label>AI Explain Role</label> */}
  <button type="button" onClick={explainRole}>{loadingrole ? "Generating...":"AI Explain Role"}</button>
  <textarea name="user_experience" className="user_experience" value={experiencedescription} onChange={(e)=>setexperiencedescription(e.target.value)}></textarea>


  <label>AI summary</label>
    <textarea name="ai_summ" placeholder="Generate AI summary" className="AI_summ" value={summary} onChange={(e)=>setsummary(e.target.value)}>
     </textarea>    
    <button type="button" onClick={generatesummary}>Generate AI summ</button>
   <label>Select Resume Template</label>
   <select onChange={(e) => settemplate(e.target.value)}>
  <option value="default">Default</option>
  <option value="ats">ATS Friendly</option>
  <option value="classic">Classic</option>
  <option value="modern">Modern</option>
   </select>

    <button type="submit">submit</button>

    {/* </div> */}
 </form>
    </>
}
