import { createContext } from "react";


const spotify = createContext({
    CLIENT_ID: '9366a093ae6045079013cd025ea3ead5',
    CLIENT_SECRET: '70497d6435984f7db8e0fdc319104aa1',
    REDIRECT_URI: 'http://localhost:5173/',
    AUTH_ENDPOINT: 'https://accounts.spotify.com/authorize',
    RESPONSE_TYPE: 'token'
})


export default spotify