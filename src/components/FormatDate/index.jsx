const FormatDate = ({isHighLight ,children}) => {
    return (
        <div>
            <span className={`text-sm ${isHighLight ? "text-white": ""}`}>
                {children}
            </span> 
        </div>
    )
}

export default FormatDate;