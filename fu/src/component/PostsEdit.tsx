import { useEffect, useState } from "react"
import {Link} from 'react-router-dom'

// type Item = {id: string | number;
//     title:string;
//     description:string

// }

type Item = {
    _id: string | number;
    title: string;
    description: string;
};

export default function PostsEditPage() {
    const [value, setValue] = useState<Item[]>([]);

    useEffect(()=>{
        const re = async ()=>{
            const res = await fetch('/api/ge',)
            const data = await res.json();
            setValue(data)

        };
        re()

    },[])
    return(
        
        <ul>
            {value.map(item => (
                <li key={item._id}>
                    <Link to={`/post-edit/${item._id}`}>{item.title}</Link>
                    <br />
                    <Link to={`/post-edit/${item._id}`}>{item.description}</Link>
                    <br />
                    <button>
                        <Link to={`/post-edit/${item._id}`}>Edit</Link>
                    </button>
                </li>
            ))}
 
        </ul>

    )


}















