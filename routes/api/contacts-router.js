import express from "express";
import contactsControllers from "../../controllers/contactsControllers.js";
import isEmptyBody from "../../middlewares/isEmptyBody.js";
const contactsRouter = express.Router();

contactsRouter.get("/", contactsControllers.getContacts);

// contactsRouter.get("/:id", contactsControllers.getById);

contactsRouter.post("/", isEmptyBody, contactsControllers.createContact);

// contactsRouter.put("/:id", isEmptyBody, contactsControllers.updateContact);

// contactsRouter.delete("/:id", contactsControllers.deleteContact);

// contactsRouter.delete("/:id", (req, res) => {
//   res.json(contacts[0]);
// });

export default contactsRouter;
