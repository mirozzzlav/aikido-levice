import React from 'react';
import {
  BrowserRouter,
  Route as ReactRoute,
  Routes as RoutesReactDom,
} from 'react-router-dom';
import Layout from 'src/Layout';
import pages from 'src/pages';
import LoaderProvider from 'src/LoaderProvider';
import BlankLayout from 'src/BlankLayout';
import Rozhovor from 'src/pages/special/rozhovor';

function App() {
  return (
    <LoaderProvider>
      <BrowserRouter>
        <RoutesReactDom>
          {pages.map(({ id, route }) => (
            <ReactRoute
              key={id}
              element={<Layout pages={pages} />}
              path={route}
            />
          ))}
          <ReactRoute
            element={
              <BlankLayout>
                <Rozhovor />
              </BlankLayout>
            }
            path="/rozhovor-robo"
          />
        </RoutesReactDom>
      </BrowserRouter>
    </LoaderProvider>
  );
}

export default App;
