import type { PageLoad } from "./$types"

export const load: PageLoad = async ({ fetch }) => {
    const resp = await fetch("/api/inference")
    const number = parseInt(await resp.text(), 10)

    return {
        number,
    }
}