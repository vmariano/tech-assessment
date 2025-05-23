import { createContext, useState } from 'react';

const DashboardContext = createContext(0);

export const DashboardProvider = ({ children }) => {
  const [totalOrders, setTotalOrders] = useState(0);

  return (
    <DashboardContext.Provider value={{ totalOrders, setTotalOrders }}>
      {children}
    </DashboardContext.Provider>
  );
};

export default DashboardContext;
