import { useState } from "react";

function Form(){
let [form,setForm]=useState({userName:"",password:""});

function formChange(event){
    // let fieldName=event.target.name;
    // let fieldValue=event.target.value;
    setForm((preForm)=>{return{...preForm,[event.target.name]:event.target.value}});   
}
console.log(form);
    return(
        <>
        <form action="">
            <label htmlFor="userName">Enter username :</label>
            <input type="text" id="userName" value={form.userName} name="userName" onChange={formChange} />
            <br />
            <label htmlFor="password">Password :</label>
            <input type="text" id="password" value={form.password} name="password" onChange={formChange} />
        </form>
        </>
    )
}

export default Form;