export default defineEventHandler(async (event) => {
    setCookie(event, 'counter', event.context.cookie + 1 || 0)
    return 200
})
