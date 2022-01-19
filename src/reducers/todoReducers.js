const initialData = {
  list: [],
};

const todoReducers = (state = initialData, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const { id, data } = action.payload;
      if (data.length > 2) {
        //of length of to-do is > 2, then only add the to-do in the list
        return {
          ...state,
          list: [
            ...state.list,
            {
              id: id,
              data: data,
            },
          ],
        };
      }
      break;
    case "DELETE_TODO":
      const newList = state.list.filter((elem) => elem.id !== action.id);

      return {
        ...state,
        list: newList,
      };
    // break;
    case "REMOVE_TODO":
      return {
        ...state,
        list: [],
      };
    // break;

    default:
      return state;
  }
};

export default todoReducers;
