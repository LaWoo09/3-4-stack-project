import React from 'react';
import axios from "axios"
import AppointmentForm from "./components/AppointmentForm"
import Header from "./components/Header"
import './App.css';
import  './main.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      appointments: [],
      name: "", 
      contact: "", 
      apptDate: "", 
      apptTime: "", 
      style: ""
    };
    this.getAllAppointments = this.getAllAppointments.bind(this)
    this.postAppointment = this.postAppointment.bind(this)
    this.changeHandler = this.changeHandler.bind(this)
  }

  componentDidMount() {
    this.getAllAppointments();
  };


  getAllAppointments() {
    axios.get("/api/appointments").then(res => {
      this.setState({
        appointments: res.data
      })
    })
  };


  postAppointment() {
    const { name, contact, apptDate, apptTime, style} = this.state;
    axios.post("/api/appointments", { name, contact, apptDate, apptTime, style}).then(res => {
      this.setState({
        appointments: res.data,
        name: "", 
        contact: "", 
        apptDate: "", 
        apptTime: "", 
        style: ""
      });
    });
  };


updateAppointment(id) {
  const { apptDate, apptTime, style } = this.state
  axios.put(`api/appointment/${id}`, { apptDate, apptTime, style}).then(res => {
    this.setState({
        appointments: res.data,
        apptDate: "",
        apptTime: "",
        style: ""
    })
  })
}


  deleteAppointment(id) {
    axios.delete(`/api/appointment/${id}`).then(res => {
      this.setState({
        appointments: res.data
      })
    })
  };


  changeHandler(key, value) {
    this.setState({
      [key]: value
    })
  };




  render() {
    const { appointments, name, contact, apptDate, apptTime, style } = this.state
    const mappedAppts = appointments.map(appt => {
      return <div key={appt.id} className="appt-card">
        <div>Name: {appt.name}</div>
        <div>Contact: {appt.contact}</div>
        <div>Appt. Date: {appt.apptDate}</div>
        <div>Appt. Time {appt.apptTime}</div>
        <div>Style: {appt.style}</div>
        <button  type="button" className="btn btn-primary" data-toggle="modal" data-target={`#${appt.id}`}>
  Edit
</button>


<div className="modal fade" id={appt.id} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">EDIT APPOINTMENT</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
       <div> Appt. Date<input name="apptDate"   type="date" onChange={(e) => this.changeHandler(e.target.name, e.target.value)}/></div>
       <div>Appt. Time<input name="apptTime"   type="time" onChange={(e) => this.changeHandler(e.target.name, e.target.value)}/></div>
       <div>Style:<input name="style"   onChange={(e) => this.changeHandler(e.target.name, e.target.value)}/></div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button  onClick={()=> this.updateAppointment(appt.id)} type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
        <button onClick={() => this.deleteAppointment(appt.id)}>Delete</button>
        
      </div>
    })
    console.log(this.state)
    return (
      <div className="App">
       
      <Header/>
      
      
        <div className="container">

         

            <div className="column">IMAGES</div>

            <div id="column2"className="column">
            
              <div className="form">

              <AppointmentForm name={name} contact={contact} apptDate={apptDate} apptTime={apptTime} style={style} changeHandler={this.changeHandler} postAppointment={this.postAppointment} />
              
              </div>
  
              <div className="appts">{mappedAppts}</div>
           
              </div>
            
            </div>
        
        
      
      </div>
    );
  }
}

export default App;
