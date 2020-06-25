import React from 'react';
import ReactDOM from 'react-dom';
import SearchBlock from './components/SearchBlock';

const Header = () => {
  const st = {
    fontSize: '45px',
    color: 'aqua'
  }
  return <h1 style={st} className="Header">Todo List</h1>;
}

const TodoList = () => {
  const items = ['Learn html', 'Learn css', 'Learn react'];
  return (
    <ul>
      <li>{items[0]}</li>
      <li>{items[1]}</li>
      <li>{items[2]}</li>
    </ul>
  );
}

const App = () => {

  const isLogged = true;

  const loginBlock = <span>sign in</span>;
  const welcome = <span>Hello</span>;

  return (
    <div>
      { isLogged ? welcome : loginBlock }
      <Header />
      <SearchBlock />
      <TodoList />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
