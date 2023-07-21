export default defineEventHandler((event) => {
    return `Cookie is ${++event.context.cookie}` || 0
})
