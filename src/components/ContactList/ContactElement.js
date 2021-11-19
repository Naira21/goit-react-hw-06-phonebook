import s from "./Contact.module.css";
import { useDispatch } from "react-redux";

function ContactElement({ contact, onDeleteContact }) {
  const dispatch = useDispatch();
  return (
  <li key={contact.id}>
    {contact.name}: {contact.number}
    <button
      className={s.deleteBtn}
      type="button"
      onClick={() => dispatch(contact.id)}
    >
      Delete
    </button>
  </li>

  )
}

export default ContactElement;
