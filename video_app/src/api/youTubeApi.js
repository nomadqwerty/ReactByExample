import axios from "axios"
const KEY = 'AIzaSyAE-JVZs-V4x_Y6jPF6a7uF5jhu1SHaegw'

export default axios.create({
    baseUrl:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults:5,
        type:'video',
        key:KEY
    }
})
