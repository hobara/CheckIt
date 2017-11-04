import { connect } from 'react-redux';
import { receiveTodos, receiveTodo } from '../actions/todo_actions';
import { allTodos } from '../reducers/selectors';
import TodoList from './todo_list';

const mapStateToProps = state => ({
  todos: allTodos(state),
  state
});

const mapDispatchToProps = dispatch => ({
  receiveTodos: () => dispatch(receiveTodos()),
  receiveTodo: todo => dispatch(receiveTodo(todo))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
