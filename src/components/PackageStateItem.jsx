const PackageStateItem = ({ item, isActive }) => {
  const {tracking_code_vendor} = item
  const date = new Date(tracking_code_vendor?.data?.date);
  const formattedDate = date.toDateString()
    
  return (  
    <div className="step">
      <div className="left">
        <div className="left-caption">{formattedDate}</div>
      </div>
      <div className="center">
        <div className="circle"></div>
      </div>
      <div className="right">
        <div className="title">{tracking_code_vendor?.data?.description}</div>
        <div className="right-caption">{`${tracking_code_vendor?.data?.city}, ${tracking_code_vendor?.data?.country}`}</div>
      </div>
    </div>
  );
};

export default PackageStateItem;
