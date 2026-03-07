import {useState} from "react"

export default function Form(){
    const [bulletPoint, setBulletPoint] = useState({advantage:[""], features:[""],options:[""] })


    const handleChange = (e, field, index)=>{
        const updated = [...bulletPoint[field]]
        updated[index] = e.target.value

        setBulletPoint((prev)=>({
            ...prev,[field]:updated
        }))

        setBulletPoint(prev=>({...prev,[field]:updated}))

    }

    const onSubmit =()=>{
        e.preventDefault()
        const data = {
            advantage:bulletPoint.advantage,
            features:bulletPoint.features,
            options:bulletPoint.options
        }

        console.log(data)

    }

    return(
        <form>
            {bulletPoint.advantage.map((item, index)=>{
                <input value={item} onChange={(e)=>{handleChange(e, "advantage", index)}}/>
            })}

            {bulletPoint.features.map((item, index)=>{
                <input value={item} onChange={(e)=>{handleChange(e,"features", index)}}/>
            })}

            {bulletPoint.features.map((item,index)=>{
                <input value={item} onChange={(e)=>{handleChange(e, "option", index)}}/>
            })}
            
        </form>
    )
}