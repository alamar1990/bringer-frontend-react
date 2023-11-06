import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate  } from "react-router-dom";
import useLogin from './useAuth';

const useTracking = () => { 
  const [trackingItems, setTrackingItems] = useState();
  const { jwtToken } = useLogin();
  const navigateTo = useNavigate();

  const pullTrackingData = async (trackingNumber) => {
    try {    
      if (!jwtToken) throw new Error('No authorization token to request tracking data')
      if (!trackingNumber) throw new Error('No tracking number provided')
      const axiosConfig = {
        headers: { Authorization: `Bearer ${jwtToken}` }
      }

      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/tracking-parcel?tracking_number=${trackingNumber}`, axiosConfig);
      const { trackingData: {parcel_tracking_items} } = data    

      if(parcel_tracking_items) {
        setTrackingItems(parcel_tracking_items)
      }        

    } catch (error) {
      console.error('Error occurred while pulling package data:', error); 
      // navigateTo("/login");
    }
  }

  return { pullTrackingData, trackingItems };
};

export default useTracking;
