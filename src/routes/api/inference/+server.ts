import { INFERENCE_STUB } from "$env/static/private"
import type { RequestHandler } from "@sveltejs/kit"

export const POST: RequestHandler = async ( { request } ) => {
    const params = await request.json()
    console.log(params)

    if (INFERENCE_STUB) {
        return new Response(String(Math.random() * (1500 - 20) + 50))
    }

    return new Response(null, {
        status: 501,
    })
}