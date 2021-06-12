import React, { useState } from 'react'
import firebase from "../config/firebase"

function Contact() {
    const [data, setData] = useState({
        fullname: "",
        phone: "",
        email: "",
        msg: "",
    });
    const [check, setCheck] = useState(false)
    const InputEvent = (event) => {
        const { name, value } = event.target;
        setData((preVal) => {
            return {
                ...preVal,
                [name]: value,
            }
        })
    }
    const formSubmit = (e) => {
        e.preventDefault()
        alert(`Submit Successfully...`)
        const Obj = {
            fullName: data.fullname,
            Phone: data.phone,
            Email: data.email,
            Message: data.msg,
            Pakistan: check
        }
        firebase.database().ref("/").push(Obj);
        console.log("Obj ===> ",Obj)
        setData({
            fullname: "",
            phone: "",
            email: "",
            msg: "",
        })
        setCheck(false)
    };
    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Contact US</h1>
                <div className="container contact_div">
                    <div className="row">
                        <div className="col-md-6 col-10 mx-auto">
                            <form onSubmit={formSubmit}>
                                <div className="form-group">
                                    <label for="exampleInputPassword1">Full Name</label>
                                    <input type="text" className="form-control" id="exampleInputPassword1" required name="fullname" value={data.fullname} onChange={InputEvent} placeholder="Enter Full Name" />
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputPassword1">Phone</label>
                                    <input type="number" className="form-control" id="exampleInputPassword1" required name="phone" value={data.phone} onChange={InputEvent} placeholder="Enter Phone No." />
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputEmail1">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" required aria-describedby="emailHelp" name="email" value={data.email} onChange={InputEvent} placeholder="Enter email" />
                                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                </div>
                                <div class="form-group">
                                    <label for="exampleFormControlTextarea1">Message</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" name="msg" required value={data.msg} onChange={InputEvent} rows="3"></textarea>
                                </div>
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" onClick={(e) => setCheck(true)} id="exampleCheck1" />
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