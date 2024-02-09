const Description = ({ isHighLight, description}) => {
    return (
        <div className={`text-sm ${isHighLight ? "text-white": ""}`}>{description}</div>
    )
}

export default Description;