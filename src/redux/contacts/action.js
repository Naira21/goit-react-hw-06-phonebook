import { createAction } from "@reduxjs/toolkit";

export const addContact = createAction('contact/add');
export const deleteContact = createAction('contact/delete');
export const filterContacts = createAction('filter/value');


// export const addContact = newContact => ({
//     type: 'contact/add',
//     payload: {        
//         name:newContact.name,
//         number:newContact.number,
//         id: uuidv4(),
//     }
// })

// export const deleteContact = id => ({
//     type: 'contact/delete',
//     payload: {id},
// })

// export const filter = value => ({
//     type: 'filter/value',
//     payload: value,

// })


