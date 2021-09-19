const { v4 } = require('uuid');

let contacts = [
  {
    id: v4(),
    name: 'Daniel',
    email: 'daniel@email.com',
    phone: '12312312',
    category_id: v4(),
  },
  {
    id: v4(),
    name: 'Kadã',
    email: 'kada@email.com',
    phone: '12312312',
    category_id: v4(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => resolve(contacts));
  }

  findById(id) {
    return new Promise((resolve) => resolve(
      contacts.find((contact) => contact.id === id),
    ));
  }

  delete(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id);
      resolve();
    });
  }

  findByEmail(email) {
    return new Promise((resolve) => resolve(
      contacts.find((contact) => contact.email === email),
    ));
  }

  create(name, email, phone, category_id) {
    return new Promise((resolve) => {
      const newContact = {
        id: v4(),
        name,
        email,
        phone,
        category_id,
      };
      contacts.push(newContact);
      resolve(newContact);
    });
  }
}

module.exports = new ContactsRepository();
