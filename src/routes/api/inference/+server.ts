import { INFERENCE_STUB } from "$env/static/private"
import type { RequestHandler } from "@sveltejs/kit"
import { type InferenceParams, CreateInferenceRequest } from "$lib/model/request"


export const POST: RequestHandler = async ( { request } ) => {
    const params = await request.json() as InferenceParams

    console.log(params)

    if (INFERENCE_STUB) {
        return new Response(String(Math.random() * (1500 - 20) + 50))
    }

    try {
        const resp = await fetch("http://localhost:8080/v2/models/random-forest-rent/versions/v0.1.0/infer", {
            method: "POST",
            body: CreateInferenceRequest(params),
            headers: {
                "Content-Type": "application/json",
            },
        })

        if (!resp.ok) {
            console.log("inference not ok", await resp.text())
            return new Response(null, {
                status: 500,
            })
        }

        console.log("inference ok")

        const res = await resp.text()

        return new Response(res)
    } catch (e) {
        console.log(e)
        return new Response(null, {
            status: 500,
        })
    }
}