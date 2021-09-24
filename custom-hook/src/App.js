import { useState, useEffect } from 'react';
import './App.css';

function useLocalStorage(key, defaultValue = '') {
  const [state, setState] = useState(() => window.localStorage.getItem(key) || defaultValue);

  useEffect(() => {
    window.localStorage.setItem(key, state)
  }, [state])

  return [state, setState]
}


function App() {

  // function getInitialState() {
  //   console.log('get intial state');
  //   return window.localStorage.getItem('name') || ''
  // }

  function handleChange(event) {
    setName(event.target.value);
  }
  // use a lazy initializer to call getInitialState -> pass a function to useState
  // const [name, setName] = useState(() => window.localStorage.getItem('name') || '');

  // useEffect(() => {
  //   window.localStorage.setItem('name', name)
  // }, [name])

  // use the custom hook instead
  const [name, setName] = useLocalStorage('name');


  return (
    <div className="App">
      <header className="App-header">
        {name ? <strong>Hello {name} 👋</strong> : 'Please type your name'}
        <input type="text" onChange={handleChange} />
      </header>
    </div>
  );
}

export default App;
