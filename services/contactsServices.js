import fs from "fs/promises";
import path from "path";
import { nanoid } from "nanoid";

const contactsPath = path.resolve("contacts", "contacts.json");

const updateContacts = async (contacts) => {
  fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
};

export const getAllContacts = async () => {
  const contacts = await fs.readFile(contactsPath);
  return JSON.parse(contacts);
};

export const getContactsById = async (id) => {
  const allContacts = await getAllContacts();
  const contactId = allContacts.find((contact) => contact.id === id);
  return contactId || null;
};

export const addContact = async (data) => {
  const allContacts = await getAllContacts();
  const newContact = { id: nanoid(), ...data };
  allContacts.push(newContact);
  await updateContacts(allContacts);
  return newContact;
};

export const updateContactById = async (id, data) => {
  const allContacts = await getAllContacts();
  const index = allContacts.findIndex((item) => item.id === id);
  if (index === -1) {
    return null;
  }
  allContacts[index] = { ...allContacts[index], ...data };
  await updateContacts(allContacts);
  return allContacts[index];
};

export const deleteContactById = async (id) => {
  const allContacts = await getAllContacts();
  const index = allContacts.findIndex((item) => item.id === id);
  if (index === -1) {
    return null;
  }
  const [deleteContact] = allContacts.splice(index, 1);
  await updateContacts(allContacts);
  return deleteContact;
};
