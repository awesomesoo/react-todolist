import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import TodoTemplate from './components/TodoTemplate';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';
import TodoCreate from './components/TodoCreate';
import { TodoProvider } from './TodoContext';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  // TodoProvider 바깥에서 컨텍스트를 사용하려면 에러가 뜹니다.
  // 그러면 잘못된 곳에서 함수를 호출했구나를 알 수 있어요.
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <TodoProvider>
        <GlobalStyle />
        <TodoTemplate>
          <TodoHead />
          <TodoList />
          <TodoCreate />
        </TodoTemplate>
      </TodoProvider>
    </BrowserRouter>
  );
}

export default App;
