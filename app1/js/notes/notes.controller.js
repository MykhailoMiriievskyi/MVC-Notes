class NotesController {
  constructor(model, view) {
    this._model = model;
    this._view = view;
  }

  init() {
    var self = this;
    this._model.getNotes(function(notes) {
      self._view.renderNotes(notes);
    });

    this._view.listenAddingNote(function(noteBody) {
      self._model.addNote(noteBody, function(addedNote) {
        self._view.renderNewNote(addedNote)
      })
    })
  }
}