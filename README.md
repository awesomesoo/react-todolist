# Todo List 만들기

## 💜1. 프로젝트 UI 구현 (컴포넌트 만들기)

![img](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FnQG8W%2FbtrNcV4ZzBO%2F2diC6twZUxLTYbcZEGrDM0%2Fimg.png)

### 컴포넌트 종류

### TodoProvider

useReducer 를 사용하여 상태를 관리하는 컴포넌트이다.

### TodoTemplate

투두리스트의 레이아웃을 설정하는 컴포넌트이다.
페이지 중앙에 그림자가 적용된 흰색 박스를 보여준다.

### TodoHead

오늘의 날짜와 요일을 보여주고, 앞으로 해야 할 일이 몇 개 남았는지 보여준다.

### TodoList

할 일에 대한 정보가 들어있는 todos 배열을 내장 함수 map을 사용하여 여러 개의 TodoItem 컴포넌트를 렌더링 해준다.

### TodoItem

각 할 일에 대한 정보를 렌더링 해주는 컴포넌트이다.
좌측에 있는 원을 누르면 할 일의 완료 여부를 toggle 할 수 있다.
할 일이 완료됐을 땐 좌측에 체크가 나타나고 텍스트의 색상이 연해진다.
마우스를 올리면 휴지통 아이콘이 나타나고 이를 누르면 항목이 삭제된다.

### TodoCreate

새로운 할 일을 등록할 수 있게 해주는 컴포넌트이다.
Todo Template의 하단부에 초록색 원 버튼을 렌더링 해주고, 이를 클릭하면 할 일을 입력할 수 있는 폼이 나타난다.
버튼을 다시 누르면 폼이 사라진다.

## 💜2. Context API 를 활용한 상태 관리

## 💜3. 기능 구현하기

#### 정리 : https://awesome-soo.tistory.com/41
