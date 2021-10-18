import { useEffect, useState } from "react"
import GetGifs from "../Helpers/GetGifs"

const UseFetchGifs = (categories) => {
    
    const [state, setState] = useState({
        data:[],
        loading:true,
    })

    useEffect(() => {
        GetGifs(categories)
            .then(img => {

                setTimeout(() => {
                    setState({
                        data: img,
                        loading: false,
                    });
                },200)


            })
    },[categories])

    return state;

}

export default UseFetchGifs
