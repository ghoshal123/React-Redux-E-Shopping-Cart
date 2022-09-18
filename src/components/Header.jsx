import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from '@mui/material/Badge'
import { NavLink } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import { useDispatch, useSelector } from 'react-redux';
import { Table } from '@mui/material';
import { DELETE } from './redux/actions/action';
import { useEffect } from 'react';
const Header = () => {
    const getData = useSelector((state) => (state.cartReducer.carts));
    //console.log(getData);
    const [anchorEl, setAnchorEl] = useState(null);
    const [price, setPrice] = useState(0);
    console.log(price);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const dispatch = useDispatch();

    const delProduct = (id) => {
        dispatch(DELETE(id));
    }

    const totalVal = () => {
        let price = 0;
        getData.map((elem, k) => {
            price = elem.price * elem.qty + price;
        })
        setPrice(price);
    }
    useEffect(() => {
        totalVal();
    }, [totalVal])
    return (
        <div>
            <Navbar bg="dark" variant="dark" style={{ height: "60px" }}>
                <Container>
                    <NavLink to='/' className='text-decoration-none text-light mx-auto'>E-Shopping Cart</NavLink>
                    <Nav className="mx-auto">
                        <NavLink to='/' className='text-decoration-none text-light mx-3'>Home</NavLink>
                        <NavLink to='/' className='text-decoration-none text-light mx-3'><b>Explore</b></NavLink>
                        <NavLink to='/contact' className='text-decoration-none text-light mx-3'>Contact Us</NavLink>
                        <NavLink to='/about' className='text-decoration-none text-light mx-3'>About Us</NavLink>
                    </Nav>
                    <Badge badgeContent={getData.length} color="primary"
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        <i class="fa-solid fa-cart-shopping text-light" style={{ fontSize: 25, cursor: "pointer" }} ></i>
                    </Badge>
                </Container>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    {
                        getData.length ?
                            <div className='card_details' style={{ width: "24rem", padding: 10 }}>
                                <Table>
                                    <thead style={{ border: "2px solid" }}>
                                        <tr>
                                            <th>Photo</th>
                                            <th>Product Name</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            getData.map((e) => {
                                                return (
                                                    <tr>
                                                        <td>
                                                            <NavLink to={`/cart/${e.id}`} onClick={handleClose}>
                                                                <img src={e.images} style={{ width: "5rem", height: "5rem" }} alt='' />
                                                            </NavLink>
                                                        </td>
                                                        <td>
                                                            <p>{e.title}</p>
                                                            <p>Price:₹ {e.price}</p>
                                                            <p>Quantity: {e.qty}</p>
                                                        </td>
                                                        <td>
                                                            <p onClick={() => delProduct(e.id)}><i className='fas fa-trash' style={{ color: "red", fontSize: 20, cursor: "pointer" }} /></p>
                                                        </td>
                                                    </tr>

                                                )
                                            })
                                        }
                                        <p className='text-center'>Total Price:₹  {price}</p>
                                    </tbody>
                                </Table>
                            </div> :
                            <div style={{ padding: "20px" }}>
                                <h5>Your Cart is Empty!!!</h5>
                            </div>
                    }


                </Menu>
            </Navbar>
        </div>
    )
}

export default Header