// import React, { useState, type ChangeEvent, type FormEvent } from "react";

// interface Vara {
//   title: string;
//   description: string;
// }

// export default function Cr() {
//   const [vara, setVara] = useState<Vara>({
//     title: "",
//     description: "",
//   });

//   function handleChange(e: ChangeEvent<HTMLInputElement>) {
//     const { name, value } = e.target;
//     setVara((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   }

//   async function handleSubmit(e: FormEvent<HTMLFormElement>) {
//     e.preventDefault();
//     const res = await fetch('/api/gp',{
//         method:'POST',
//         headers:{
//             'Content-Type':'application/json'

//         },
//         body:JSON.stringify(vara)

//     })
//     if(!res.ok){
//         console.log("error")
        

//     }
//     console.log("Submitted data:", vara);
    
//   }

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>CT</label>
//           <input
//             placeholder="ct"
//             name="title"
//             value={vara.title}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label>CD</label>
//           <input
//             placeholder="cd"
//             name="description"
//             value={vara.description}
//             onChange={handleChange}
//           />
//         </div>
//         <button type="submit">S</button>
//       </form>
//     </>
//   );
// }
