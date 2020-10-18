import React, { useState } from 'react'

function Contact(){
    const [data,setData] = useState({
        fullname: "",
        phone: "",
        email: "",
        msg: ""
    });
    const InputEvent = (event) => { 
        const {name,value} = event.target; 
        setData((preVal)=>{
            return{
                ...preVal,
                [name] : value,
            }
        })
    }
    const formSubmit = (e) =>{
        e.preventDefault()
        alert(`Form Submitted Successfully with Data \n FullName = ${data.fullname} Phone No. = ${data.phone} Email = ${data.email} Message = ${data.msg} \n thanks for Submition`)
    };
    return(
    <>
        <div className="my-5">
            <h1 className="text-center">Contact US</h1>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                            <div className="form-group">
                                <label for="exampleInputPassword1">Full Name</label>
                                <input type="text" className="form-control" id="exampleInputPassword1" name="fullname" value={data.fullname} onChange={InputEvent} placeholder="Enter Full Name"/>
                            </div>
                            <div className="form-group">
                                <label for="exampleInputPassword1">Phone</label>
                                <input type="text" className="form-control" id="exampleInputPassword1" name="phone" value={data.phone} onChange={InputEvent} placeholder="Enter Phone No."/>
                            </div>
                            <div className="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={data.email} onChange={InputEvent} placeholder="Enter email"/>
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlTextarea1">Message</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" name="msg" value={data.msg} onChange={InputEvent} rows="3"></textarea>
                            </div>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                <label className="form-check-label" for="exampleCheck1">Are You From Pakistan</label>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default Contact;