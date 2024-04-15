import { useSelector } from 'react-redux';
import { getSessionStorage } from '../helpers';

const UseCheckRoleAndPermission = () => {
  const userType = getSessionStorage('userType');
  const appInfo = useSelector((state) => state?.appDetails?.appDetails);
  if (
    appInfo?.permission?.includes('UPDATE') ||
    appInfo?.permission?.includes('CREATE') ||
    userType === 'SUPER_ADMIN'
  ) {
    return true;
  }
  return false;
};

export default UseCheckRoleAndPermission;
