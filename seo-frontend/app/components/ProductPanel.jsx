"use client"

import { useState } from "react"

import TiptapEditor from "./TipTapEditor"

export default function ProductPanel() {

  const [slug, setSlug] = useState("")

  // const [image, setImage] = useState(null)
  const [imageUrl, setImageUrl] = useState("")
  const [altImage, setAltImage] = useState("")

  const [title, setTitle] = useState("")

  const[mainDescription, setMainDescription] = useState("")

  const [bulletPointValue, setBulletPointValue] = useState({
    advantage: [""],
    features: [""],
    options: [""]
  })

  const [descriptionValue, setDescriptionValue] = useState("")
  const [equipmentStock, setEquipmentStock] = useState("")

  const handleSlug = (text)=>{
    return text.toLowerCase().trim().replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")

  }

const handleImageUpload = async (e) => {

  const imageFile = e.target.files[0]
  console.log("FILE SELECTED:", imageFile)

  if (!imageFile) return

  const formData = new FormData()
  formData.append("file", imageFile)

  try {

    console.log("SENDING IMAGE...")

    const response = await fetch("http://localhost:5300/api/uploadimage", {
      method: "POST",
      body: formData
    })

    console.log("UPLOAD STATUS:", response.status)

    const data = await response.json()
    console.log("UPLOAD RESPONSE:", data)

    setImageUrl(data.url)

  } catch (error) {
    console.error("UPLOAD ERROR:", error)
  }
}
  const handleTitle =(html)=>{
    setTitle(html)


  }

  const handleMainDescription = (html)=>{
    setMainDescription(html)
  }

  const handleBulletChange = (e, field, index) => {
    const updated = [...bulletPointValue[field]]
    updated[index] = e.target.value

    setBulletPointValue(prev => ({
      ...prev,
      [field]: updated
    }))
  }

  const addBullet = (field) => {
    setBulletPointValue(prev => ({
      ...prev,
      [field]: [...prev[field], ""]
    }))
  }

  const handleDescription = (html) => {
    setDescriptionValue(html)
  }

  const handleEquipmentStock = (html) => {
    setEquipmentStock(html)
  }

  const API_URL = "http://localhost:5300"

  const onSubmit = async (e) => {
    e.preventDefault()

    const data = {
      slug:slug,
      imageUrl:imageUrl,
      title:title,
      altImage:altImage,
      mainDescription:mainDescription,
      advantages: bulletPointValue.advantage,
      features: bulletPointValue.features,
      options: bulletPointValue.options,
      description: descriptionValue,
      stock: equipmentStock
    }
    console.log("DATA SENDING:", data)

    try{
      const res = await fetch(`${API_URL}/api/singleproduct`,{
        method:"POST",
        body:JSON.stringify(data),
        headers: {
  "Content-Type": "application/json"
}
      })
      const productValue = await res.json()
      console.log(productValue)
      alert("Product Added Successfully")
      // resetForm()


    }catch(error){
      console.log(error)

    }

//     const resetForm = () => {
//   setSlug("")
//   setImageUrl("")
//   setAltImage("")
//   setTitle("")
//   setMainDescription("")
//   setBulletPointValue({
//     advantage: [""],
//     features: [""],
//     options: [""]
//   })
//   setDescriptionValue("")
//   setEquipmentStock("")
// }

    // console.log("Submitted Data:", data)
  }

  return (
    <div className="max-w-2xl mx-auto p-6">

      <form onSubmit={onSubmit} className="space-y-8 bg-white p-6 rounded-lg shadow">
        {/* Slug */}
        <h3>Slug</h3>

        <input className="w-full border border-gray-300 rounded p-2 mb-2" value={slug} onChange={(e)=>(setSlug(handleSlug(e.target.value)))} />
{/* Imageupload */}
<input type="file" accept="image/*" onChange={handleImageUpload} />

{imageUrl && (<img src={imageUrl} alt={altImage} className="w-40 mt-3 rounded"/>)}

        {/* Title */}
        <h3>Title</h3>
        <TiptapEditor value={title} placeholder="This is Heading" onChange={handleTitle}/>
        {/* Main Description */}
        
        <h3 className="text-lg font-semibold mb-3">Main Description</h3>
        <TiptapEditor 
        value = {mainDescription}
        placeholder = "this is main Description"
        onChange = {handleMainDescription}
        />

        {/* ADVANTAGES */}
        <section>
          <h3 className="text-lg font-semibold mb-3">Advantages</h3>

          {bulletPointValue.advantage.map((item, index) => (
            <input
              key={index}
              value={item}
              placeholder="Enter Advantage"
              onChange={(e) => handleBulletChange(e, "advantage", index)}
              className="w-full border border-gray-300 rounded p-2 mb-2"
            />
          ))}

          <button
            type="button"
            onClick={() => addBullet("advantage")}
            className="text-blue-600 text-sm mt-1"
          >
            + Add Advantage
          </button>
        </section>


        {/* FEATURES */}
        <section>
          <h3 className="text-lg font-semibold mb-3">Features</h3>

          {bulletPointValue.features.map((item, index) => (
            <input
              key={index}
              value={item}
              placeholder="Enter Feature"
              onChange={(e) => handleBulletChange(e, "features", index)}
              className="w-full border border-gray-300 rounded p-2 mb-2"
            />
          ))}

          <button
            type="button"
            onClick={() => addBullet("features")}
            className="text-blue-600 text-sm mt-1"
          >
            + Add Feature
          </button>
        </section>
        {/* OPTIONS */}
        <section>
          <h3 className="text-lg font-semibold mb-3">Typical Application</h3>

          {bulletPointValue.options.map((item, index) => (
            <input
              key={index}
              value={item}
              placeholder="Enter Option"
              onChange={(e) => handleBulletChange(e, "options", index)}
              className="w-full border border-gray-300 rounded p-2 mb-2"
            />
          ))}
          <button
            type="button"
            onClick={() => addBullet("options")}
            className="text-blue-600 text-sm mt-1"
          >
            + Add Option
          </button>
        </section>


        {/* DESCRIPTION */}
        <section>
          <h3 className="text-lg font-semibold mb-3">Description</h3>

          <TiptapEditor
            value={descriptionValue}
            placeholder="Enter product description"
            onChange={handleDescription}
            rows="6"
            className="w-full border border-gray-300 rounded p-2"
          />
        </section>


        {/* STOCK */}
        <section>
          <h3 className="text-lg font-semibold mb-3">Equipment Stock</h3>

          <TiptapEditor
            value={equipmentStock}
            placeholder="Enter stock quantity"
            onChange={handleEquipmentStock}
            // className="w-full border border-gray-300 rounded p-2"
          />
        </section>


        {/* SUBMIT */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700"
        >
          Submit Product
        </button>

      </form>

    </div>
  )
}