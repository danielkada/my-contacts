const { uuid } = require('uuidv4');

const contacts = [
  {
    id: uuid(),
    name: 'Daniel',
    email: 'daniel@email.com',
    phone: '12312312',
    category_id: uuid(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => resolve(contacts));
  }
}

module.exports = new ContactsRepository();
