import { connect } from "@/app/lib/dbConnect";
import { ObjectId } from "mongodb";

const { feedback } = require("../../route");
    const feedbackCollection = connect("feedbacks");

export async function GET(request,{params}) {
    const {id}=await params;
    if(id.length!==24){
        return Response.json({
            status:400,
            message:"Please provide a valid id "
        })
    }
    const query={_id:new ObjectId(id)}
    const result=await feedbackCollection.findOne(query);
    return Response.json({
        status:200,
        message:"Data get successful",
        data:result,
    })
    
}

export async function DELETE(request,{params}) {
    const {id}=await params;
    if(id.length!==24){
        return Response.json({
            status:400,
            message:"Please provide a valid id "
        })
    }
    const query={_id:new ObjectId(id)}
    const result=await feedbackCollection.deleteOne(query);
    return Response.json({
        status:200,
        message:"Data delete successful",
       
    })
    
}
export async function PATCH(request,{params}) {
    const {message}=await request.json()
    const {id}=await params;
    if(id.length!==24){
        return Response.json({
            status:400,
            message:"Please provide a valid id "
        })
    }
    const query={_id:new ObjectId(id)}
    const newData={
        $set:{
            message
        }
    }
    const result=await feedbackCollection.updateOne(query,newData);
    return Response.json({
        status:200,
        message:"Data update  successful",
        result
       
    })
    
}