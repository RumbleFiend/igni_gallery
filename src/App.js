import { useState, useEffect } from "react";
import "./assets/styles/App.css";
import './assets/styles/gallery.css';
import Home from "./routes/home";



function App() {
  const [state, setstate] = useState(null);
  useEffect(() => {
    
    return () => {
      
    }
  }, [])

  return (
    <div className="App">
        <Home></Home>
    </div>
  );
}




export default App;
