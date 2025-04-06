import { useQuery } from "@tanstack/react-query";
import useAxious from "./useAxious";

 

const UseBrands = () => {

const AxiousURL= useAxious()


const { data: BrandsDetails = [] } = useQuery({
    queryKey: ["BrandsDetails"],
    queryFn: async () => {
        const res = await AxiousURL.get('/Brands')
        return res.data;
    }
})



const { data: AllTopbrands = [] } = useQuery({
    queryKey: ["AllTopbrands"],
    queryFn: async () => {
        const res = await AxiousURL.get('/topBrands')
        return res.data;
    }
})

const { data: SaleBrand = [] } = useQuery({
    queryKey: ["SaleBrand"],
    queryFn: async () => {
        const res = await AxiousURL.get('/SaleBrand')
        return res.data;
    }
})


const { data: AllBrands = [] } = useQuery({
    queryKey: ["AllBrands"],
    queryFn: async () => {
        const res = await AxiousURL.get('/allBrands')
        return res.data;
    }
})





 


    return  {BrandsDetails ,AllTopbrands,SaleBrand,AllBrands}
};

export default UseBrands;