import { useDispatch, useSelector } from "react-redux";
import ContactForm from "./components/contactForm/ContactForm";
import ContactList from "./components/contactList/ContactList";
import SearchBox from "./components/searchBox/SearchBox";
import { changeFilter } from "./redux/filtersSlice";
import { addContact, deleteContact } from "./redux/contactsSlice";
import * as Yup from "yup";
import s from "./App.module.css";

const fieldValidation = Yup.object().shape({
  name: Yup.string().min(3).max(50).required(),
  number: Yup.string().min(2).max(50).required().matches(/^[0-9()\-\s]+$/),
});

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items);
  const searchQuery = useSelector((state) => state.filters.name);

  const handleSearch = (e) => dispatch(changeFilter(e.target.value));
  const filterContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(searchQuery.toLowerCase()));
  const handleSubmit = (value, actions) => {
    dispatch(addContact(value));
    actions.resetForm();
  };

  return (
    <div className={s.container}>
      <h1 className={s.title}>Phonebook</h1>
      <SearchBox value={searchQuery} onChange={handleSearch} />
      <ContactForm handleSubmit={handleSubmit} fieldValidation={fieldValidation} />
      {contacts.length === 0 ? (
        <p className={s.emptyMessage}>The phone book is empty. Add your first contact.</p>
      ) : (
        <ContactList contacts={filterContacts} deleteContact={(id) => dispatch(deleteContact(id))} />
      )}
    </div>
  );
};

export default App;
