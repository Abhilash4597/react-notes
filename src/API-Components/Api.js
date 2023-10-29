import axios from "axios";

const searchImages = async () => {
    const response = await axios.get('https://api.unsplash.com/search/photos',{
        headers:{
            Authorization:'Client-ID I8NRLHkfLvwUxvgv20lhd_g2Rotzo90CJ6y0z2ldZT0'
        },
        params:{
            query:'flowers'
        }
    })
    console.log(response)
    return response;
}

export default searchImages;