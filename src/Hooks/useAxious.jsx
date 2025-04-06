import axios from "axios";

 
export const AxiousURL = axios.create({
   baseURL:'https://discount-pro-server.vercel.app/',
   timeout:5001
})
const useAxious = () => {
   return  AxiousURL
};

export default useAxious;