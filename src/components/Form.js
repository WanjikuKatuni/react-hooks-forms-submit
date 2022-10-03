import React, { useState } from "react";

function Form() {
  const [firstName, setFirstName] = useState("Sylvia");
  const [lastName, setLastName] = useState("Woods");
  const [submittedData, setSubmittedData] = useState([])
  // ad state that holds error messages
  const [errors, setErrors] = useState([])

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  // function handleSubmit(event){
  //   // prevent default form behavior of submiting and refreshing the page
  //   event.preventDefault();
  //   // putting form data inot an object using values stored in state
  //   const formData = {
  //     firstName: firstName,
  //     lastName: lastName,
  //   }
  //   const dataArray= [...submittedData, formData]
  //   setSubmittedData(dataArray)
  //   // send the data fof somewhere
  //   // props.sendFormDataSomewhere(formData);

  //   //clear inputs after submission
  //   setFirstName("");
  //   setLastName("")
  // }
  function handleSubmit(event){
    event.preventDefault();
    // first name required
    if(firstName.length > 0){
      const formData = {firstName:firstName, lastName:lastName};
      const dataArray = [...submittedData, formData];
      setSubmittedData(dataArray);
      setLastName("")
      setFirstName("")
      setErrors([]);
      }
      else{
        setErrors(["First name required"])
      }
  }

  const listOfSubmissions = submittedData.map((data, index)=>{
    return (
      <div key={index}>
        {data.firstName} {data.lastName}
      </div>
    )
  })

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleFirstNameChange} value={firstName} />
        <input type="text" onChange={handleLastNameChange} value={lastName} />
        <button type="submit">Submit</button>
      </form>
      {/* conditional error messages */}
      {errors.length > 0 ? errors.map((error, index)=> (<p key={index} style={{color:"red"}}>{error}</p>)): null}
      <h3>Submissions</h3>
      {listOfSubmissions}
    </div>
  );
}

export default Form;
