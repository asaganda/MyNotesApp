import { createContainer } from 'meteor/react-meteor-data'
import { Notes } from '../../api/notes/notes'
import { SingleFieldSubmit } from '../forms/single_field_submit'

export default createContainer(() => {

  const handleCreate = (content) => {
    Notes.insert({
      content:content,
      updatedAt: new Date()
    })
  }

  return {
    handleSubmit: handleCreate,
    placeholder: "New Note",
  }

}, SingleFieldSubmit)