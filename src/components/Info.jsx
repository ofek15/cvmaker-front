import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import "./Info.css";

import { useForm, useFieldArray } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

function Info() {
  const token = JSON.parse(localStorage.getItem("Token"));

  const [oneuser, setOneuser] = useState({});

  useEffect(() => {
    axios
      .post("http://localhost:5000/info/fetchInfo", { token: token })
      .then(({ data }) => setOneuser(data))
      .catch((err) => console.log(err.message));
  }, []);


  useEffect(() => {
    reset(oneuser.info);
  }, [oneuser]);

  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      education: [
        {
          startyear: "",
          endyear: "",
          degree: "",
          institution: "",
        },
      ],
      experience: [
        {
          startyear: "",
          endyear: "",
          company: "",
          title: "",
        },
      ],
      skills: [{ skill1: "" }],
      languages: [
        {
          lang: "",
          level: "",
        },
      ],
      hobbies: "",
      free: "",
    },
  });

  const { register, control, handleSubmit, formState, setValue, reset } = form;
  const { errors } = formState;

  const {fields: educationFields,append: appendEducation,remove: removeEducation,} = useFieldArray({
    name: "education",
    control,
  });

  const {fields: experienceFields,append: appendexperience,remove: removeexperience,} = useFieldArray({
    name: "experience",
    control,
  });

  const {fields: skillsFields,append: appendskills,remove: removeskills,
  } = useFieldArray({
    name: "skills",
    control,
  });

  const {fields: languagesFields,append: appendlanguages,remove: removelanguages,
  } = useFieldArray({
    name: "languages",
    control,
  });

  const onSubmit = (data) => {
    console.log("form submit!!!!!", data);
    data.token = token;
    console.log(data, "!!!!!!!!!!!!");
    axios
      .patch("http://localhost:5000/info/publishInfo", data)
      .then(({ data }) => console.log("sent"))
      .catch((err) => console.log(err));
  };

  return (
    <div id='big1'>
    <div className="info-container">
      <form className="info-form" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="info-heading">Fill your cv information</h2>

        <div className="all-div-of-label">

        <div className="solo-info-container">
        <label className="info-label" htmlFor="name">Name</label>
        <input className="info-input" type="text" id="name"{...register("name", { required: "name is required" })}></input>
        <p className="info-error">{errors.name?.message}</p>
        </div>
         

        <div className="solo-info-container">
        <label className="info-label" htmlFor="email">Email</label>
        <input className="info-input"  type="text" id="email" {...register("email", {
            required: "email is required",
            pattern: {
              value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/, //i need to add that empty is also not good
              message: "Invalid email format",
            },
            validate: (fieldValue) => {
              return ( 
                fieldValue !== "admin@example.com" ||
                "enter a different email address"
              );
            },
          })}
        ></input>
        <p className="info-error">{errors.email?.message}</p>
        </div>
       

        <div className="solo-info-container">
        <label className="info-label" htmlFor="userImg">Img url</label>
        <input className="info-input" type="text" id="userImg" {...register("userImg", { required: "userImg is required" })}></input>
        <p className="info-error">{errors.userImg?.message}</p>
        </div>


        <div className="solo-info-container">
        <label className="info-label" htmlFor="phone">Phone</label>
        <input className="info-input" type="text" id="phone" {...register("phone", { required: "phone is required" })}></input>
        <p className="info-error">{errors.phone?.message}</p>
        </div>


        <div className="solo-info-container">
        <label className="info-label" htmlFor="address">Address</label>
        <input className="info-input" type="text" id="address"{...register("address", { required: "address is required" })}></input>
        <p className="info-error">{errors.address?.message}</p>
        </div>


        <div className="solo-info-container">
        <label className="info-label" htmlFor="education">Education</label>
        <div>
          {educationFields.map((field, index) => {
            return (
              <div key={field.index}>
                <input className="info-input" type="text"placeholder="enter start year..."{...register(`education.${index}.startyear`, {required: "startyear is required",})}/>
                <input className="info-input" type="text" placeholder="enter end year..."{...register(`education.${index}.endyear`, {required: "endyear is required",})}/>
                <input className="info-input" type="text" placeholder="enter your degree..."{...register(`education.${index}.degree`, {required: "degree is required",})}/>
                <input className="info-input" type="text"placeholder="enter the institution's name..." {...register(`education.${index}.institution`, {required: "institution is required",})}/>
                {index > 0 && (
                  <button className="info-button" type="button" onClick={() => removeEducation(index)}>remove education</button>
                )}
                <p className="info-error">{errors.education?.[index]?.startyear?.message}</p>
                <p className="info-error">{errors.education?.[index]?.endyear?.message}</p>
                <p className="info-error">{errors.education?.[index]?.degree?.message}</p>
                <p className="info-error">{errors.education?.[index]?.institution?.message}</p>
              </div>
              
            );
          })}
          <button className="info-button" type="button" onClick={() =>educationFields.length < 5 &&appendEducation({startyear: "",endyear: "",degree: "",institution: "",})}>add education</button>
        </div>
        </div>


        <div className="solo-info-container">
        <label className="info-label" htmlFor="experience">Experience</label>
        <div>
          {experienceFields.map((field, index) => {
            return (
              <div key={field.index}>
                <input className="info-input" type="text" placeholder="enter start year..."{...register(`experience.${index}.startyear`, {required: "startyear is required",})}/>
                <input className="info-input" type="text" placeholder="enter end year..."{...register(`experience.${index}.endyear`, {required: "endyear is required",})}/>
                <input className="info-input" type="text" placeholder="enter company name..."{...register(`experience.${index}.company`, {required: "company name is required",})}/>
                <input className="info-input" type="text"placeholder="enter your title..."{...register(`experience.${index}.title`, {required: "title in the job is required",})}/>
                {index > 0 && (
                  <button className="info-button" type="button" onClick={() => removeexperience(index)}>remove experience</button>
                )}
                <p>{errors.experience?.[index]?.startyear?.message}</p>
          <p className="info-error">{errors.experience?.[index]?.endyear?.message}</p>
          <p className="info-error">{errors.experience?.[index]?.company?.message}</p>
          <p className="info-error">{errors.experience?.[index]?.title?.message}</p>
              </div>
            );
          })}
          <button className="info-button" type="button"onClick={() => {experienceFields.length < 5 &&appendexperience({startyear: "",endyear: "",degree: "",institution: "",});}}>add experience</button>         
        </div>
        </div>


        <div className="solo-info-container">
        <label className="info-label" htmlFor="skills">Skills</label>
        <div>
          {skillsFields.map((field, index) => {
            return (
              <div key={field.index}>
                <input className="info-input" type="text"{...register(`skills.${index}.skill1`, {required: "skills are required",})}/>
                {index > 0 && (
                  <button className="info-button" type="button" onClick={() => removeskills(index)}>remove skill</button>
                )}
                <p className="info-error">{errors.skills?.[index]?.skill1?.message}</p>
              </div>
            );
          })}
          <button className="info-button" type="button" onClick={() =>skillsFields.length < 5 && appendskills({ skill1: "" })}>add skill </button> 
        </div>
        </div>


        <div className="solo-info-container">
        <label className="info-label" htmlFor="languages">Languages</label>
        <div>
          {languagesFields.map((field, index) => {
            return (
              <div key={field.index}>
                <input className="info-input" type="text" placeholder="enter language name... "{...register(`languages.${index}.lang`, {required: "language is required",})}/>
                
                <input className="info-input" type="text" placeholder="enter yor level..."{...register(`languages.${index}.level`, {required: "level of language is required",})}/>
                {index > 0 && (
                  <button className="info-button" type="button" onClick={() => removelanguages(index)}>remove language</button>
                )}

              <p className="info-error">{errors.languages?.[index]?.lang?.message}</p>
              <p className="info-error">{errors.languages?.[index]?.level?.message}</p>
              </div>
              
            );
          })}
          <button className="info-button" type="button"onClick={() =>languagesFields.length < 5 && appendlanguages({ lang: "", level: "" })}>add language</button>
        </div>
        <p className="info-error">{errors.languages?.lang?.message}</p>
        </div>

        <div className="solo-info-container">
        <label className="info-label" htmlFor="hobbies">Hobbies</label>
        <input className="info-input" type="text" id="hobbies" {...register("hobbies", { required: "hobbies are required" })}></input>
        <p className="info-error">{errors.hobbies?.message}</p>
        </div>

        <div className="solo-info-container">
        <label className="info-label" htmlFor="freewords">Freewords text</label>
        <input className="info-input" type="text" id="freewords" {...register("freewords", {required: "freewords are required",
          minLength: { value: 700, message: "Field must contain at least 700 characters." },
          maxLength: { value: 800, message: "Field cannot exceed more than 800 words." }
          })}
        />

        <p className="info-error">{errors.freewords?.message}</p>
        </div>

        <button className="info-button" id="submit-css">Submit</button>

        </div>

      </form>
      <DevTool control={control}></DevTool>
    </div>
    </div>
  );
}

export default Info;
