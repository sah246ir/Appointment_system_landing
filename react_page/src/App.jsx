import React,{useState} from 'react';
import ConsultationMode from './consultation_mode';
import DoctorProfile from './doctor_profile';
import SlotTiming from './slot_timing';
import './index.css';
import './done.css';

function App() {
 
  

 
   

  const [done,setdone] = useState(false)
  const [booked,setbooked] = useState(false)
  const sc = ()=>{
    document.body.scrollTop = document.documentElement.scrollTop = 0;

  }
  return (
    <div className="container">
      <DoctorProfile></DoctorProfile>
      <h2 style={{textAlign: 'center'}}>Book an Appointment</h2>

      <div className="form-area" tabindex="0" aria-details="form-area" > 
      <ConsultationMode ></ConsultationMode>
      <SlotTiming></SlotTiming>
      <button onClick={()=>{setdone(true);setbooked(true);sc()}} className="save-btn">
        Book Appointment
      </button>
      </div>
 
      <div class={done?"newwrap":"newwrap d-none"}>
        <div class="done-wrapper">  
            <h1 style={{color:"white",textAlign:"center"}}>Appointment Successfully Booked!</h1>
            <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
                <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
            </svg> 
            <div className="done-actions">
              <i onClick={()=>setdone(false)} className="fa fa-window-close done-close-action"></i>
              <h2>Share Appintment Details</h2>
              <h2 onClick={()=>setdone(false)}>View Receipt</h2>
            </div>
        </div>
    </div>
    </div>

  );
}

export default App;
