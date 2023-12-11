import React, { useRef, useState } from 'react'

export default function SlotTiming() {
  const [date_slot, SetDate_slot] = useState(0)
  const currentDate = new Date();
  const sevenDays = Array.from({ length: 7 }, (_, index) => {
    const nextDay = new Date(currentDate);
    nextDay.setDate(currentDate.getDate() + index);

    return nextDay;
  });
  const sixDays = sevenDays.filter(day => day.getDay() !== 0);

  const weekly_slots = [
    [
      "3:00 PM", "3:30 PM",
    ], [
      "12:00 PM", "12:30 PM",
      "3:00 PM", "3:30 PM",
      "4:30 PM", "5:00 PM"
    ], [
      "11:00 AM", "11:30 AM",

      "3:00 PM", "3:30 PM",
      "4:30 PM", "5:00 PM"
    ], [
      "11:00 AM", "11:30 AM",
      "12:00 PM", "12:30 PM",

      "4:30 PM", "5:00 PM"
    ], [
      "11:00 AM", "11:30 AM",
      "12:00 PM", "12:30 PM",
      "3:00 PM", "3:30 PM",
      "4:30 PM", "5:00 PM"
    ], [

       
    ]
  ]


  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const getslotdate = (date, i) => {
    const tomorrow = new Date(currentDate);
    tomorrow.setDate(currentDate.getDate() + 1); 
    if (i === 0 && currentDate.toDateString() === date.toDateString()) {
      return 'Today';
    } else if (i === 1 && tomorrow.toDateString() === date.toDateString()) {
      return 'Tomorrow';
    } 
    return `${date.getDate()} ${monthNames[date.getMonth()]}`;
  } 
  const [time_slot,setTime_slot] = useState(0)


  const scrollto = (target,inb="center")=>{
    console.log(target); // Check if target is a valid DOM element
    if (target) {
      target.scrollIntoView({ inline: "center", behavior: "smooth" });
    } 
  }

  const prevdate = () => {
    if (date_slot > 0) {
      const updatedDateSlot = date_slot - 1;
      const slotGroups = document.querySelectorAll(".slot-group");
      if(slotGroups[updatedDateSlot]){
        slotGroups[updatedDateSlot].click(); 

      }
    }
  };
  
  const nextdate = () => {
    console.log(date_slot)
    if (date_slot < 7) {
      const updatedDateSlot = date_slot + 1; 
      const slotGroups = document.querySelectorAll(".slot-group");
      if(slotGroups[updatedDateSlot]){
        slotGroups[updatedDateSlot].click(); 

      }
      
    }
  };
  
   
   
  return (
    <div className="input-area slot-area" tabIndex="0">
      <div className="input-box slot-box " tabIndex="0">
        <div className="wrapper" tabIndex="0">

          
          <i onClick={prevdate} className="fa fa-angle-left"></i>
          <div aria-details="all-slot-dates"  tabIndex="0" className="slot-date-carousel">
            {sixDays.map((day, i) => {
              const classname = date_slot === i? 'selected' : '';
              const slotsnum = weekly_slots[i].length;
              const slotclass = slotsnum>0?"available":"unavailable"
              return (
                <div  tabIndex="0" onClick={(e) => {SetDate_slot(i);scrollto(e.target)} } key={day.toDateString()} className={`slot-group ${classname}`}>
                  <p className="slot-date">{getslotdate(day, i, currentDate)}</p>
                  <p className={`slot-stat ${slotclass}`}>{slotsnum} Slots Available</p>
                </div>
              );
            })}
          </div>
          <i onClick={nextdate} className="fa fa-angle-right"></i>
        </div>





        <div className="slot-time-box"  tabIndex="0">
          {weekly_slots[date_slot].map((time,i) => {
            const isSelected = time_slot === i;
            return (
              <div  tabIndex="0"     key={i} onClick={()=>setTime_slot(i)} className={`slot-time-wrapper ${isSelected ? 'selected' : ''}`}>
                <p tabIndex="0" aria-details="slot-time" className="slot-time">{time}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
