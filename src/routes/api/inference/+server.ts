import { env } from "$env/dynamic/private"
import type { RequestHandler } from "@sveltejs/kit"
import { type InferenceParams, CreateInferenceRequest } from "$lib/model/request"
import { RunLinRegression } from "$lib/model/lin_regression";


export const POST: RequestHandler = async ( { request } ) => {
    const params = await request.json() as InferenceParams

    console.log(params)

    console.log(env.INFERENCE_STUB, env.API_ENDPOINT, env.MODEL_VERSION)

    if (env.INFERENCE_STUB === "true") {
        return new Response(String(Math.random() * (1500 - 20) + 50))
    }

    if (env.USE_EMBEDDED_LIN_MODEL === "true") {
        return new Response(String(RunLinRegression(params)))
    }

    const apiEndpoint = env.API_ENDPOINT || "http://localhost:5000"
    const modelVersion = env.MODEL_VERSION || "v1"

    try {
        const resp = await fetch(`${apiEndpoint}/predict/${modelVersion}`, {
            method: "PUT",
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