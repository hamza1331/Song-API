import mongoose from 'mongoose'
import MongoosePaginate from 'mongoose-paginate'
const {Schema} = mongoose

const songSchema = new Schema({
    title:{
        type:String,
        required:[true,"Song must have a title"]
    },
    url:{
        type:String,
        required:[true,"Song must have a url"]
    },
    rating:{
        type:Number,
        default:0,
        min:0,
        max:5
    }
})
songSchema.plugin(MongoosePaginate)
export default mongoose.model('songs',songSchema)