import React from 'react';
import {
  BrowserRouter,
  Route as ReactRoute,
  Routes as RoutesReactDom,
} from 'react-router-dom';
import Layout from 'src/Layout';
import pages from 'src/pages';
import WindowProvider from 'src/WindowProvider';

function App() {
  const page = <Layout pages={pages} />;

  return (
    <WindowProvider>
      <BrowserRouter>
        <RoutesReactDom>
          {pages.map(({ id, route }) => (
            <ReactRoute key={id} element={page} path={route} />
          ))}
        </RoutesReactDom>
      </BrowserRouter>
    </WindowProvider>
  );
}

export default App;
