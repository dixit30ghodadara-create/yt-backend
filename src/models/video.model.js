import mongoose, {Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";


const videoSchema = new Schema(
    {
        videoFile: {
           type: String,   // cloudinary url
           Required: true 
        },
        thumbnail: {
           type: String,        // cloudinary url
           Required: true 
        },
        title: {
           type: String,        
           Required: true 
        },
        discription: {
           type: String,        
           Required: true 
        },
        Duration: {
            type: Number,
            requited: true
        },
        views : {
            type: Number,
            default: 0
        },
        isPublished: {
            type :Boolean,
            default : true
        },
        owner : {
            type: Schema.Types.ObjectId,
            ref:"User"
        }
    },
    {
        timestamps: true
    }
)
videoSchema.plugin(mongooseAggregatePaginate)

export const Video = mongoose.model("Video", videoSchema)