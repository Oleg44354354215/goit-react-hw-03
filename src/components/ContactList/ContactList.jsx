import s from "./ContactList.module.css";
import Contact from "../Contact/Contact";

const ContactList = ({ contacts, handleDelete }) => {
  return (
    <ul className={s.list}>
      {contacts.map((item) => (
        <Contact key={item.id} item={item} handleDelete={handleDelete} />
      ))}
    </ul>
  );
};

export default ContactList;
