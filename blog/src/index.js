import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

import PostIndex from './components/posts_index';
import PostsNew from './components/post_new';
import PostsShow from './components/post_show';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      {/* O compoenten Switch serve para evitar um problema no React-Router, ele serve 
          para renderizar apenas a primeira rota encontrada que bate com a rota 
          solicitada.
          Para entende-lo retireo daqui e entre em /posts/new, ele vai renderizar 
          a view posts e a view new */}
      <div>
      <Switch>
        <Route path="/posts/new" component={PostsNew} />
        <Route path="/posts/:id" component={PostsShow} />
        <Route path="/" component={PostIndex} />
      </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
