import React,{useState} from 'react'

export default function ConsultationMode( ) {
    const [type,setType] = useState(0);
return (
<div className="input-area" tabIndex="0">
    <div className="label">
        <h3 tabIndex="0" style={{marginBottom: '10px'}}>Consultation Mode</h3>
    </div>
    <div className="input-box cards-box consultation-type">
        <div onClick={()=>setType(0)} className={`card c-mode ${type === 0 ? 'selected' : ''}`}>
            <i aria-selected="true" className="fa fa-user-md"></i>
            <p aria-selected="true" tabIndex="0"><span className="c-type">In-Person</span></p>
        </div>
        <div onClick={()=>setType(1)}  className={`card c-mode ${type === 1 ? 'selected' : ''}`}>
            <i className="fa fa-phone"></i>
            <p tabIndex="0"><span className="c-type">Audio</span></p>
        </div>
        <div onClick={()=>setType(2)}  className={`card c-mode ${type === 2 ? 'selected' : ''}`}>
            <i className="fa fa-video-camera"></i>
            <p tabIndex="0"><span className="c-type">Video</span></p>
        </div>
    </div>
</div>
)
}