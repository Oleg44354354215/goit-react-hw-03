import { useEffect, useState } from "react";
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";

import hero from "./data/hero.json";

function App() {
  const [search, setSearch] = useState("");

  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem("contacts")) ?? hero
  );

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const handleDelete = (id) => {
    setContacts((prev) => prev.filter((item) => item.id != id));
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );

  const addContacts = (contact) => {
    const obj = {
      id: crypto.randomUUID(),
      name: contact.name,
      number: contact.number,
    };
    setContacts((prev) => [...prev, obj]);
  };
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm contacts={contacts} addContacts={addContacts} />
      <SearchBox hero={search} filtration={handleSearch} />
      <ContactList contacts={filteredContacts} handleDelete={handleDelete} />
      {filteredContacts.length === 0 && <p>No contacts found.</p>}
    </div>
  );
}
export default App;
