import styled from "styled-components";
import { useTodoState } from "../TodoContext";

const TodoHeadBlock = styled.div`
  padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e9ecef;
  h1 {
    margin: 0;
    font-size: 36px;
    color: #343a40;
  }
  .day {
    margin-top: 4px;
    color: #868e96;
    font-size: 21px;
  }
  .tasks-left {
    color: #20c997;
    font-size: 18px;
    margin-top: 40px;
    font-weight: bold;
  }
`;

/* 
1. Context 를 만들어주었으니, 이제 Context 와 연동을 하여 기능을 구현하자. 
Context 에 있는 state 를 받아와서 렌더링을 하고, 필요한 상황에는 특정 액션을 dispatch 하면 된다.
TodoHead 에서는 done 값이 false 인 항목들의 개수를 화면에 보여준다.
2. 날짜가 보여지는 부분을 작업해주겠습니다. 
이 과정에서는 Date 의 toLocaleString 이라는 함수를 사용합니다.
*/
const TodoHead = () => {
  const todos = useTodoState(); // Context 와 연동을 하여 기능을 구현
  const undoneTasks = todos.filter((todo) => !todo.done); //done 값이 false 인 항목들의 개수를 화면에 보여준다.

  // 날짜가 보여지는 부분을 작업
  const today = new Date();
  const dateString = today.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const dayName = today.toLocaleDateString("ko-KR", { weekday: "long" });

  return (
    <TodoHeadBlock>
      <h1>{dateString}</h1>
      <div className="day">{dayName}</div>
      <div className="tasks-left">할 일 {undoneTasks.length}개 남음</div>
    </TodoHeadBlock>
  );
};

export default TodoHead;
