type Book = {
    id: string;
    title: string;
    image: string;
    authors: { name: string }[];
};

type Shelf = {
    id: string;
    title: string;
    booksId: string[];
}