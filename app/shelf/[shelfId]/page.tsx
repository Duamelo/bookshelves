import { ShelfBooksWrapper } from "../../../src/shelves/components/shelf";

export default async function Page({params}: {params: {shelfId: string}}) {
    return <ShelfBooksWrapper id={params.shelfId}/>;
}