import image1 from '../Images/reactCoursera.avif'
import image2 from '../Images/angularCoursera.avif'
import image3 from '../Images/bootCamp.avif'
import HeadingTexts from './HeadingTexts'
const Card = (props: any) => {
    return <div className='flex flex-col w-full sm:w-1/2 md:w-1/3 p-5'>
        <img src={props.imgSrc} alt={props.imagAlt} className='rounded-lg h-[16rem] max-h-[16rem]' />
    </div>
}
const Certificates = () => {
    return (
        <div className='flex flex-col gap-y-10 bg-secondary text-whiteText py-16 lg:px-20'>
            <HeadingTexts title="CERTIFICATES" description="Certificates i earned through practice and learning from different occasions." />
            <div className='flex flex-wrap'>
                <Card imgSrc={image1} />
                <Card imgSrc={image2} />
                <Card imgSrc={image3} />
            </div>
        </div>
    )
}

export default Certificates