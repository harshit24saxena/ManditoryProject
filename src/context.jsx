import { createContext } from "react";

const DataContext = createContext();

export default function ProviderComponent({ children }) {
  const [sharedData, setSharedData] = useState({});
  
  return (
    <DataContext.Provider value={{ sharedData, setSharedData }}>
      {children}
    </DataContext.Provider>
  );
}