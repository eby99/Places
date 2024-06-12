import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const Search = () => {
    const [data, setdata] = useState(
        {
            "pname": ""
        }
    )
    const [result, setResult] = useState(
        []
    )
    const inputhandler = (event) => {
        setdata({ ...data, [event.target.name]: event.target.value })
    }
    const readvalue = () => {
        console.log(data)
        axios.post("http://localhost:8080/Search", data).then(
            (response) => {
                setResult(response.data)
            }
        ).catch(
            (error) => {
                console.log(error)
            }
        ).finally()
    }
    const deleteCourse = (id) => {
        let input = { "_id": id }
        axios.post("http://localhost:8080/Delete", input).then(
            (response) => {
                console.log(response.data)
                if (response.data.status == "Deleted") {
                    alert("succesfully deleted")

                } else {
                    alert("Error")

                }
            }
        )
    }



    return (
        <div>


            <Navbar />

            <div className="container">
                <div className="row g-3">
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="label form-label">Place Name </label>
                        <select id="bgroup" className="form-control" name='pname' value={data.pname} onChange={inputhandler}>
                            <option value="France">France</option>
                            <option value="Poland">Poland</option>
                            <option value="Portugal">Portugal</option>
                        </select>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <button className="btn btn-info" onClick={readvalue}>Search</button>
                        <br></br> <br></br> <br></br>
                        <div className="row g-3">
                       <br></br>
                            <table class="table">
                                <thead>
                                    <tr>


                                        <th scope="col">Place Name</th>
                                        <th scope="col">Description</th>
                                        <th scope="col">Cost</th>
                                        <th scope="col">Date</th>
                                        {/* <th scope="col">UserName</th> */}
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        result.map(
                                            (value, i) => {
                                                return <tr>

                                                    {/* <td>{value._id}</td> */}
                                                    <td>{value.pname}</td>
                                                <td>{value.desc}</td>
                                                <td>{value.cost}</td>
                                                <td>{value.date}</td>
                                                {/* <td>{value.uname}</td> */}
                                                <br></br><br></br>
                                                    <td><button className="btn btn-danger" onClick={() => { deleteCourse(value._id) }}>Delete</button></td>
                                                </tr>
                                            }
                                        )
                                    }
                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
            </div>



        </div>



    )
}

export default Search