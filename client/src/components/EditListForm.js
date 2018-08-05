import React, { Component } from 'react';
class EditListForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      id: this.props.list.id,
      title: this.props.list.title,
      excerpt: this.props.list.excerpt
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }
  handleSubmit(e){
    e.preventDefault();
    const { id, title, excerpt } = this.state;
    this.props.editList(id, title, excerpt);
  }
  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <input name="title"
               type="text"
               placeholder="Titulo..."
               value={this.state.title}
               onChange={this.handleChange}/>
        <input name="excerpt"
               type="text"
               placeholder="Extracto..."
               value={this.state.excerpt}
               onChange={this.handleChange}/>
        <button>Editar</button>
      </form>
    )
  }
}

export default EditListForm;