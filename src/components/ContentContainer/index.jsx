import { useEffect, useState } from "react";
import FormatDate from "../../components/FormatDate";
import Picture from "../../components/Picture";
import TitleLink from "../../components/TitleLink";
import Material from "../../components/Material";
import Description from "../../components/Description";
import Tech from "../../components/Tech";

const ContentContainer = ({
    onInitial,
    title: sectionTitle = "",
    data = [],
}) => {
    const [isMouseEnter, setIsMouseEnter] = useState({});

    const SECTION_ID = `${sectionTitle}-section`;

    useEffect(() => {
        onInitial(SECTION_ID);
    }, [])

    return (
        <div id={SECTION_ID} className="scroll-m-14">
            <div className="text-primaryAccent font-medium px-2">{sectionTitle}</div>
            {
                data.map(({
                    date = "", 
                    title = "", 
                    link = "", 
                    material = [], 
                    description = [], 
                    skills = [],
                    picture = "",
                },index) => (
                    <div 
                        key={`${SECTION_ID}-${index}-${title.replaceAll(" ","")}`}
                        className={`grid grid-cols-[25%_75%] rounded-md px-2 py-6 transition-all ${isMouseEnter[`${SECTION_ID}-${index}`] ? "bg-gray-800" : ""}`}
                        onMouseEnter= {() => setIsMouseEnter({[`${SECTION_ID}-${index}`] : true})}
                        onMouseLeave= {() => setIsMouseEnter({[`${SECTION_ID}-${index}`] : false})}     
                    >
                        <div>
                            <FormatDate isHighLight={isMouseEnter[`${SECTION_ID}-${index}`]} children={date} />
                            <Picture picture={picture} title={title} />
                        </div>
                        <div className="grid gap-y-4 alg">
                            <TitleLink isHighLight={isMouseEnter[`${SECTION_ID}-${index}`]} title={title}/>
                            {
                                material.length > 0 ?
                                    <div className="flex gap-4 text-xl items-center">
                                        {
                                        material.map((e,i) =>(
                                            <Material key={`${e}-material-${i}`} isHighLight={isMouseEnter[`${SECTION_ID}-${index}`]} icon={e.type} link={e.link} />
                                        ))
                                        }  
                                    </div>
                                    :null
                            }
                                {
                                    description.map((e,i) => (
                                        <Description key={`${e}-description-${i}`} isHighLight={isMouseEnter[`${SECTION_ID}-${index}`]} description={e}/>
                                    ))
                                }
                                {
                                    skills.map((e,i) => (
                                        <Tech key={`${e}-skills-${i}`} isHighLight={isMouseEnter[`${SECTION_ID}-${index}`]} data={e}/>
                                    ))
                                }    
                        </div>
                    </div>
                ))
        
            }
        </div>
    )
}

export default ContentContainer;