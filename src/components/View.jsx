import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const View = () => {


    const [data,changedata]=useState([])
        

    const fetchdata = () => {
        axios.post("http://localhost:8080/View").then(
            (response) => {
                console.log(response.data)
                changedata(response.data)
            }
        ).catch(
            (error)=>(
                console.log()
            )
        ).finally()
    }

    useEffect(() => { fetchdata() }, [])


  return (
    <div>

<Navbar/>


<br></br><br></br>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-col-xl-12 col-xxl-12">

                        <table class="table">
                            <thead>
                                <tr>

                                    <th scope="col">Place Name</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Cost</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">UserName</th>
                                    {/* <th scope="col">Trainer Name</th> */}
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map(
                                        (value, i) => {
                                            return <tr>

                                                {/*td>{value._id}</td> */}
                                                <td>{value.pname}</td>
                                                <td>{value.desc}</td>
                                                <td>{value.cost}</td>
                                                <td>{value.date}</td>
                                                <td>{value.uname}</td>
                                                {/* <>{value.tname}</td> */}
                                               
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
  )
}

export default View