import { INFERENCE_STUB } from "$env/static/private"
import type { RequestHandler } from "@sveltejs/kit"

export const GET: RequestHandler = () => {
    if (INFERENCE_STUB) {
        return new Response(String(Math.random() * (500 - 50) + 50))
    }

    return new Response(null, {
        status: 501,
    })
}