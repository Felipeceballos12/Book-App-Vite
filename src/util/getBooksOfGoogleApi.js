export default async function getBooksOfGoogleApi(name) {
  console.log(import.meta.env.VITE_API_KEY);
  try {
    const url =
      'https://www.googleapis.com/books/v1/volumes?q=' +
      name +
      '&maxResults=40&key=' +
      import.meta.env.VITE_API_KEY;

    const booksResponse = await fetch(url);
    const booksData = await booksResponse.json();

    return booksData.items;
  } catch (err) {
    console.log(err);
  }
}
