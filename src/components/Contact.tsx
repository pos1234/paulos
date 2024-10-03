import EmailIcon from '@mui/icons-material/Email';
import TelegramIcon from '@mui/icons-material/Telegram';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import HeadingTexts from './HeadingTexts'
const Card = (props: any) => {
    return <a href={props.link} target='_blank' className='p-3 sm:border-r-2 hover:text-orange px-4 max-w-[20rem] border-orange text-whiteText hover:text-orange text-center cursor-pointer'>
        {props.icons} {props.text}
    </a>
}
const Contact = () => {
    const handleDownload = () => {
        const pdfUrl = 'assets/Paulos-Gebeyehu-Tefera-Resume.pdf';
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = 'Paulos_Gebeyehu_Resume.pdf';
        link.click();
    };
    return (
        <div className='flex flex-col gap-y-10 bg-primary text-whiteText py-16 lg:px-20'>
            <HeadingTexts title="CONTACT" subTitle="Ways To Contact Me" description="Get the best offers without compromising quality. Feel free to contact me." />
            <button onClick={handleDownload} className='p-3 border-2 rounded-lg w-48 border-orange text-orange text-center cursor-pointer self-center'>
                Download Resume
            </button>
            <div className='flex flex-wrap justify-center gap-5'>
                <Card icons={< TelegramIcon />} text="Telegram" link="https://t.me/paulgb" />
                <Card icons={<  PhoneIphoneIcon />} text="+251 966997610" />
                <Card icons={< EmailIcon />} text="paulosegebeyehu5@gmail.com" />
            </div>
        </div>
    )
}

export default Contact
