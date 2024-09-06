export async function fetchShelvesWithBooksId() {
    let shelvesJson = await fetch(`https://api.glose.com/users/5a8411b53ed02c04187ff02a/shelves`);
    let shelves: Shelf[] = await shelvesJson.json();
    for (let index = 0; index < shelves.length; index++) {
        let shelf = shelves[index];
        shelf.booksId = await fetchShelfBooksId(shelf.id);
    }
    return shelves;
}

export async function fetchShelfBooksId(shelfId: string){
     return fetch(`https://api.glose.com/shelves/${shelfId}/forms`).then((res) => res.json());
}

export async function fetchFirstShelfWithBooksId(){
    var shelves = await fetchShelvesWithBooksId();
    return shelves.length !== 0 ? shelves[0] : undefined;
}