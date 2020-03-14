export const setRandom = (n) => {
    return {
        type: 'GENERATE_RANDOM',
        payload: n
    }
}