import React, { useEffect, useState, useRef } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'

const MyAccount = () => {
    const [order, setOrder] = useState([]);
    const location = useLocation();
    localStorage.setItem('NavLoc', location.pathname);
    const userdatast = localStorage.getItem('EcomUser');
    const logout = () => {
        localStorage.clear();
        window.location.reload();
    }

    const timeout = useRef(null);
    const navigate = useNavigate();
    const checkAuth = () => {
        axios.get("http://localhost:8000/isAuth", {
            headers: {
                "x-access-token": localStorage.getItem("Ecomtoken")
            }
        }).then((response) => {
            if (!response.data.login) {
                navigate("/");
            }
        })

    }

    useEffect(() => {
        timeout.current = setTimeout(checkAuth, 10)
        return function () {
            if (timeout.current) {
                clearTimeout(timeout.current)
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const getOrderDetails = async (id) => {
        if (!id) return;
        const res = await axios.get(`http://localhost:8000/order/account/${id}`);
        setOrder(res.data);
    }
    useEffect(() => {
        const dat = +localStorage.getItem('EcomUserId');
        getOrderDetails(dat);
    }, [])
    if (!order.length) {
        return (
            <>
                <div className="container p-5" style={{ height: "100vh" }}>
                    <button className="btn btn-success ml-1 mr-1" disabled>Welcome {userdatast}</button>
                    <button className="btn btn-success ml-1 mr-1" onClick={() => navigate('/myaddress')}>Manage Address</button>
                    <button className="btn btn-warning ml-1 mr-1" onClick={logout}>LogOut</button>
                    <br /><br />

                    <h2>You Not Yet Placed Any Order</h2>
                    <button className="btn btn-info" onClick={() => navigate('/products')}>Continue Shopping</button>
                </div>
            </>
        )
    }

    return (
        <>
            <div className="payment">
                <div className="container">
                    <button className="btn btn-success ml-1 mr-1" disabled>Welcome {userdatast}</button>
                    <button className="btn btn-success ml-1 mr-1" onClick={() => navigate('/myaddress')}>Manage Address</button>
                    <button className="btn btn-warning ml-1 mr-1" onClick={logout}>LogOut</button>
                    <br /><br />
                    <div className="row">
                        <div className="table-responsive">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Order Date</th>
                                        <th>Payment Method</th>
                                        <th>Order Status</th>
                                        <th>Amount</th>
                                        <th>Operation</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        order.map((val, ind) => {
                                            return (<tr key={ind}>
                                                <td>{ind + 1}</td>
                                                <td >{new Date(val.updatedAt).toLocaleDateString()}</td>
                                                <td>{(val.orderstatus === "cancelled") ? "---" : (val.paymentmode)}</td>
                                                <td>{val.orderstatus}</td>
                                                <td>{(val.orderstatus === "cancelled") ? "---" : (val.totalprice)}</td>
                                                <td>
                                                    <NavLink to={`/myorder/${val.id}`} className="btn btn-info">View</NavLink>
                                                </td>
                                            </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyAccount
