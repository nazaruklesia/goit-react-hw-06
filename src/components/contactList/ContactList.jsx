import Contact from "../contact/Contact";
import s from "./ContactList.module.css"

const ContactList = ({ contacts, deleteContact }) => {
  console.log(contacts)
  return (
    <div className={s.container}>
      <ul className={s.list}>
        {contacts.map(({ id, name, number }) => (
          <Contact key={id} id={id} name={name} number={number} onDelete={deleteContact} />

        ))}
      </ul>
    </div>

  );
};


export default ContactList;

