export default async function getBooksOfGoogleApi(name) {
  try {
    const url = 'http://localhost:3000/books/' + name;

    const booksResponse = await fetch(url);
    const book = await booksResponse.json();

    return book.items;
  } catch (err) {
    console.log(err);
  }
}
