import { useEffect, useState } from "react";
import './Track.css'
import { useParams } from "react-router-dom";
import PackageTracking from "../components/PackageTracking"
import useTracking from "../hooks/useTracking";

function Track() {
  let {tracking_number} = useParams()
  const [ trackingNumberInput, setTrackingNumberInput ] = useState('BPS1EP58YI5SKBR')
  const { trackingItems, pullTrackingData } = useTracking()
  
  const handleSearchButtonClick = () => {
    pullTrackingData(trackingNumberInput)
  }

  useEffect(() => {
    pullTrackingData(trackingNumberInput)
  }, [])

  return (
      <article className='page-track-container'>
        <div className="input-container" style={{display: 'flex', maxWidth: '300px', gap: '0.5rem'}}>
          <input
            type="text"
            id="tracking-number-search"
            value={trackingNumberInput}
            onChange={(e) => {
              setTrackingNumberInput(e.target.value);
            }}
            required
          />
          <label htmlFor="tracking-number-search">Tracking number</label>
          <button onClick={handleSearchButtonClick}>Search</button>
        </div>
        <PackageTracking trackingItems={trackingItems} />
      </article>
  )
}

export default Track