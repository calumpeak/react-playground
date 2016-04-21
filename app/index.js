// DOCS!! https://facebook.github.io/react/docs/getting-started.html

// Style
import './style.css';

// Modules
import React from 'react';
import ReactDom from 'react-dom';
import { createStore } from 'redux';

const Hello = ({message}) => (
    <div>{message}</div>
);

const List = ({listArr}) => (
    <ul>{listArr.map(list => <li>{list}</li>)}</ul>
);

const list = ['this', 'is', 'a', 'list'];

ReactDom.render(
    <div>
        <Hello message="Hello World!!" />
        <List listArr={list}/>
    </div>
    , document.getElementById('app')
);


// const countReducer = (state = 0, action) => {
//     switch (action.type) {
//         case 'INCREMENT':
//             return ++state;
//         case 'DECREMENT':
//             return --state;
//         default:
//             return state;
//     }
// };
//
// // Redux Store
// const store = createStore(countReducer);
//
//
// const Counter = ({ value, onIncrement, onDecrement }) => (
//     <div>
//         <h1>{value}</h1>
//         <button onClick={onIncrement}>+</button>
//         <button onClick={onDecrement}>-</button>
//     </div>
// )
//
//
// const render = () => {
//     ReactDom.render(
//         <Counter
//             value={store.getState()}
//             onIncrement={() =>
//                 store.dispatch({
//                     type: 'INCREMENT'
//                 })
//             }
//             onDecrement={() =>
//                 store.dispatch({
//                     type: 'DECREMENT'
//                 })
//             }
//         />,
//         document.getElementById('app')
//     );
// };
//
// // Subscribe
// store.subscribe(render);
// render();
