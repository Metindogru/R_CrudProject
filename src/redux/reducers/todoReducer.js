const initialState = {
  todos: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      const newTodos = state.todos.concat(action.payload);
      return { todos: newTodos };

    case "DELETE":
      //*Diziden payload ile gelen ID'li elemanları kaldır
      const filtred = state.todos.filter((i) => i.id !== action.payload);

      return { todos: filtred };

    case "TOGGLE":
      //* is_down değerini ters çevir
      const updated = { ...action.payload, is_done: !action.payload.is_done };

      //*Dizide ki eski nesnenin yerine yenisini koy
      const updateTodos = state.todos.map((i) =>
        i.id === updated.id ? updated : i
      );
      return { todos: updateTodos };

    case "UPDATE":
      //*Aksiyon'dan gelen payloadı dizide güncelle
      const editedTodos = state.todos.map((i) =>
        i.id === action.payload.id ? action.payload : i
      );
      return { todos: editedTodos };

    default:
      return state;
  }
};

export default todoReducer;
