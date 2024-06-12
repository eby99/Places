import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const Add = () => {


    const [data, setdata] = useState(

        {
            "pname":"",
            "desc":"",
            "cost":"",
            "date":"",
            "uname":"",
            "passwd":""


        }
    )

    const inputhandler = (event) => {
        setdata({ ...data, [event.target.name]: event.target.value })
    }

    const readvalue = () => {
        console.log(data)
        axios.post("http://localhost:8080/Add",data).then(
            (response)=>{
                console.log(response.data)
                    if (response.data.status=="success") {
                        alert("Added Successfully");
                    } else {
                        alert(response.data);
                    }
                
            }
        ).catch(
            (error)=>{
                    alert("error");
            }
        )
    }


  return (
    <div>

    <Navbar/>
<br></br><br></br>
    <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                <div className="row g-3">
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="label form-label">Place Name </label>
                        <select id="bgroup" className="form-control" name='pname' value={data.pname} onChange={inputhandler}>
                            <option value="France">France</option>
                            <option value="Poland">Poland</option>
                            <option value="Portugal">Portugal</option>
                        </select>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <label htmlFor="" className="label form-label">Place Description</label>
                        <textarea name="desc" id="" className="input form-control" value={data.desc} onChange={inputhandler}></textarea>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <label htmlFor="" className="label form-label">Cost</label>
                        <input type="text" className="input form-control" name='cost' value={data.cost} onChange={inputhandler}/>

                    </div>
                    {/* <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <label htmlFor="" className="label form-label">Venue</label>
                        <input type="text" className="input form-control" name='venue' value={data.venue} onChange={inputhandler}/>

                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <label htmlFor="" className="label form-label">Course Duration</label>
                        <input type="text" className="input form-control" name='dur' value={data.dur} onChange={inputhandler} />

                    </div> */}
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <label htmlFor="" className="label form-label">Date</label>
                        <input type="date" name="cdate" id="" className="form-control" value={data.date} onChange={inputhandler}/>

                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="label form-label">Username</label>
                        <input type="text" className="input form-control" name='uname' value={data.uname} onChange={inputhandler} />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="label form-label ">Password</label>
                        <input type="text" className="input form-control" name='passwd' value={data.passwd} onChange={inputhandler} />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="label form-label ">Confirm Password</label>
                        <input type="text" className="input form-control" />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <button className="btn btn-primary" onClick={readvalue}>ADD</button>
                    </div>
                </div>

                </div>
            </div>
        </div>


    </div>
  )
}

export default Add