import { useState, useEffect } from "react";
import Creator from "../components/creator.jsx";
import Navbar from "../components/Navbar.jsx";
import {supabase} from "../client.js";


const ShowCreators = () => {

    const [creators,setCreators] = useState([]);

    const getCreatorData = async () => {
        
        try{
            const {data} = await supabase.from("creators").select();
            setCreators(data)
        } catch(error) {
            console.error("Error fetching data:", error.message);
        }
    }
      
      
    useEffect(() => {
        getCreatorData()
        
    },[])

    return (
        <div>
            <Navbar/>

            <div className="creators-card">
                {creators && creators.map((creator) => (

                   
                    <Creator key={creator.name} name={creator.name} instagram={creator.instagram} twitter={creator.twitter} youtube={creator.youtube} description={creator.description} imgURL={creator.imgURL}/>

                ))}
            </div>
        

        </div>
    )

}


export default ShowCreators;