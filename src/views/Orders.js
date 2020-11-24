import React, { useEffect, useState } from 'react'
import { useStateValue } from '../store/StateProvider'
import { db } from '../store/firebase';
import Order from '../components/Order';
import '../css/orders.css'

function Orders() {
    const [orders, setorders] = useState([])
    const [{user, basket}, dispatch] = useStateValue();

    useEffect(() => {
        if(user){
            db.collection('users')
            .doc(user?.uid)
            .collection('orders')
            .orderBy('created', 'desc')
            .onSnapshot(snap => {
                setorders(snap.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data()
                   })
               ))
            })
        }
        else{
            setorders([])
        }
        
        
    }, [user])
    return (
        <div className="orders">
            <h1>Your Orders</h1>
            <div>
                {orders?.map(order => 
                    <Order order={order} key={order.id}/>
                )}
            </div>
        </div>
    )
}

export default Orders
