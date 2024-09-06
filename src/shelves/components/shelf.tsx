import { fetchShelfBooksId } from "../../books/actions";
import Book from "../../books/components/book/book";

export async function ShelfBooksWrapper({ id }: { id: string }) {
    let booksId = await fetchShelfBooksId(id);
    return <ShelfBooks booksId={booksId} />
}

export function ShelfBooks({ booksId }: { booksId: string[] }) {
    return <div className="container">
        <div className="row">
        {booksId.map(bookId => (
                <div className="col-sm-1 col-md-6 col-lg-3">
                    <Book id={bookId} />
                </div>
        ))}
        </div>
    </div>
}