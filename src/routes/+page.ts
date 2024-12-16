import type { PageLoad } from "./$types"

export const load: PageLoad = async ({ fetch }) => {
    const resp = await fetch("/api/inference")
    const prediction = parseInt(await resp.text(), 10)

    return {
        prediction,
    }
}