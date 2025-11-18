import Mongoose from "mongoose"


const bgSchema = new Mongoose.Schema(
    {
        
        title:{
            type:String,
            required:true
        },
        description:{
            type:String,
            required:true

        },
        imageUrl:{
            type:String,
        },
        imagePublicId:{
            type:String

        },
        createdAt:{
            type:Date,
            default:Date.now
        }
    }
)

const G = Mongoose.model('G',bgSchema)

export default G


