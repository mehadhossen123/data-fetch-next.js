
export const feedback=[
    {
        id:1,
        message:"Khabar ta sai cilo "
    },
    {
        id:2,
        message:"khabar ta onek moja cilo bai .apni onk smart "
    },

]

export async function GET(request) {
    return Response.json({
        status:200,
        message:"Next.js api create "
    })
}

