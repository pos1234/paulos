import React from 'react'
import image1 from '../Images/yes.avif'
import image2 from '../Images/palmJobs.avif'
import image3 from '../Images/nylos.avif'
import image4 from '../Images/arcBack.avif'
import image5 from '../Images/selam.avif'
import image6 from '../Images/portfolio.avif'
import HeadingTexts from './HeadingTexts'
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded';
const Card = (props: any) => {
    return <div className='flex flex-col w-full sm:w-1/2 md:w-1/3 p-5 hover:p-4'>
        <a target='_blank' href={props.link}> <img src={props.imgSrc} alt={props.imagAlt} className='cursor-pointer rounded-lg w-full h-[15rem] max-h-[15rem]' /></a>
        <div className='flex justify-between mt-5 mb-3'>
            <p>{props.title}</p>
            <a target='_blank' className='text-orange' href={props.link}>Live Preview <OpenInNewRoundedIcon sx={{ fontSize: '0.9rem' }} /></a>
        </div>
        <p>{props.languages}</p>
    </div>
}
const Portfolio = () => {
    return (
        <div className='flex flex-col gap-y-10 bg-secondary text-whiteText py-16 lg:px-20'>
            <HeadingTexts title="PORTFOLIO" subTitle="Recent Projects" description="My personal Web development experience. Built using latest web development tools." />
            <div className='flex flex-wrap'>
                <Card imgSrc={image1} imagAlt="Yes" title="YES" languages="Next.js, Typescript, Bootstrap" link="https://yes-next.vercel.app/" />
                <Card imgSrc={image2} imagAlt="PalmJobs" title="Palm Jobs" languages="Next.js, Tailwind Css, TypeScript, AppWrite" link="https://palmjobs.vercel.app/" />
                <Card imgSrc={image3} imagAlt="Nylos" title="Nylos" languages="React.js, Tailwind Css" link="https://nylos.vercel.app/" />
                <Card imgSrc={image4} imagAlt="arcBack" title="Arc Back" languages="React.js, Bootstrap" link="https://arc-back.vercel.app/" />
                <Card imgSrc={image5} imagAlt="selam" title="Nylos" languages="React.js, Tailwind Css" link="https://pos1234.github.io/Project_1/" />
                <Card imgSrc={image6} imagAlt="Portfolio" title="Portfolio" languages="React, Tailwind Css, TypeScript" link="/" />
            </div>
        </div>
    )
}

export default Portfolio