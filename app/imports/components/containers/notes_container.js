import { createContainer } from 'meteor/react-meteor-data'
import { Notes } from '../../api/notes/notes'
import { List } from '../lists/list'

export default createContainer(() => {

  const notes = Notes.find({}, { sort: { updatedAt: -1 }}).fetch()

  const handleCreate = (content) => {
    Notes.insert({
      content:content,
      updatedAt: new Date()
    })
  }

  const handleDelete = (note) => {
    Notes.remove({_id: note._id})
  }

  return {
    handleSubmit: handleCreate,
    placeholder: "New Note",
    collection: notes,
    handleDelete
  }

}, List)