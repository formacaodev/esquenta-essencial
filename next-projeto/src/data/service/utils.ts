async function esperar(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms))
}

export { esperar }
