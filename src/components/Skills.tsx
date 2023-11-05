import React, { ReactNode } from 'react'
import HeadingTexts from './HeadingTexts';
import VerifiedRoundedIcon from '@mui/icons-material/VerifiedRounded';
interface CardProps {
    children: ReactNode;
}
const Card: React.FC<CardProps> = ({ children }) => {
    return <div className='w-full md:flex-1 flex flex-col p-5 bg-secondary rounded-lg'>
        {children}
    </div>
}
const ListItems = (props: any) => {
    return <p className='flex items-center gap-x-1'><VerifiedRoundedIcon sx={{ fontSize: '0.8rem' }} /> {props.text}</p>
}
const Skills = () => {
    return (
        <div id='skills' className='flex flex-col gap-y-10 bg-primary text-whiteText py-16 lg:px-20'>
            <HeadingTexts title="Skills" subTitle="Current Skill Set" description="Personal skills on web development and tools." />
            <div className='flex flex-wrap gap-5 max-sm:px-5'>
                <Card>
                    <p className='text-2xl font-[600] text-center text-orange'>Front End</p>
                    <div className='flex flex-wrap gap-x-5 gap-y-3 pt-5 text-center justify-around'>
                        <div className='flex flex-col gap-y-3'>
                            <ListItems text="React.js" />
                            <ListItems text="Next.js" />
                            <ListItems text="Tailwind css" />
                        </div>
                        <div className='flex flex-col gap-y-3'>
                            <ListItems text="Boostrap" />
                            <ListItems text="Material UI" />
                        </div>
                    </div>
                </Card>
                <Card>
                    <p className='text-2xl font-[600] text-center text-orange'>Back End</p>
                    <div className='flex flex-wrap gap-x-5 gap-y-3 pt-5 text-center justify-around'>
                        <div className='flex flex-col gap-y-3'>
                            <ListItems text="Node.js" />
                            <ListItems text="Appwrite" />
                        </div>
                        <div className='flex flex-col gap-y-3'>
                            <ListItems text="Laravel" />
                        </div>
                    </div>
                </Card>
                <Card>
                    <p className='text-2xl font-[600] text-center text-orange'>Database & Tools</p>
                    <div className='flex flex-wrap gap-x-5 gap-y-3 pt-5 text-center justify-around'>
                        <div className='flex flex-col gap-y-3'>
                            <ListItems text="MongoDB" />
                            <ListItems text="Mysql" />
                        </div>
                        <div className='flex flex-col gap-y-3'>
                            <ListItems text="Git" />
                            <ListItems text="Figma" />
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    )
}

export default Skills