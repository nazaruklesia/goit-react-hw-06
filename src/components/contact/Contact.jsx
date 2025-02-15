import s from "./Contact.module.css";
import { BsPersonFill, BsTelephoneFill } from "react-icons/bs";

const Contact = ({ id, name, number, onDelete }) => {
  return (

    <div className={s.contactItem}>
      <div className={s.container}>
        <div className={s.contacts}>
          <li className={s.contactlist}>
            <BsPersonFill />
            {name}
          </li>
          <li className={s.contactlist}>
            <BsTelephoneFill />
            {number}
          </li>
        </div>
        <button className={s.btn} type="button" onClick={() => onDelete(id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Contact;
