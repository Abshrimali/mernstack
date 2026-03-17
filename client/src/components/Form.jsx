import React, { useState } from 'react'
import axios from "axios";

const Form = () => {

  const [name,setName] = useState("")
  const [age,setAge] = useState("")

  const createUser = (e)=>{
      e.preventDefault();
      axios.post("http://localhost:5000/createUser",{name ,age})
      .then((res) => alert("user crated"))
      .catch((error) => console.log("Error:", error.message))

      setAge("");
      setName("");
  }

  return (
    <div>
      <form onSubmit={createUser}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
        <input type="number" value={age} onChange={(e) => setAge(e.target.value)}/>
        <button>submit</button>
      </form>
    </div>
  );
}

export default Form
