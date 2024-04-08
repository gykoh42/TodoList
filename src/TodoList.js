import TodoItem from "./TodoItem";

const TodoList = ({ todos, removeTodo, toggleCompleted }) => {
  return (
    <ul>
      {todos.map((todo, idx) => {
        return (
          <TodoItem
            key={idx}
            id={idx}
            todo={todo}
            removeTodo={removeTodo}
            toggleCompleted={toggleCompleted}
          />
        );
      })}
    </ul>
  );
};

export default TodoList;
