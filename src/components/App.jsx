import { useState } from "react";
import { Form } from "./Form/Form";
import Filter from "./Filter/Filter";
import { ContactList } from "./ContactList/ContactList";
import { Toaster } from 'react-hot-toast';




export function App() {

  const [filter, setFilter] = useState('');

  return (
    <div>
      <h1>Phonebook</h1>
      <Form />
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <h2>Contacts</h2>
      <Filter setFilter={setFilter} />
      <ContactList filter={filter} />
    </div>
  )
};

