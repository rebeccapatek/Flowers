let nuseryflowers = []

export const useNuseryflowers = () => nuseryflowers.slice()

export const getNuseryflowers = () => fetch("http://localhost:8088/nuseryflowers")
    .then(res => res.json())
    .then(parsedNuseryflowers => nuseryflowers = parsedNuseryflowers)