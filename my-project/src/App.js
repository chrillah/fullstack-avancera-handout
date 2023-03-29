import logo from './logo.svg';
import './App.css';
import FunctionalComponent from './components/FunctionalComponent';
import ClassComponent from './components/ClassComponent';
import CounterButton from './components/CounterButton';
import CounterButton1 from './components/CounterButton1';
import CounterButton2 from './components/CounterButton2';
import CounterButton3 from './components/CounterButton3';
import CounterButtonUseState from './components/CounterButtonUseState';
import CounterButtonStateProps from './components/CounterButtonStateProps';
import FunctionalUseEffect from './components/FunctionalUseEffect';
import TestUseEffect from './components/TestUseEffect';
import FetchUseEffect from './FetchUseEffect';

import StyleFunctionalComponentClassName from './components/StyleFunctionalComponentClassName'
import StyleInlineStyle from './components/StyleInlineStyle';
import StyledComponents from './components/StyledComponents';
import StyledComponentsProps from './components/StyledComponentsProps';

function App() {
  return (
    <div className="App">
        {/* Komponenter och props */}
        <FunctionalComponent />
        <ClassComponent />

        <CounterButton value={1}/>
        <CounterButton1 />
        <CounterButton2 />
        <CounterButton3 />

        {/* useState */}
        <CounterButtonUseState />
        <CounterButtonStateProps initialValue={5} />

        {/* useEffect */}

        <FunctionalUseEffect />
        <TestUseEffect />
        <FetchUseEffect />

        {/* Style, className & styled-component */}
        <StyleFunctionalComponentClassName />
        <StyleInlineStyle />

        <StyledComponents />
        <StyledComponentsProps />

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
