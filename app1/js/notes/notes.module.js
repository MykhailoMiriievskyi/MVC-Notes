class NotesModule {
  constructor() {
    this.notesView = new NotesView();
    this.notesModel = new NotesModel();
    this.notesController = new NotesController(this.notesModel, this.notesView);
  }

  init() {
    this.notesController.init();
  }
}
  





 