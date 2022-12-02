import { data } from 'autoprefixer';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import OrderRow from './OrderRow';

const Orders = () => {
    const {user, logOut}= useContext(AuthContext)
    const [orders , setOrder]= useState({})

    
    useEffect(()=>{
      fetch( `https://genius-server-tau.vercel.app/orders?email=${user?.email}`,{
        headers:{
          authorization : `bearer ${localStorage.getItem('token')}`
        }
      })
      .then(res=>{
        if(res.status ===401 || res.status === 403){
          return logOut()
        }
       return res.json()
      })
      .then(data=>{setOrder(data)})

    },[user?.email, logOut])



    
   const handleDelete=id=>{
    const proceed= window.confirm('your are sure cancel the order')
    if(proceed){
      fetch(`https://genius-server-tau.vercel.app/orders/${id}`, {
       method: "DELETE"
      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data)
        if(data.deletedCount > 0){
          alert('delete success')
          const remaining=orders.filter(ord=> ord._id !== id)
          setOrder(remaining)
        }
      })
    }
}

const handleStatus= id=>{
   fetch(`https://genius-server-tau.vercel.app/orders/${id}`,{
    method : "PATCH" ,
    headers :{
      'Content-Type' : 'application/json'
    },
    
    body : JSON.stringify({status : "approval"})
  
   })
   .then(res=> res.json())
   .then(data => {
    if(data.modifiedCount > 0){
      const remaining= orders.filter(odr=> odr._id !== id)
      const approving= orders.find(odr => odr._id === id)
      approving.status= "approved"

      const newOrder= [approving,...remaining  ]
      setOrder(newOrder)

    }
    console.log(data)
  
  })
}




    return (
        <div>
            <h2>{orders.length}</h2>
            <div className="overflow-x-auto w-full">
  <table className="table w-full">
      
    <thead>

      <tr>
        
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th>massage</th>
      </tr>
    </thead>
    <tbody>
      
     {
        Array.isArray(orders)? orders.map(order=> <OrderRow 
        key={order._id}
        handleDelete={handleDelete}
        order={order}
        handleStatus={handleStatus}
        ></OrderRow>):null 
     }
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Orders;