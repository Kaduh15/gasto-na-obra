import { openDB } from 'idb';

export const dbPromise = openDB('expenses-db', 1, {
  upgrade(db) {
    db.createObjectStore('expenses', {
      keyPath: 'id',
      autoIncrement: true,
    });
  },
});
