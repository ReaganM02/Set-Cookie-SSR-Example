export default defineEventHandler((event) => {
    const counterCookie = getCookie(event, 'counter')
    if (counterCookie) {
        event.context.cookie = parseInt(counterCookie)
    }

})
