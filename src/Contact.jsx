import React, { useState } from 'react';


const Contact = () => {
    const[data , setData] = useState({
        fullname:'',
        phone:'',
        email:'',
        msg:'',
    });

    const InputEvent = (event) => {
        const {name ,value} =event.target;
        setData((preVal) => {
            return {
                ...preVal,
                [name]:value,
            };
        });
    }

    const formsubmit = (e) => {  
        e.preventDefault();
        alert(`My name is ${data.fullname}. My Mobile number is ${data.phone} and email is ${data.email}, Here is what I want to say ${data.msg}`)
    }
    return(
        <>

<div className="container-fluid nav_bg">
<h2 className="text-center "> Contact Us</h2>
        <div className="row">
        <div className="col-md-6 col-10 mx-auto">
        <form onSubmit={formsubmit}>
        <div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Full Name</label>
  <input type="name" className="form-control" id="exampleFormControlInput1" name="fullname" value={data.fullname} onChange={InputEvent} placeholder="Enter Full Name" />
</div>
<div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Phone</label>
  <input type="mobile-number" className="form-control" id="exampleFormControlInput1" name="phone" value={data.phone} onChange={InputEvent} placeholder="Enter Your Mobile Number" />
</div>
<div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={InputEvent} placeholder="name@example.com" />
</div>
<div className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label">Massage</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="msg" value={data.msg} onChange={InputEvent}></textarea>
</div>
<div className="col-12">
    <button className="btn btn-primary" type="submit">Submit form</button>
  </div>
</form>
       </div>
   </div>
</div>
        
        </>
    );
};


export default Contact;