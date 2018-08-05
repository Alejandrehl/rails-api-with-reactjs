import React from 'react';

const NewListForm = ({onNewList = f => f}) => {
  let title , excerpt
  const submit = e => {
    e.preventDefault()
    onNewList(title.value, excerpt.value)
    title.value = ''
    excerpt.value = ''
    title.focus()
  }

  return (
    <form onSubmit={submit}>
      <input ref={input => title = input}
             type ="text"
             placeholder = "Título ..." required />
      <input ref={input => excerpt = input}
             type ="text"
             placeholder = "Extracto ..." required />
      <button>Agregar Lista</button>
    </form>
  )
}

export default NewListForm;