import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  try{
    
  }catch{
    console.error('putDb not implemented');
  }
}

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  try{
    //Create connection to database
    const jateDb = await openDB('jate', 1);
    //specify database and data privilges
    const tx = jateDb.transaction('jate', 'readonly');
    //open up object store
    const store = tx.objectStore('jate');
    //get all data from databse
    const request = store.getAll();
    //get confirmation of request
    const result = await request;
    
    console.log('request.value', result);
    return result
  }catch{
    console.error('getDb not implemented');
  }


}

initdb();
