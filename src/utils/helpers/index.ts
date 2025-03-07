export const generateShortId = () => {
    return `ST${Math.floor(1000 + Math.random() * 9000)}`
}