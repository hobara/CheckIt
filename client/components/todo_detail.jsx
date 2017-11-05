import React from 'react';

class TodoDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title:'',
      body:'',
      done:false
    };
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  // handleSubmit(e) {
  //   e.preventDefault;
  //   this.setState({['title']: this.props.todo.title});
  //   console.log(this.state);
  //   const todo = Object.assign({}, this.state);
  //   this.props.receiveTodo(todo);
  //   this.state = {
  //     title:'',
  //     body:'',
  //     done:false
  //   };
  // }
  //
  // update(property) {
  //   console.log(this.state);
  //   return e => this.setState({[property]: e.target.value});
  // }

  render() {
    const { todo, removeTodo, receiveTodo } = this.props;
    console.log(this.props);
    return(
      <div>
        <p>{todo.body}</p>
        <button
          className='todo-body'
          onClick={removeTodo}
          >Delete Todo</button>
      </div>
    );
        // <form className='todo-update'
        //   >
        //   <textarea
        //     className='input'
        //     value={this.state.body}
        //     placeholder='update the detail'
        //     onChange={this.update('body')}
        //     required>
        //   </textarea>
        //   <button className='update-button'
        //     onClick={() => this.handleSubmit()}
        //     >Update detail!</button>
        // </form>
  }
}

export default TodoDetail;
