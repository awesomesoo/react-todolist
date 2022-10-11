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
  return (
    <>
      {/* TodoProvider 바깥에서 컨텍스트를 사용하려면 에러가 뜹니다.
          그러면 잘못된 곳에서 함수를 호출했구나를 알 수 있어요. */}
      <TodoProvider basename={process.env.PUBLIC_URL}>
        <GlobalStyle />
        <TodoTemplate>
          <TodoHead />
          <TodoList />
          <TodoCreate />
        </TodoTemplate>
      </TodoProvider>
    </>
  );
}

export default App;
