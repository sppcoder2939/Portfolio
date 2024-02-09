import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { data } from '../../contents/header'

const Header = () => {
    return (
        <div className='flex flex-col gap-2'>
            <div className='text-3xl text-primaryTitle font-semibold'>{data.name}</div>
            <div className='text-primaryAccent font-semibold'>{data.title}</div>
            <div className='text-sm w-5/6'>{data.caption}</div>
            <div className='mt-4'>
                <div className="pb-7">
                    <img src={data.pic} width="250" height="250"></img>
                </div>
                <a href={data.link} target='_blank'>
                    <span className='rounded-lg bg-primaryTitle text-white font-semibold py-2 px-4'>
                        {data.btnText}
                        <span className='rotate-90 inline-block ml-2 text-sm'>
                            <FontAwesomeIcon className='animate-bounce' icon={faArrowDown} />
                        </span>
                    </span>
                </a>
            </div>
        </div>
    )    
}

export default Header;