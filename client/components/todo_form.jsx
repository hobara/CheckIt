import React from 'react';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title:'',
      body:'',
      done:false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const todo = Object.assign({}, this.state, {id: new Date().getTime()});
    this.props.receiveTodo(todo);
    this.setState({
      title:'',
      body:'',
      done:false
    });
  }

  update(property) {
    return e => this.setState({[property]: e.target.value});
  }

  render() {
    return(
      <form className='todo-form'
        onSubmit={this.handleSubmit}
        >
        <label>Todo:
          <input
            className='input'
            value={this.state.title}
            placeholder='Grocery Shopping'
            onChange={this.update('title')}
            required
            />
        </label>
        <label>Detail:
          <textarea
            className='input'
            value={this.state.body}
            placeholder='milk and bananas'
            onChange={this.update('body')}
            required
            >
          </textarea>
        </label>
        <button className='add-button'>Add Todo!</button>
      </form>
    );
  }
}

export default TodoForm;
