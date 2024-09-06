import Image from 'next/image'
import { Shelves } from '../src/shelves/components/shelves'
import { fetchFirstShelfWithBooksId, fetchShelvesWithBooksId } from '../src/books/actions';
import { ShelfBooks } from '../src/shelves/components/shelf';

export default async function Page() {
  const shelf = await fetchFirstShelfWithBooksId();
  return shelf !== undefined ? <ShelfBooks booksId={shelf.booksId} /> : null
}