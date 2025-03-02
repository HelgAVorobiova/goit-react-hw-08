import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;
export const selectLoading = state => state.contacts.loading;
export const selectNameFilter = state => state.filters.name;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filter) => {
    return contacts.filter(contact => {
      const lowercasedFilter = filter.toLowerCase();
      return (
        contact.name.toLowerCase().includes(lowercasedFilter) ||
        contact.number.includes(lowercasedFilter)
      );
    });
  }
);
