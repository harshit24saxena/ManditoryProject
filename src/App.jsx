import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import FoodSlider from './Components/FoodSlider';
import AllDishBox from './Components/AllDishBox';
import Orders from './Components/Orders';
import QueueStatus from './Components/Queue';
import PreOrder from './Components/PreOrder';

function App() {
  return (
    <>
      <BrowserRouter>

        <Navbar />
        {/* router used inside the routes */}
        <Routes>

          {/* route used for different routing */}
          <Route path="/" element={
            <>
              <FoodSlider />
              <AllDishBox />
            </>
          }
          />

          {/* route used for different routing */}
          <Route path="/orders" element={<Orders />} />


          {/* route used for different routing */}

          <Route path="/QueueStatus" element={<QueueStatus />} />
          <Route path="/PreOrder" element={<PreOrder />} />


        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
