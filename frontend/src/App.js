import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/NewWorkout" element={<WorkoutForm />} /> */}

          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
