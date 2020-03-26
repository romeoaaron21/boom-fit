import uuid4 from "uuid4";
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_NAME": 
      localStorage.setItem("name", action.name)
      return {...state, user: {...state.user, name: action.name}};
    
    case "SET_MAIN_FOCUS": 
      localStorage.setItem("main_focus", action.main_focus)
      return {...state, user: {...state.user, mainFocus: action.main_focus, prevMainFocus: action.prev_focus}};
    
    case "ADD_TODO":
      const newTodo = {
        id: uuid4(),
        user_id: state.user.user_id,
        tag_id: action.tag,
        text: action.payload,
        complete: false
      };
      const addedTodo = [...state.todos, newTodo];
      return { ...state, todos: addedTodo };

    case "CURRENT_TODO":
      return {
        ...state,
        currentTodo: action.payload
      };

    case "TOGGLE_TODO":
      const toggleTodos = state.todos.map(t =>
        t.id === action.payload.id
          ? { ...action.payload, complete: !action.payload.complete }
          : t
      );
      return { ...state, todos: toggleTodos };

    case "REMOVE_TODO":
      const filteredTodos = state.todos.filter(t => t.id !== action.payload.id);
      return { ...state, todos: filteredTodos };

    case "UPDATE_TODO":
      const updateTodos = state.todos.map(t =>
        t.id === action.payload.id
          ? { ...action.payload, text: action.text }
          : t
      );
      return { ...state, todos: updateTodos, currentTodo: {} };

    case "ADD_GOAL":
       const newGoal = {
         id: uuid4(), 
         tag_id: state.tags.length+1, 
         title: action.payload
        }
        ;
      const addedGoal = [...state.tags, newGoal ];
      return { ...state, tags: addedGoal };
      
      case "REMOVE_GOAL":
      const filteredGoals = state.tags.filter(t => 
        t.tag_id !== action.payload.tag_id 
      )
      const filterTodoFromGoals = state.todos.filter(t=>
        t.tag_id !== action.payload.tag_id 
      )
      return {...state, tags: filteredGoals, todos: filterTodoFromGoals}
      
      case "CURRENT_GOAL":
        return {
          ...state,
          currentGoal: action.payload
        };

      case "UPDATE_GOAL":
        const updateGoals = state.tags.map(g=>
          g.id === action.payload.id
            ? {...action.payload, title: action.title}
            :g
        )

      return { ...state, tags: updateGoals, currentGoal: {} };
      
      default:
      return state;
  }
};
export default reducer;
