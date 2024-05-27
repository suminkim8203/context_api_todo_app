import styled from "@emotion/styled";
import { TodoListContext } from "contexts/TodoListContext";
import { useContext } from "react";
import TodoItem from "./TodoItem";

const TodoListWrapStyle = styled.div`
  display: flex;
  flex-direction: column;
`;

const TodoList = () => {
  const { todoList, onDelete } = useContext(TodoListContext);

  return (
    <TodoListWrapStyle>
      {todoList.map(todo => (
        <TodoItem
          key={todo} // 지금은 todo로 key 값을 설정했지만 key 값은 유일한 값이어야 한다.
          label={todo}
          onDelete={() => onDelete(todo)}
        />
      ))}
    </TodoListWrapStyle>
  );
};

export default TodoList;
