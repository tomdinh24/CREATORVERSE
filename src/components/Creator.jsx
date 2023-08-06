/* eslint-disable react/prop-types */
import Twitter from "../images/icon/twitter.svg";
import Youtube from "../images/icon/youtube.svg";
import Instagram from "../images/icon/instagram.svg";

const Creator = ({name,instagram,twitter,youtube,description,imgURL}) => {

    const image = {
        backgroundImage: `url(${imgURL})`
    };


    return (
        <div className="creator-container" style={image}>
                
            <article>
                <a href={`/ViewCreator/${name}`}>
                    <h3 className="creator-name">{name}</h3>
                </a>
                <div className="creator-links">

                    { instagram && (
                        
                        <a className="creator-link" href={`https://www.instagram.com/${instagram}`}>
                            <img className="social-logo" src={Instagram} alt="Instagram Logo" />
                        </a>
                    )}

                    { twitter && (
                        <a className="creator-link" href={`https://twitter.com/${twitter}`}>
                            <img className="social-logo" src={Twitter} alt="Twitter Logo" />
                        </a>
                    )}

                    {youtube && (
                        <a className="creator-link" href={`https://www.youtube.com/@${youtube}`}>
                            <img className="social-logo" src={Youtube} alt="Youtube Logo" />
                        </a>
                    )}
                </div>
            

                <p className="creator-description">{description.length > 80 ? `${description.slice(0, 80)}...` : description}</p>

            </article>
            
        </div>  
    )

}


export default Creator;


