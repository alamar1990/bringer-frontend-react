// MainComponent.js
import PackageStateItem from './PackageStateItem';

const PackageList = () => {
  return (
    <div className="carousel-container">
      <PackageStateItem
        date="Sep 23, 2020"
        description="Package delivered"
        location="Cee Taguatinga, BR"
        isFirst={true}
      />
      <PackageStateItem
        date="Sep 23, 2020"
        description="Package dispatched"
        location="Cee Taguatinga, BR"
      />
    </div>
  );
};

export default PackageList;
