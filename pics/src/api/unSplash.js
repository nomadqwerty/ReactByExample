import axios from 'axios'

let axiosCall = (input)=>{
   return axios.get(' https://api.unsplash.com/search/photos',{
        params:{
            query:input
        },
        headers:{
            Authorization:'Client-ID oducr95UOqhhHjU10oU5uaLofUg0TOhC_yp3rxz1KSI'
        }
    })
}

// let axiosCall = axios.create({
//     baseURL: 'https://api.unsplash.com',
//     headers:{
//         Authorization:'Client-ID oducr95UOqhhHjU10oU5uaLofUg0TOhC_yp3rxz1KSI'
//     }
// })

export default axiosCall