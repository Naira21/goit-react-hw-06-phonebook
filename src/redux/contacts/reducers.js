import contactsData from '../../contacts.json'
import { createReducer } from '@reduxjs/toolkit'
import { addContact, deleteContact, filterContacts } from './action'

const initState = contactsData;

export const items = createReducer(initState, {
    [addContact]: (state, { payload }) =>

    (state.find((contact) => contact.name === payload.name) ?
        alert(`${state.name} is already in contacts`) :
        [...state, payload]
    ),
        
    
    [deleteContact]: (state, { payload }) =>
        state.filter((contact) => contact.id !== payload),
})

export const filter = createReducer('', {
    [filterContacts]: (_, { payload }) => payload,
})

// export const items = (state = initState, {type, payload}) => {
//     switch (type) {
//         case 'addContact':
//             return [...state, payload];
//         case 'deleteContact':
//             return state.filter((contact) => contact.id !== payload.id)
    
//         default:
//             return state;
//     }
// }
// export const filter = (state = '', {payload}) => {
//     return payload;
// }


