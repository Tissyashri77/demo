import { useAuth } from "./common/context";
import Home from "./pages/Home";
import Login from "./pages/Login";
import "./App.css"

function App() {
  const {currentUser} = useAuth()
  console.log(currentUser);
  return (
    <div className="App">
        {
          currentUser ? <Home/> : <Login/>
        }
    </div>
  );
}

export default App;
