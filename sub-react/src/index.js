import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'antd/dist/antd.css'
import './public-path'
import reportWebVitals from './reportWebVitals';

function render (props = {}) {
  console.log('sub-react', props)
  const { container } = props;
  ReactDOM.render(<App />, container ? container.querySelector('#root') : document.querySelector('#root'));
}

if (!window.__POWERED_BY_QIANKUN__) {
  render()
}


reportWebVitals();

export async function bootstrap () {
  console.log('[react16] react app bootstraped');
}

export async function mount (props) {
  console.log('[react16] props from main framework', props);
  render(props);
}

export async function unmount (props) {
  const { container } = props;
  ReactDOM.unmountComponentAtNode(container ? container.querySelector('#root') : document.querySelector('#root'));
}