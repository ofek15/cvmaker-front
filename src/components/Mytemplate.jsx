import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import './Mytemplate.css';
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
function Mytemplate(){

   const token = JSON.parse(localStorage.getItem("Token"));
   // console.log(token);
 
   const [oneinfo, setOneinfo] = useState({});
 
   useEffect(() => {
     axios
       .post("http://localhost:5000/info/fetchInfo", { token: token })
       .then(({ data }) => setOneinfo(data.info))
       .catch((err) => console.log(err.message));
   }, []);
   

   const downloadPDf = (temp) => {
      const input = document.getElementById(temp)
      console.log(input);
      console.log(input.offsetWidth)
      const pxWidth = input.offsetWidth
      const pxHeight = input.offsetHeight
  
      html2canvas(input, {
          width: pxWidth,
          height: pxHeight,
          scale: 1.8,
          useCORS: true,
          allowTaint:true
      })
      .then((canvas) => {
          const imgData = canvas.toDataURL("image/png");
          console.log(imgData, "imgdata")
          const pdf = new jsPDF('portrait', 'px', [pxWidth, pxHeight]);
          pdf.addImage(imgData, 'PNG', 0, 0);
          pdf.save("my-resume.pdf")
      })
  }

   return(
    <div id='template-container'>
      <h1>This are all the templates</h1>

      <h3 className="title">Basic template</h3> 
      <div id='temp2'>
         <br/><br/><br/>
         <div id='name-temp2'>{oneinfo.name}</div>
         <div id='detailes-temp2'>
            <div id="phone-temp2">Phone number: {oneinfo.phone}</div>
            <div>||</div>
            <div id="phone-temp2">Email: {oneinfo.email}</div>
            <div>||</div>
            <div id='address-temp2'>Address: {oneinfo.address}</div>
         </div>
         <div id="freewords-temp2">
            <div id="freewords-inner-temp2">
               <div className="inner-title-temp2">About:</div>
               <div>{oneinfo.freewords}</div>
            </div>
         </div>
         <div id='skills-temp2'>
            <div id='skills-temp2-inner'>
            <div className="inner-title-temp2">Skills:</div>
            <div className="ul-temp2">
             {oneinfo.skills?.map((item, index) => (
               <div key={index}>{item.skill1}</div>
               ))}
            </div>
            </div>
         </div>
         <div id='education-temp2'>
         <div id='education-temp2-inner'>
            <div className="inner-title-temp2">education:</div>
            <div className="ul-temp2">
             {oneinfo.education?.map((item, index) => (
               <div key={index}>{item.startyear} - {item.endyear}: {item.degree} at {item.institution}</div>
               ))}
            </div>
            </div>
         </div>
         <div id='expirience-temp2'>
         <div id='expirience-temp2-inner'>
            <div className="inner-title-temp2">Expirience:</div>
            <div className="ul-temp2">
             {oneinfo.experience?.map((item, index) => (
               <div key={index}>{item.startyear} - {item.endyear}: {item.title} at {item.company}</div>
               ))}
            </div>
            </div>
         </div>
         <div id='language-temp2'>
         <div id='language-temp2-inner'>
            <div className="inner-title-temp2">Languages:</div>
            <div id="ul-lang-temp2" >
             {oneinfo.languages?.map((item, index) => (
               <div key={index}>{item.lang} - {item.level},</div>
               ))}
            </div>
            </div>
         </div>
         <div id='hobbies-temp2'>
            <div id="hobbies-inner-temp2">
               <div className="inner-title-temp2">hobbies:</div>
               <div>{oneinfo.hobbies}</div>
            </div>
         </div>
      </div>
      <button className="template-button" onClick={()=>downloadPDf('temp2')}>convert basic template to pdf</button> 

     <h3 className="title">Modern template</h3>
      <div id='temp1'>
         <div id='leftside-temp1'>
            <div id='imgdiv-temp1'>
               <div id='inner-div-img'><img id="img1" src={oneinfo.userImg}></img></div>
            </div>
            <div id='basicinfo-temp1'>
              <div id='basicinfo-temp1-inner'>
              <div className="inner-title bottomline-css">Basic info:</div>
               <div>Name: {oneinfo.name}</div>
               <div>Email: {oneinfo.email}</div>
               <div>Phone: {oneinfo.phone}</div>
               <div>Address: {oneinfo.address}</div>
              </div>  
            </div>
            <div id='lang-temp1'>
             <div id='lang-temp1-inner'>
               <div className="inner-title bottomline-css">Languages:</div>
               {oneinfo.languages?.map((element,index)=>{
                  return(
                     <div>{element.lang}, level:{element.level}</div>
                  )
               })}
             </div>
            </div>
            <div id='hobbies-temp1'>
               <div id='hobbies-temp1-inner'>
                  <div className="inner-title bottomline-css">Hobbies:</div>
                  <div>{oneinfo.hobbies}</div>
               </div>
            </div>
         </div>
         <div id='rightside-temp1'>
            <br></br><br></br><br></br>
            <div id='name-temp1'>
               <div id='name-temp1-inner'>{oneinfo.name}</div>
            </div>
            <div id='freewords-temp1'>
               <div id='freewords-temp1-inner'>{oneinfo.freewords}</div>
            </div>
            <div id='skills-temp1'>
               <div id='skills-temp1-inner'>
               <div className="inner-title bottomline-css">Skills:</div>
               {oneinfo.skills?.map((element,index)=>{
                  return(
                     <div>{element.skill1}</div>
                  )
               })}
               </div>
            </div>
            <div id='education-temp1'>
               <div id='education-temp1-inner'>
               <div className="inner-title bottomline-css">Education:</div>
               {oneinfo.education?.map((element,index)=>{
                  return(
                     <div>{element.startyear} - {element.endyear}: {element.degree} at {element.institution}</div>
                  )
               })}
               </div>
            </div>
            <div id='experience-temp1'>
            <div id='experience-temp1-inner'>
               <div className="inner-title bottomline-css">Experience:</div>
               {oneinfo.experience?.map((element,index)=>{
                  return(
                     <div>{element.startyear} - {element.endyear}: {element.title} at {element.company}</div>
                  )
               })}
               </div>
            </div>
         </div>
      </div>
      <button className="template-button" onClick={()=>alert("This template is not free")}>convert modern template to pdf</button> 


      
      <h3 className="title">New template</h3>
      <div id='temp3'>
         <div id='top-temp3'>
            <div id="leftside-top-temp3">
            <div id='imgdiv-temp3'>
               <div id='inner-div-img3'><img id="img3" src={oneinfo.userImg}></img></div>
            </div>
            </div>
            <div id="rightside-top-temp3">
               <div id='name-temp3'>{oneinfo.name}</div>
               <div id='h-temp3'>looking for the next job...</div>
               <div id='freewords-temp3'>{oneinfo.freewords}</div>
            </div>
         </div>
         <div id='middle-temp3'>
            <div id='left-middle-temp3'>
               <div id='left-middle-temp3-contact'>
                 <div className="temp3-title">Contact:</div>
                 <div className="temp3-inner1">{oneinfo.email}</div>
                 <div className="temp3-inner1">{oneinfo.phone}</div>
                 <div className="temp3-inner1">{oneinfo.address}</div>
               </div>
               <div id='left-middle-temp3-skill'>
                 <div className="temp3-title">Skills:</div>
                 {oneinfo.skills?.map((element,index)=>{
                  return(
                     <div className="temp3-inner1">{element.skill1}</div>
                  )
               })}
               </div>
               <div id='left-middle-temp3-languages'>
               <div className="temp3-title">Languages:</div>
                <div id='lang-inner' >
                  {oneinfo.languages?.map((element,index)=>{
                  return(
                     <span>{element.lang}, level:{element.level}</span>
                  )
                  })}
                </div>
               </div>
            </div>
            <div id='right-middle-temp3'>
               <div id='right-middle-temp3-experience'>
                 <div className="temp3-title">Experience:</div>
                 {oneinfo.experience?.map((element,index)=>{
                  return(
                     <div className="temp3-inner1">{element.startyear} - {element.endyear}: {element.title} at {element.company}</div>
                  )
                 })}
               </div>
               <div id='right-middle-temp3-education'>
                  <div className="temp3-title">Education:</div>
                  {oneinfo.education?.map((element,index)=>{
                  return(
                     <div className="temp3-inner1">{element.startyear} - {element.endyear}: {element.degree} at {element.institution}</div>
                  )
                  })}
               </div>
               <div id='right-middle-temp3-hobbies'>
                 <div className="temp3-title">Hobbies:</div>
                 <div id='hobbies-inner'>{oneinfo.hobbies}</div>
               </div>
            </div>
         </div>
         <div id='bottom-temp3'></div>
      </div>
      <button className="template-button" onClick={()=>alert("This template is not free")}>convert new template to pdf</button>
      
    </div>
   )
}
export default Mytemplate;