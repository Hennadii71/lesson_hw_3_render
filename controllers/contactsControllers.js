import Contact from "../models/Contact.js";
import HttpError from "../helpers/HttpError.js";
import {
  createContactSchema,
  updateContactSchema,
} from "../schemas/contactsSchemas.js";

const getContacts = async (req, res, next) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (error) {
    next(error);
  }
};

// const getById = async (req, res, next) => {
//   try {
//     const { id } = req.params;
//     const contact = await getContactsById(id);
//     if (!contact) {
//       throw HttpError(404, `Contact with id=${id} Not Found`);
//     }
//     res.json(contact);
//   } catch (error) {
//     next(error);
//   }
// };

const createContact = async (req, res, next) => {
  try {
    const { error } = createContactSchema.validate(req.body);
    if (error) {
      throw HttpError(400, error.message);
    }
    const newContact = await Contact.create(req.body);
    res.status(201).json(newContact);
  } catch (error) {
    next(error);
  }
};

// const updateContact = async (req, res, next) => {
//   try {
//     const { error } = updateContactSchema.validate(req.body);
//     if (error) {
//       throw HttpError(400, error.message);
//     }
//     const { id } = req.params;
//     const updatedContact = await updateContactById(id, req.body);
//     if (!updatedContact) {
//       throw HttpError(404, `Contact with id=${id} Not Found`);
//     }
//     res.json(updatedContact);
//   } catch (error) {
//     next(error);
//   }
// };

// const deleteContact = async (req, res, next) => {
//   try {
//     const { id } = req.params;
//     const deletedContact = await deleteContactById(id);
//     if (!deletedContact) {
//       throw HttpError(404, `Contact with id=${id} Not Found`);
//     }
//     res.status(200).json(deletedContact);
//     // res.status(204).send();
//     // res.json({message: "Contact deleted"});
//   } catch (error) {
//     next(error);
//   }
// };

export default {
  getContacts,
  // getById,
  createContact,
  // updateContact,
  // deleteContact,
};
