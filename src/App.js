import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/Home/Home.js'
import IssueList from './components/IssueList/IssueList.js'
import CommentsList from './components/CommentsList/CommentsList.js'
import NotFound from './components/Errors/NotFound.js'
import IncorrectInputs from './components/Errors/IncorrectInputs.js'


function App() {
  return (
    <div id="container">
      <body id="site-content">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path=":username/:repoName/issues" element={<IssueList />} />
          <Route exact path=":username/:repoName/issues/:issueNumber/comments" element={<CommentsList />} />
          <Route exact path="/404" element={<IncorrectInputs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </body>
    </div>
  );
}

export default App;
