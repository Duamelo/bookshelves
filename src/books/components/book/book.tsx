"use client"

import Link from "next/link";
import { useBook } from "../../hooks"

export default function Book({id} : { id: string}){
    const detail = useBook(id);
    return detail !== undefined ?
    (
        <div className="card">
            <img className="card-img-top" src={detail.image} alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">{detail.title}</h5>
                <p className="card-text">Par {detail.authors.map((author) => <> {author.name} <br/> </> )}</p>
                <Link href={`/book/${detail.id}`} className="btn btn-primary"> Voir plus </Link>
            </div>
        </div>
    )
    : null
}