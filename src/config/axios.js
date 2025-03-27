import axios from "axios"

const clienteAxios = axios.create({
 baseURL: "https://apinew.mellfashionboutique.com"
 //baseURL: "http://localhost:4000"
})

export default clienteAxios