import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import { StyledApp } from './components/styles.components';


function App() {
  const [alert, setAlert]= useState({
    status: '',
    message: '',
  });
  return (
    <StyledApp color='red'>
      <Header />
      <Main />
    </StyledApp>
  );
}

export default App;

// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then(response => response.json())
//   .then(json => console.log(json))


// 4 routes
// posts - show all the posts
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(json => console.log(json))









// /posts/id - show only one post based on the id
// /users - show all the users
// /users/id - show only one user based on the id

// as bonus:
// you can combine data, like showing posts in the user page
// comments on posts page

// npm install axios react-router-dom
// */
