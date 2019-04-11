class NotesView {
  constructor() {
    this.selectors = {
      list: $('#notes .notes__list'),
      addBtn: $('#notes .notes__add'),
      field: $('#notes .notes__field')
    }
  }

  renderNotes(notes) {
    notes.forEach(note => {
      this.renderNewNote(note);
    });
  }

  renderNewNote(note) {
    this.selectors.list.prepend(`<div class="notes__item"><b>${note.body}</b></div><br>`);
  }

  listenAddingNote(cb) {
    const self = this;
    self.selectors.addBtn.click(function() {
      let noteBody = self.selectors.field.val();
      cb(noteBody);
    })
  }
}