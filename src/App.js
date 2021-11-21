import s from "./App.module.css";
import Filter from "./components/Filter";
import ContactList from "./components/ContactList";
import Form from "./components/Form";


function App() {
  return (
    <div className={s.wrapper}>
      <h1 className={s.pageTitle}>Phonebook</h1>
      <Form/>
      <h2>Contacts</h2>
      <Filter/>
      <ContactList/>
    </div>
  );
}
export default App;