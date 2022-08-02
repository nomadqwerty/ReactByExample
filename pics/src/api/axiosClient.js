import axios from 'axios'

let preCon = axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization:'Client-ID oducr95UOqhhHjU10oU5uaLofUg0TOhC_yp3rxz1KSI'
    }
})

export default preCon