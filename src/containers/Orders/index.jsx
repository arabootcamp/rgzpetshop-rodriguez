import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { db } from '../../firebase/config';
import { collection, getDocs } from "firebase/firestore";

const Orders = () => {

  const [orders, setOrders] = useState([]);

  const showOrders = () => {
    const getOrders = async () => {
      const querySnapshot = await getDocs(collection(db, "orders"));
      const list = [];
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        list.push({ ...doc.data(), id: doc.id });
      });
      setOrders(list);
    }
    getOrders();
  }

  return (
    <div className="text-center">
      <h2 className="my-5">Ordenes de compra generadas por el momento</h2>
      <div className="my-5">
        <Button variant="primary" onClick={showOrders} className="rounded-0">
          Request al listado de ordenes
        </Button>
      </div>
      <ul className="d-inline-block">
        {orders.map(el => (<li key={`orderId-${el.id}`} className="text-start">{el.id + " - " + el.buyer.email + " - total productos: " + el.items.reduce((acc, curr) => (acc + curr.quantity), 0) + " -  pago: " + el.amountToBePaid}</li>))}
      </ul>
    </div>
  )
}

export default Orders;