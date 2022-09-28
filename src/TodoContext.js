import React, { useReducer, createContext, useContext, useRef } from "react";

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
1. state를 위한 Context와  dispatch를 위한 Context 를 따로 만들기.
   이렇게 하면 dispatch 만 필요한 컴포넌트에서 불필요한 렌더링을 방지 할 수 있고, 사용하게 되는 과정에서 더욱 편리하기도 하다.
2. nextId를 위한 Context도 추가 해줬다.
    nextId 가 의미하는 값은 새로운 항목을 추가 할 때 사용 할 고유 ID 이다.
    이 값은, useRef 를 사용하여 관리한다.
*/
const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoNextIdContext = createContext();

export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialTodos);
  const nextId = useRef(5);
  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        <TodoNextIdContext.Provider value={nextId}>
          {children}
        </TodoNextIdContext.Provider>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
};

/* 
커스텀 Hook 만들기 :
컴포넌트에서 useContext 를 직접 사용하는 대신에, 
useContext 를 사용하는 커스텀 Hook 을 만들어서 내보내주기.
*/
/* 
export const useTodoState = () => {
  return useContext(TodoStateContext);
};
export const useTodoDispatch = () => {
  return useContext(TodoDispatchContext);
};
export const useTodoNextId = () => {
  return useContext(TodoNextIdContext);
}; 
*/

/* 
커스텀 Hook 에서 에러 처리 :
만든 useTodoState, useTodoDispatch, useTodoNextId 3개의 Hook 을 사용하려면, 
해당 컴포넌트가 TodoProvider 컴포넌트 내부에 렌더링되어 있어함.
(예: App 컴포넌트에서 모든 내용을 TodoProvider 로 감싸기). 
만약 TodoProvider 로 감싸져있지 않다면 에러를 발생시키도록 
커스텀 Hook 을 수정.
*/
export const useTodoState = () => {
  const context = useContext(TodoStateContext);
  if (!context) {
    throw new Error("Cannot find TodoProvider");
  }
  return context;
};
export const useTodoDispatch = () => {
  const context = useContext(TodoDispatchContext);
  if (!context) {
    throw new Error("Cannot find TodoProvider");
  }
  return context;
};
export const useTodoNextId = () => {
  const context = useContext(TodoNextIdContext);
  if (!context) {
    throw new Error("Cannot find TodoProvider");
  }
  return context;
};
