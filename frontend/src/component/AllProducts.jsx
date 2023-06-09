import React, { useContext, useEffect, useState } from 'react';
import CardProducts from './CardProducts';
import axios from 'axios';
import { DataContext } from '../context/DataContext';

const AllProducts = () => {
    const { setLoading } = useContext(DataContext)
    const [getdata, setGetdata] = useState([]);
    const getData = async () => {
        setLoading(true);

        await axios.get('http://localhost:8000/product/getdata')
            .then(response => {
                setLoading(false);
                setGetdata(response.data);

            })

    }
    useEffect(() => {
        getData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <>
            <div className="products">
                <div className="container">
                    <h2 className="text-center font-weight-bold mb-5">Best Products</h2>
                    <div className="row">
                        {
                            getdata.map((val, ind) => {
                                return (<CardProducts
                                    key={ind}
                                    id={val.id}
                                    name={val.name}
                                    price={val.price}
                                    product_image={val.product_image}
                                />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default AllProducts
