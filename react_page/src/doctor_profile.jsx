import React from 'react';
import doc from "./doc.png" 
export default function DoctorProfile() {
  return (
    <div className="heading" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', alignItems: 'center', flexWrap: 'wrap' }}>
      <div className="doc-profile" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '50px', alignItems: 'center', flexWrap: 'wrap', width: '22em' }}>
        <div className="heading-logo" style={{ width: '100px' }}>
          <img src={doc} alt="" style={{ width: '100%' }} />
        </div>
        <div className="heading-text-group" style={{ textAlign: 'left' }}>
          <h2 style={{ marginTop: '0', marginBottom: '7px' }} tabIndex="0" >Dr. Shalu Chawla</h2>
          <p style={{ fontSize: '2.3ch', marginBottom: '7px' }} tabIndex="0">Obstetrics & Gynecology</p>
          <p style={{ fontSize: '2.3ch' }} tabIndex="0">Fee Per Session: <span style={{ fontSize: '2.5ch', color: '#326f39' }}><i className="fa fa-rupee"></i> 900</span></p>
        </div>
      </div>
      <div className="doc-clinic" style={{ textAlign: 'right' }}>
        <h3 style={{ margin: '0', marginBottom: '10px' }}>Dr. Shalu's Clinic</h3>
        <p>
          <strong>Healing Zone</strong><br />
          Kalyan Naka, Rk Business Centre<br />
          Opp. Bopal Nagar<br />
          Maharashtra<br />
          421302
        </p>
      </div>
    </div>
  );
}
