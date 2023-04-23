import axios from 'axios';


axios.defaults.baseURL =
  'https://644502fab80f57f581af3a73.mockapi.io/contacts/contacts';

export async function fetchContacts() {
  const response = await axios.get(`/contacts/contacts`);
  return response.data;
}
//newContact будет новый контакт
export async function addContact(newContact) {
  const response = await axios.post(`/contacts/contacts`, newContact);
  return response.data;
}

//contactId удаление по id
export async function deleteContact(contactId) {
  const response = await axios.delete(`/contacts/contacts/${contactId}`);
  return response.data;
}
