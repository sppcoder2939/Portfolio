import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Material = ({isHighLight, icon, link }) => {
    return (
        <a href={link} target="_blank" className="hover:scale-125">
            <FontAwesomeIcon className={`${isHighLight ? "text-white": ""}`} icon={icon} />
        </a>
        
    )
}

export default Material;