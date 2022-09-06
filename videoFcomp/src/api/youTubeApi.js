import axios from "axios"
const KEY = 'AIzaSyAE-JVZs-V4x_Y6jPF6a7uF5jhu1SHaegw'

const preConfig = (input)=>{
    return axios.create({
        baseURL:'https://www.googleapis.com/youtube/v3',
        params:{
            part:'snippet',
            maxResults:5,
            type:'video',
            key:KEY,
            q:input
        }
    })
}
// (input)=>{
//     return axios.get('https://www.googleapis.com/youtube/v3/search',{
//          params:{
//             part:'snippet',
//             maxResults:5,
//             type:'video',
//             key:KEY,
//             q:input
//          }
//      })
//  }
export default preConfig