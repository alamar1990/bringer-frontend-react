import { useState } from 'react';
import axios from 'axios';
import useAuthStore from '../store/authStore';
import { useNavigate  } from "react-router-dom";
import useAuth from './useAuth';

const useTracking = () => { 
  const setIsAuthenticated = useAuthStore((state) => state.setIsAuthenticated)
  const [trackingItems, setTrackingItems] = useState();
  const { jwtToken } = useAuth();
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
        parcel_tracking_items.reverse()
        setTrackingItems(parcel_tracking_items)
      }
    } catch (error) {      
      if (error.response?.data?.remote_api_error){
        setTrackingItems(null)
        console.error('Error occurred while pulling package data:', error); 
        alert('REMOTE API ERROR: ' + error.response?.data?.error?.message)
        return
      }
      console.error('Server Error :', error); 
      navigateTo("/login");
      setIsAuthenticated(false);
    }
  }

  return { pullTrackingData, trackingItems };
};

export default useTracking;
