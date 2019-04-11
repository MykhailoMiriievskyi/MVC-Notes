class NotesModel {
  constructor() {}

  getNotes(cb) {
    $.get('https://jsonplaceholder.typicode.com/posts')
      .then(function(res) {
        cb(res);
      })
  }

  addNote(noteBody, cb) {
    let newNote = {
      body: noteBody
    }

    $.post('https://jsonplaceholder.typicode.com/posts', newNote)
      .then(function(res) {
        cb(res);
      })
  }
}