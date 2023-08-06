/* eslint-disable react/no-unescaped-entities */
import {useEffect, useState} from 'react';
import { useParams} from "react-router-dom";
import {supabase} from "../client.js";
import Navbar from '../components/Navbar.jsx';
import Twitter from "../images/icon/twitter.svg";
import Youtube from "../images/icon/youtube.svg";
import Instagram from "../images/icon/instagram.svg";

const EditCreator = () => {
    let {name} = useParams();
    let [creatorName,setCreatorName] = useState('');
    let [instagram, setInstagram] = useState('');
    let [twitter, setTwitter] = useState('');
    let [youtube, setYoutube] = useState('');
    let [description, setDescription] = useState('');
    let [imgURL, setImgURL] = useState(''); 

    useEffect(() => {
        const getCreatorData = async () => {
            const {data} = await supabase.from("creators").select().eq('name',name).single();
            setCreatorName(data?.name || '');
            setInstagram(data?.instagram || '');
            setTwitter(data?.twitter || '');
            setYoutube(data?.youtube || '');
            setDescription(data?.description || '');
            if (data.imgURL === "https://t4.ftcdn.net/jpg/02/15/84/43/240_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg") {
                setImgURL('');
            }
            else {
                setImgURL(data.imgURL);
            }
            
        };
        getCreatorData();
    },[name])
    
    
    const updateCreatorData = async () => {

        imgURL = imgURL.trim() !== "" ? imgURL : "https://t4.ftcdn.net/jpg/02/15/84/43/240_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg";
        await supabase.from("creators").update({
            name:creatorName,
            description:description,
            imgURL:imgURL,
            instagram:instagram,
            twitter:twitter,
            youtube:youtube,
        }).eq('name',name)
    }


    const deleteCreatorData = async () => {
        await supabase.from("creators").delete().eq('name',name).single();
    }


    return (
        <div>
            <Navbar />

            <main className='EditCreator'>
                <div className="add-ceator">
                    <form className="creator-form">
                        <div>
                            <label className="form-title">Name</label>
                            <input type="text" value={ creatorName} onChange={e => setCreatorName(e.target.value)} />
                        </div>
                        <div>
                            <label className="form-title">Profile Image URL</label>
                            <p className="question-description">Provide a link to the profile image of the creator. Be sure to include the http://</p>
                            <input type="text" value={imgURL} onChange={e => setImgURL(e.target.value)} />
                        </div>
                        
                        <div>
                            <label className="form-title">Description</label>
                            <p className="question-description">Provide a description of the creator. Who are they? What makes them interesting?</p>
                            <textarea type="text" value={description} onChange={e => setDescription(e.target.value)} />
                        </div>

                        <h4 className="social-media-section-title">SOCIAL MEDIA LINKS</h4>
                        <p>Provide at least one of the creator's social media links</p>

                        <div>
                            <h1 className="social-title"><img className="social-logo" src={Instagram} alt="Instagram Logo" /> Instagram</h1>
                            <p className="question-description">The creator's YouTube handle (without the @)</p>
                            <input type="text" value={instagram} onChange={e => setInstagram(e.target.value)} />
                        </div>
                        <div>
                            <h1 className="social-title"><img className="social-logo" src={Twitter} alt="Twitter Logo" /> Twitter</h1>
                            <p className="question-description">The creator's Twitter handle (without the @)</p>
                            <input type="text" value={twitter} onChange={e => setTwitter(e.target.value)} />
                        </div>
                        <div>
                            <h1 className="social-title"><img className="social-logo" src={Youtube} alt="Youtube Logo" /> YouTube</h1>
                            <p className="question-description">The creator's YouTube handle (without the @)</p>
                            <input type="text" value={youtube} onChange={e => setYoutube(e.target.value)} />
                        </div>
                    
                    </form>

                    <nav>
                        <ul>
                                <li>
                                    <a href="/" id='Edit-button' role="button" onClick={updateCreatorData}>
                                        SUBMIT
                                    </a>
                                </li>
                                <li >
                                    <a href="/" id='Delete-button' role="button" onClick={deleteCreatorData}>
                                        DELETE
                                    </a>
                                </li>
                            </ul>
                    </nav>
                </div>
            </main>


        </div>
    )

}


export default EditCreator;