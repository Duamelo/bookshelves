"use client"
import Link from "next/link";

export function Shelves({shelves} : {shelves: Shelf[]}) {
    return <nav className="col-md-2 d-none d-md-block bg-light sidebar">
        <div className="sidebar-sticky">
            <ul className="nav flex-column">

                {shelves !== undefined
                    ? shelves.map(shelf => (
                        <li className="nav-item">
                            <Link className="nav-link active" href={`/shelf/${shelf.id}`}>
                                {shelf.title} <span className="sr-only">({shelf.booksId.length})</span>
                            </Link>
                        </li>
                    ))
                    : null}
            </ul>
        </div>
    </nav>
}