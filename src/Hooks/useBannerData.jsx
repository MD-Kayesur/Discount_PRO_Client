import { useQuery } from "@tanstack/react-query";
import useAxious from "./useAxious";

 

 
const useBannerData = () => {
    const AxiousURL= useAxious()

    const { data: disCountbanner = [], refetch } = useQuery({
        queryKey: ["disCountbanner"],
        queryFn: async () => {
            const res = await AxiousURL.get('/allBanner')
            return res.data;
        }
    })

    return {disCountbanner ,refetch}
};

export default useBannerData;