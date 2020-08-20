import React from "react"

function Contact (props) {
    return(
    <div className="container home">
        <div className="row">
        <h1> Contact Page</h1>
        <p> Feel free to Contact me Anytime!</p>
        </div>
        <div className="row display">
    <div className="form-group">
    <input name="name" placeholder="Name" className="form-control"></input>
    </div>
    <div className="form-group">
    <input name="email" placeholder="Email" className="form-control"></input>
    </div>
    <div className="form-group">
    <textarea className="form-control"/>    
    </div>
      </div>
      </div>
    );
}

export default Contact;            
