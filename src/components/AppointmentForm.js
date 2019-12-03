import React from "react"




export default function AppointmentForm(props) {
    
    return <form onSubmit={(e) => {
        e.preventDefault(e);
        props.postAppointment();
      }}>
        <div>Name: <input name="name" value={props.name} onChange={(e) => props.changeHandler(e.target.name, e.target.value)}/></div>
        <div>Contact: <input name="contact" value={props.contact}  onChange={(e) => props.changeHandler(e.target.name, e.target.value)}/></div>
        <div>Appt Date: <input name="apptDate" value={props.apptDate} type="date" onChange={(e) => props.changeHandler(e.target.name, e.target.value)}/></div>
        <div>Appt Time: <input name="apptTime"  value={props.apptTime} type="time" onChange={(e) => props.changeHandler(e.target.name, e.target.value)}/></div>
        <div>Style: <input name="style" onChange={(e) => props.changeHandler(e.target.name, e.target.value)}/></div>
        <button>Submit</button>
      </form>
}