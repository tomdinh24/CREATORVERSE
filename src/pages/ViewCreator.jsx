import {useEffect, useState} from 'react';
import { useParams} from "react-router-dom";
import {supabase} from "../client.js";
import Navbar from '../components/Navbar.jsx';
import Twitter from "../images/icon/twitter.svg";
import Youtube from "../images/icon/youtube.svg";
import Instagram from "../images/icon/instagram.svg";


const ViewCreator = () => {

    const { name } = useParams();
    const [creator, setCreator] = useState([]);

    useEffect(() => {
        const getCreatorData = async () => {
            const {data} = await supabase.from("creators").select().eq('name',name).single();
            setCreator(data)
            
        };
        getCreatorData();
    },[name])

    const deleteCreatorData = async () => {
        const {data} = await supabase.from("creators").delete().eq('name',name).single();
        setCreator(data)
    }


    return (
        <div className='ViewCreatorPage'>
            <Navbar/>

            <main className='ViewCreator-body'>
                <div className='ViewCreator-content'>
                    <section className='creator-image'>
                        <img className='ViewCreator-image' src={creator.imgURL} />
                    </section>

                    <section className='ViewCreator-info'>
                        <h1 className='ViewCreator-name'>{creator.name}</h1>
                        <p className='ViewCreator-description'>{creator.description}</p>

    
                            { creator.instagram && (
                                <button className='ViewCreator-social'>
                                    <a className="creator-link" href={`https://www.instagram.com/${creator.instagram}`} >
                                        <img className="social-logo" src={Instagram} alt="Instagram Logo" />
                                        @{creator.instagram}
                                    </a>
                                </button>
                            )}
                        

                       
                        { creator.twitter && (
                            <button className='ViewCreator-social'>
                                <a className="creator-link" href={`https://twitter.com/${creator.twitter}`}>
                                    <img className="social-logo" src={Twitter} alt="Twitter Logo" />
                                    @{creator.twitter}
                                </a>
                            </button>
                        )}
                        
               
                        {creator.youtube && (
                            <button className='ViewCreator-social'>
                                <a className="creator-link" href={`https://www.youtube.com/@${creator.youtube}`}>
                                    <img className="social-logo" src={Youtube} alt="Youtube Logo" />
                                    @{creator.youtube}
                                </a>
                            </button>
                        )}
                   

                    </section>
                </div>
            </main>

            <nav>
                <ul className='ViewCreator-Options'>
                    <li>
                        <a href={`/EditCreator/${name}`} id='ViewCreator-Edit' role="button">
                            Edit
                        </a>
                    </li>
                    <li >
                        <a href="/" id='Delete-button' role="button" onClick={deleteCreatorData}>
                            Delete
                        </a>
                    </li>
                </ul>
            </nav>
            

        </div>
    )

}


export default ViewCreator;