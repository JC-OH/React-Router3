import React from 'react';
import ReactDOM from 'react-dom';
// 3번 줄에서는, react-router 에서 4가지의 객체를 불러왔습니다.
// Router: 이 컴포넌트는 react-router 의 주요 컴포넌트로서, 라우터의 속성을 정의하고 이 내부에서 라우트 설정을 합니다.
// Route: 이 컴포넌트는 우리가 설정한 경로에서 어떤 컴포넌트를 렌더링 할 지 정하는 컴포넌트 입니다. 이 라우트 컴포넌트의 자식에 또 다른 Route 컴포넌트를 넣으면 해당 자식 컴포넌트는 부모 라우트의 서브 라우트가 됩니다.
// IndexRoute: 라우트에서 서브라우트가 주어지지 않았을 때, 즉 특정 라우트의 / 경로로 들어 왔을 때, 이 라우트에서 지정한 컴포넌트를 보여줍니다.
// browserHistory: HTML5 의 History API 를 사용하여 브라우저의 URL 변화를 주시하고, 조작합니다.
import { Router, Route, IndexRoute, browserHistory } from 'react-router-3';

import './index.css';
import App from './App';
import Home from './containers/Home';
import About from './containers/About';
import Posts from './containers/Posts';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Router history={browserHistory}>
        {/*13번 줄에서는 Router 컴포넌트를 정의하고 history 값을 browserHistory 로 설정 했습니다.*/}
        {/*history 는 브라우저의 주소창이 어떻게 바뀌는지 주시하고 주소를 라우터에서 인식할 수 있도록 location 객체로 파싱을 해줍니다.*/}
        {/*Route 컴포넌트의 path 를 “/” 로 설정했습니다. 즉, / 경로로 들어왔을땐 App 컴포넌트를 보여주라고 설정하는 것 이죠.*/}
        <Route path="/" component={App}>
            {/*IndexRoute: 라우트에서 서브라우트가 주어지지 않았을 때, 즉 특정 라우트의 / 경로로 들어 왔을 때, 이 라우트에서 지정한 컴포넌트를 보여줍니다.*/}
            {/*여러개의 Route 들이 자식으로 있는데, 이 자식들은 URL 이 매칭 하는 경우, App 컴포넌트의 자식으로 들어갑니다. 예를들어서,  / 경로의 경우엔 IndexRoute 를 사용하여 Home 컴포넌트를 렌더링합니다. /about 경로의 경우엔 About 컴포넌트를 렌더링하죠.*/}
            <IndexRoute component={Home}/>
            <Route path="about" component={About}/>
            <Route path="post" component={Posts}/>
        </Route>
    </Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
