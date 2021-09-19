class ContactController {
  index(request, response) {
    // listar todos os registros
    response.send('Send from Contact Controller');
  }

  show() {
    // Obter um registro
  }

  store() {
    // Criar um novo registro
  }

  update() {
    // Editar um registro
  }

  delete() {
    // Deletar um registro
  }
}

module.exports = new ContactController();
