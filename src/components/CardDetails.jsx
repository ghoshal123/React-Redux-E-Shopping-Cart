import React, { useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { DELETE, ADD, INDREM } from './redux/actions/action';

const CardDetails = () => {

  const [myProduct, setMyProduct] = useState([]);
  //console.log(myProduct);
  const navigate = useNavigate();
  const { id } = useParams();
  //console.log(id);
  const getData = useSelector((state) => state.cartReducer.carts);
  //console.log(getData);

  const compare = () => {
    let compareData = getData.filter((elem) => {
      return elem.id == id
    })
    setMyProduct(compareData);
  }

  useEffect(() => {
    compare();
  }, [id]);

  const send = (e) => {
    //console.log(e);
    dispatch(ADD(e));
  }

  const dispatch = useDispatch();
  const delProduct = (id) => {
    dispatch(DELETE(id));
    navigate("/");
  }

  const remOne = (item) => {
    dispatch(INDREM(item));
  }
  return (
    <div>
      <div className='container mt-2'>
        <h2 className='text-center'>Product Details</h2>
        <section className='mt-3'>
          <div className="itemsdetails">
            {
              myProduct.map((elem) => {
                return (
                  <div>
                    <div className='items_img'>
                      <img src={elem.images} style={{ width: "25rem", height: "15rem" }} alt='' />
                    </div>
                    <div className="details">
                      <Table>
                        <tr>
                          <td>
                            <p><strong>Product Name:</strong>{elem.title}</p>
                            <p><strong>Price:</strong>₹ {elem.price}</p>
                            <p><strong>Brand Name:</strong>{elem.brand}</p>
                            <p><strong>Total:</strong>₹ {elem.price * elem.qty}</p>
                            <div className='mt-5 d-flex justify-content-between align-item-center'
                              style={{ width: 100, cursor: "pointer", background: "grey", color: "black", padding: 12 }}>
                              <span style={{ fontSize: 24 }} onClick={elem.qty < 1 ? delProduct(elem.id) : () => remOne(elem)}>-</span>
                              <span style={{ fontSize: 24 }}>{elem.qty}</span>
                              <span style={{ fontSize: 24 }} onClick={() => send(elem)}>+</span>
                            </div>
                          </td>
                          <td>
                            <p><strong>Rating:</strong><span style={{ background: "green", color: "#fff", padding: "2px 5px", borderRadius: "5px" }}>{elem.rating} ★</span></p>
                            <p><strong>Category:</strong>{elem.category}</p>
                            <p><strong>Stock:</strong>{elem.stock}</p>
                            <p onClick={() => delProduct(elem.id)}><strong>Remove:</strong><span> <i className='fas fa-trash' style={{ color: "red", fontSize: 20, cursor: "pointer" }} /></span></p>
                          </td>
                        </tr>
                      </Table>
                    </div>
                  </div>

                )
              })
            }
          </div>
        </section>
      </div>
    </div>
  )
}

export default CardDetails