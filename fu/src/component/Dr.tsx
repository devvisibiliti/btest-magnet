// import { useState } from "react"


// export default function Dr(){

//     const [sr, setSr] = useState({
//         title:'',
//         description:''

//     })

//     function handleChange(e: React.ChangeEvent<HTMLInputElement>){
//         const {name, value} = e.currentTarget
//         setSr((prev)=>{
//             return {...prev, [name]:value}
//         })

//     }

//     async function handleSubmit(e: React.FormEvent<HTMLFormElement>){
//         e.preventDefault()
//         const res = await fetch('/api/gp',{
//             method:"POST",
//             headers:{
//                 'Content-Type':'application/json'
//             },
//             body:JSON.stringify(sr)
//         })
//         if(!res.ok){
//             console.log("Failed")
//         }
//     }





//     return(
//         <>
//         <form onSubmit={handleSubmit}>
//             <div>
//                 <label>Dr</label>
//                 <input name="title" value={sr.title} onChange={handleChange} placeholder="this"></input>
//             </div>
//             <div>
//                 <label>Qr</label>
//                 <input name="description" value={sr.description} onChange={handleChange}></input>
//             </div>
//             <button type="submit">S</button>
            
//         </form>
//         </>
//     )
// }