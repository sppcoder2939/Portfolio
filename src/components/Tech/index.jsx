const Tech = ({isHighLight, data}) => {
    return (
        <div>
            <div className="flex gap-4 text-sm">
                {
                    data.map((e, i) => (
                        <div key={`${e}-tech-${i}`} className={`bg-primaryTitle px-2 py-1 rounded-md ${isHighLight ? "text-white": ""}`}>{e}</div>
                    ))
                }
                
                {/* <div className={`bg-primaryTitle px-2 py-1 rounded-md ${isMouseEnter['exp1'] ? "text-white": ""}`}>Tailwind</div> */}
            </div>
        </div>
    )
}

export default Tech;