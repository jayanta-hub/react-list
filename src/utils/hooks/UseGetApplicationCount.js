import { useSelector } from 'react-redux';

const UseGetApplicationCount = () =>
  useSelector((state) => state?.dashboard?.dashboardInfo?.applications?.length);

export default UseGetApplicationCount;
