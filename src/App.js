import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layouts146 from './component/Post/Layouts/Layouts146';
import ItemList from './ItemList';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" component={Layouts146} />
        <Route exact path="/items" component={ItemList} />
        {/* <Route path="/items/:id" component={} /> */}
      </Routes>
    </Router>
  );
}

export default App;
