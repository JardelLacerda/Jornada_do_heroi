import axios from "axios"


const baseURL = "http://homologacao3.azapfy.com.br/api/ps/metahumans"

const Api = axios.create({baseURL})

Api.interceptors.response.use((response) => {
      return response
    },

    (error) => {
        if (error.response && error.response.status === 429) {
            return console.log(error.message)
        } else {
            return Promise.reject(error)
        }
    }
)



export default Api