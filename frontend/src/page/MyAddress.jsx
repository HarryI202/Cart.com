import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./MyAddress.css";
import { GrAdd } from "react-icons/gr";

function MyAddress() {
    const navigate = useNavigate();
    const [yourAddress, setYourAddress] = useState([]);
    // const [inputAddres, setInputAddres] = useState("");
    const loc = localStorage.getItem('NavLoc');
    const user = localStorage.getItem('EcomUser');
    const userEmail = localStorage.getItem('EcomEmail');
    const getaddress = async () => {
        const dat = localStorage.getItem('EcomUserId');
        const res = await axios.get(`http://localhost:8000/address/getaddress/${dat}`);
        setYourAddress(res.data);
    }

    const deleteAddress = async (id) => {
        axios.post("http://localhost:8000/address/deleteAddress/" + id);
    }
    useEffect(() => {
        getaddress();
    }, [yourAddress]);
    return (
        <section className='container'>
            <div className="row justify-content-center mb-3" style={{}} >
                <div className="row d-flex justify-content-center align-items-center" >
                    {/* <div className="col"> */}
                    <div className="card my-4 shadow-3">
                        <div className="row p-5" style={{ height: "fitContent" }}>
                            <div className="col-md-3">
                                <div className="osahan-account-page-left shadow-sm bg-white h-100">
                                    <div className="border-bottom p-4">
                                        <div className="osahan-user text-center">
                                            <div className="osahan-user-media">
                                                <img className="mb-3 rounded-pill shadow-sm mt-1" src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="gurdeep singh osahan" />
                                                <div className="osahan-user-media-body">
                                                    <h6 className="mb-2">{user}</h6>
                                                    <p className="mb-1">+91 70775-52981</p>
                                                    <p>{userEmail}</p>
                                                    <p className="mb-0 text-black font-weight-bold"><Link className="text-primary mr-3" data-toggle="modal" data-target="#edit-profile-modal" to="#"><i className="icofont-ui-edit"></i> EDIT</Link></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <ul className="nav nav-tabs flex-column border-0 pt-4 pl-4 pb-4" id="myTab" role="tablist">
                                            <li className="nav-item">
                                                <Link className="nav-link" id="addresses-tab" data-toggle="tab" to="#addresses" role="tab" aria-controls="addresses" aria-selected="false"><i className="icofont-location-pin"></i> Addresses</Link>
                                            </li>
                                        </ul> */}
                                </div>
                            </div>
                            <div className="col-md-1 vl"></div>
                            <div className="col-md-8 col-sm-12">
                                <div className="osahan-account-page-right shadow-sm bg-white p-4 h-100">
                                    <div className="tab-content" id="myTabContent">
                                        <div className="tab-pane fade  active show" id="addresses" role="tabpanel" aria-labelledby="addresses-tab">
                                            <div className="d-flex py-4">
                                                <button className='btn bg-light' style={{ height: "50px", width: "80px" }} onClick={() => navigate('/addaddress')}><GrAdd /></button>
                                                <div className=''>  <h4 className="font-weight-bold pt-3 mt-0 mb-4 ms-1">Add Addresses</h4></div>
                                            </div>
                                            <div className="row">
                                                {yourAddress.length ?
                                                    yourAddress.map((val, ind) => {
                                                        return (<div key={ind} className="col-md-6 col-lg-6">
                                                            <div className="bg-white card addresses-item mb-4 border border-primary shadow">
                                                                <div className="gold-members p-4">
                                                                    <div className="media">
                                                                        <div className="mr-3"><i className="icofont-ui-home icofont-3x"></i></div>
                                                                        <div className="media-body">
                                                                            <h6 className="mb-1 text-secondary">Home</h6>
                                                                            <p className="text-black">{val.address}<br />{val.phone}
                                                                            </p>
                                                                            <p className="mb-0 text-black font-weight-bold">
                                                                                <Link className="text-primary mr-3" data-toggle="modal" data-target="#add-address-modal" to={"/addaddress/" + val.id}> EDIT</Link>
                                                                                <Link className="text-danger mr-3" data-toggle="modal" data-target="#delete-address-modal" to="#" onClick={() => deleteAddress(val.id)}>DELETE</Link>
                                                                                {loc === "/payment" &&
                                                                                    <Link className="text-success" data-toggle="modal" data-target="#payment-address-modal" to={"/checkout/" + val.id}> NEXT</Link>
                                                                                }
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        )
                                                    })


                                                    :
                                                    <>
                                                        <h1>Add Your Desired Address</h1>
                                                    </>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                    {/* </div> */}
                </div>
            </div>
        </section>
    )
}

export default MyAddress