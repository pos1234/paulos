import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded'
import HeadingTexts from './HeadingTexts'
import {data} from '../data/data'
const Card = (props: any) => {
    return <div className='flex flex-col w-full sm:w-1/2 md:w-1/3 p-5 hover:p-4'>
        <a target='_blank' rel="noreferrer" href={props.link}> <img src={props.imgSrc} alt={props.imagAlt} className='cursor-pointer object-cover rounded-lg w-full h-[15rem] max-h-[15rem]' /></a>
        <div className='flex justify-between mt-5 mb-3'>
            <p>{props.title}</p>
            <a target='_blank' rel="noreferrer" className='text-orange' href={props.link}>Live Preview <OpenInNewRoundedIcon sx={{ fontSize: '0.9rem' }} /></a>
        </div>
        <p>{props.languages}</p>
    </div>
}
const Portfolio = () => {
    return (
        <div className='flex flex-col gap-y-10 bg-secondary text-whiteText py-16 lg:px-20'>
            <HeadingTexts title="PORTFOLIO" subTitle="Recent Projects" description="My personal Web development experience. Built using latest web development tools." />
            <div className='flex flex-wrap'>
                {
                 data.map((item:any,index:number)=>{
                     return  <Card imgSrc={item.imageUrl} imagAlt={item.imageAlt} title={item.title} languages={item.languages} link={item.externalLink} />
                    })
                }
            </div>
        </div>
    )
}

export default Portfolio