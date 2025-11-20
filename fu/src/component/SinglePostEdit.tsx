import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'

const API_BASE = import.meta.env.VITE_API_BASE

export default function SinglePostEdit(){

    const {id} = useParams()
    interface CollType {
        title: string;
        description: string;
        // add other properties if needed
    }

    const [coll, setColl] = useState<CollType | null>(null)
    const [form, setForm] = useState({title:'', description:''})
    const [message, setMessage] = useState<string>('')
    
    useEffect(()=>{
        ( async()=>{
            try{
                const res = await fetch(`/api/ge/${id}`);
                const data = await res.json()
                setColl(data)
                setForm({
                    title:data.title ?? '',
                    description:data.description ?? ''
                })


        }catch(err)  {
            console.error("something went wrong", err);
        }

        }
            

    )()
        
    },[id])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        const {name, value} = e.currentTarget
        setForm(prev=>({
             ...prev, [name]:value
        }
           

        )
            
            
        )
    }
    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        const res = await fetch(`${API_BASE}/api/ge/update/${id}`,{
            method:"PUT",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(form)
        })
        if(!res){
            setMessage('Response not available')
        }else{
            setMessage("Updated")
        }

    }

    const handleDelete = async(e?: React.MouseEvent<HTMLButtonElement>)=>{
        e?.preventDefault()
        const res = await fetch(`/api/ge/del/${id}`,{
            method:'DELETE',
           
        })
        const text = await res.text().catch(()=>'')

        if(res.ok){
            setMessage(text)
            setForm({title:'', description:''})
        }

    }

    return (
        <>
        {message && (
            <p>{message}</p>
        )}
        <ul>
            {coll &&(
                <>
                <li>{coll?.title}</li>
            <li>{coll?.description}</li>
                </>
                

            ) }
        </ul>

        <form onSubmit={handleSubmit}>

            <div>
                <label>Title</label>
                <input name="title" value={form?.title} onChange={handleChange}></input>
            </div>
            <div>
                <label>Description</label>
                <input name="description" value={form?.description} onChange={handleChange}></input>
            </div>
            <button type='submit'>Update

            </button>
            <button onClick={handleDelete}>Del</button>
            
        </form>
        
        
        </>
 
        )

}

