import React, { FC, ReactElement } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../Home';
import GlobalStyles from '../GlobalStyles';

const App: FC = (): ReactElement => (
  <>
    <GlobalStyles/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </>
);

export default App;
