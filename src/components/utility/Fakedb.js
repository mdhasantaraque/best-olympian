const addToDb = (db) => {
  localStorage.setItem("Time", JSON.stringify(db));
  console.log(db);
};
export { addToDb };
