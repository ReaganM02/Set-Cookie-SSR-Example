export default defineEventHandler((event) => {
    event.context.cookie = getCookie(event, 'counter')
})
