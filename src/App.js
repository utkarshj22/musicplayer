import "./App.css";

import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducers";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import SongList from "./components/SongList";
import Playlist from "./components/Playlist";
import IndividualPlaylist from "./components/IndividualPlaylist";
import ButtonSwitch from "./components/ButtonSwitch";

function App() {
  const composeEnhancers =
    typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
      : compose;

  const enhancer = composeEnhancers(
    applyMiddleware(thunk)
    // other store enhancers if any
  );

  let store = createStore(reducer, enhancer);

  return (
    <Provider store={store}>
      <Router>
        <ButtonSwitch />
        <Switch>
          <Route path="/songs" component={SongList} />
          <Route exact path="/playlist" component={Playlist} />
          <Route path="/playlist/:playListName" component={IndividualPlaylist} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
