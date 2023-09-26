import React from 'react'
import './Notification.css';
import { useSelector } from 'react-redux';
const Notification = () => {
    const networkStatus = useSelector(state => state.cart.networkStatus);
  return (
    <div className={networkStatus === 'sending' ? 'sendingNotification' : networkStatus === 'success' ? 'successNotification' : 'errorNotification'}>

    <div >{networkStatus === 'sending' ? 'Sending...' : networkStatus === 'success'? 'Success' : 'Error'}</div>
    <div >{networkStatus === 'sending' ? 'Sending cart data' : networkStatus === 'success'? 'Cart data successfully saved' : 'Cart data failed to save'}</div>
    </div>
    
  )
}

export default Notification