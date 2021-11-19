import ContactElement from "./ContactElement";
import PropTypes from "prop-types";
import s from "./Contact.module.css";
//import { deleteContact } from "../../redux/contacts/action";
import { useSelector } from "react-redux";
//import { addContact, deleteContact} from '../../redux/contacts/action';
import {getContacts} from '../../redux/contacts/selectors'
export default function ContactList() {
  const contacts = useSelector(getContacts);


  return (
    <ol className={s.list}>
    {contacts.map((contact) => (
      <ContactElement
        contact={contact}
        onDeleteContact={onDeleteContact}
        key={contact.id}
      />
    ))}
  </ol>
  )
}


// export default ContactList;


const mapStateToProps = (state) => {
  return {
    items: state.contacts,
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onDeleteContact: (id) => dispatch(deleteContact(id))
//   }
// };

export default connect(mapStateToProps, null)(ContactList);


ContactList.prototype = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      number: PropTypes.string,
      name: PropTypes.string,
    })
  ),
  onDeleteContact: PropTypes.func,
};
