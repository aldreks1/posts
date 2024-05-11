import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import PostList from "./components/PostList";
import "./styles.css";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <PostList />
      </div>
    </Provider>
  );
}

export default App;
