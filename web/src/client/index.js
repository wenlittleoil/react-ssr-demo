import React from 'react';
import * as ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import StyleContext from 'isomorphic-style-loader/StyleContext'
// import nativeInsertCss from 'isomorphic-style-loader/insertCss';
import routes from '@/routes';
import Layout from '@containers/Layout';
import {
  Provider
} from 'react-redux';
import getStore from '@store/getStore';

const initialState = window.INITIAL_STATE;
const store = getStore(initialState.num);

const insertCss = (...styles) => {
  styles.forEach(style => {
    const cssContent = style._getContent().default[0][1];
    const styleEle = document.querySelector('#inline-style');
    const curStyleText = styleEle.textContent;
    if (!curStyleText.includes(cssContent)) {
      styleEle.textContent = curStyleText + cssContent;
      // console.log('[客户端插入样式成功]:', cssContent);
    }
  });
}

const App = () => {
  return (
    <Provider store={store}>
      <StyleContext.Provider value={{ insertCss }}>
        <BrowserRouter>
          <Layout>
            <Routes>
              {routes.map(route => (
                <Route {...route} />
              ))}
            </Routes>
          </Layout>
        </BrowserRouter>
      </StyleContext.Provider>
    </Provider>
  );
}

ReactDOM.hydrateRoot(
  document.getElementById('root'),
  <App />
);
