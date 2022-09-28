import React, { useReducer, createContext, useContext } from "react";
/* 
리듀서 만들기 :
useReducer 를 사용하여 상태를 관리. 
*/

const initialTodos = [
  {
    id: 1,
    text: "프로젝트 생성하기",
    done: true,
  },
  {
    id: 2,
    text: "컴포넌트 스타일링하기",
    done: true,
  },
  {
    id: 3,
    text: "Context 만들기",
    done: false,
  },
  {
    id: 4,
    text: "기능 구현하기",
    done: false,
  },
];

const todoReducer = (state, action) => {
  switch (action.type) {
    case "CREATE":
      return state.concat(action.todo);
    case "TOGGLE":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    case "REMOVE":
      return state.filter((todo) => todo.id !== action.id);
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
/* 
Context 만들기 :

이제, state 와 dispatch 를 Context 통하여 다른 컴포넌트에서 바로 사용 할 수 있게 해줄건데요, 
우리는 하나의 Context 를 만들어서 state 와 dispatch 를 함께 넣어주는 대신에, 
두개의 Context 를 만들어서 따로 따로 넣어줄 것입니다. 

이렇게 하면 dispatch 만 필요한 컴포넌트에서 불필요한 렌더링을 방지 할 수 있습니다. 
추가적으로, 사용하게 되는 과정에서 더욱 편리하기도 합니다.
*/
const TodoStateContext = createContext();
const TodoDispatchContext = createContext();

export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialTodos);
  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
};

/* 
커스텀 Hook 만들기:
컴포넌트에서 useContext 를 직접 사용하는 대신에, 
useContext 를 사용하는 커스텀 Hook 을 만들어서 내보내주겠습니다.
*/
export const useTodoState = () => {
  return useContext(TodoStateContext);
};
export const useTodoDispatch = () => {
  return useContext(TodoDispatchContext);
};
