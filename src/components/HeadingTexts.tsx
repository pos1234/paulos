import React from 'react'

const HeadingTexts = (props: any) => {
    return (
        <div className='flex flex-col gap-y-5 items-center'>
            <p className='text-orange font-[600] text-3xl'>{props.title}</p>
            {props.subTitle && <p className='font-[600] text-4xl'>{props.subTitle}</p>}
            <p className='text-center text-lg lg:w-1/3'>{props.description}</p>
        </div>
    )
}

export default HeadingTexts