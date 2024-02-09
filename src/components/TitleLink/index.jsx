import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TitleLink = ({isHighLight, title, link}) => {
    
    if (!link) {
        return <div className={`text-primaryTitle ${isHighLight ? "text-white": ""}`}>
            {title}
        </div>
    }
    
    return (
        <div className={`text-primaryTitle ${isHighLight ? "text-white": ""}`}>
            {/* <a href={link} target="_blank"> */}
                {title}
                <FontAwesomeIcon className={`text-xs -rotate-45 transition-all ${isHighLight ? "translate-x-1 -translate-y-1" : ""}`} icon={faArrowRight} />
            {/* </a> */}
        </div>
    )
}

export default TitleLink;