import "./App.css";
import { MyBio } from "./components/MyBio/MyBio";
import { SearchBox } from "./components/SearchBox/SearchBox";
import { store } from "./store";
import { Provider } from "react-redux";
import { Login } from "./components/Login/Login";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Login />
        <MyBio />
      </div>
    </Provider>
  );
}

export default App;
