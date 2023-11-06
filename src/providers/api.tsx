import axios from "axios"


const baseURL = "http://homologacao3.azapfy.com.br/api/ps/metahumans"

export const Api = axios.create({baseURL})