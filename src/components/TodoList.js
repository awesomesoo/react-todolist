import styled from "styled-components";
import TodoItem from "./TodoItem";
import { useTodoState } from "../TodoContext";

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;
/* 
TodoList 에서는 state 를 조회하고 이를 렌더링해주어야 합니다. 
그리고, onToggle, onRemove 와 같이 항목에 변화를 주는 작업은 이 컴포넌트에서 신경 쓸 필요 없습니다. 
이 작업은 우리가 각 TodoItem 에서 해줄 것입니다.
*/
const TodoList = () => {
  const todos = useTodoState();
  return (
    <TodoListBlock>
      {/* <TodoItem text="프로젝트 생성하기" done={true} />
      <TodoItem text="컴포넌트 스타일링 하기" done={true} />
      <TodoItem text="Context 만들기" done={false} />
      <TodoItem text="기능 구현하기" done={false} /> */}
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          done={todo.done}
        />
      ))}
    </TodoListBlock>
  );
};

export default TodoList;
