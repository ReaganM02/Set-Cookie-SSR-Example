export default defineNuxtRouteMiddleware(async () => {
    await $fetch('/api/set-cookie', { method: 'POST' })
});
