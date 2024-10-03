import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';
import myImage from '../Images/my-pic.png';
const Home = ({ scrollToComponent }: any) => {
    const handleDownload = () => {
        const pdfUrl = 'assets/Paulos-Gebeyehu-Tefera-Resume.pdf';
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = 'Paulos_Gebeyehu_Resume.pdf';
        link.click();
    };
    return (
        <div className='flex justify-around flex-wrap pt-20 bg-primary text-whiteText max-md:pb-10 max-md:px-5 lg:px-20'>
            <div className='flex flex-col gap-y-6 md:pt-10 md:w-1/3'>
                <p className='text-5xl md:text-7xl font-[600]'>Paulos <br /> Gebeyehu <span className='text-orange'>.</span></p>
                <div className='flex flex-wrap gap-5 '>
                    <a className='cursor-pointer hover:text-orange' href='https://github.com/pos1234' target='_blank'><GitHubIcon /></a>
                    <a className='cursor-pointer hover:text-orange' href='https://www.linkedin.com/in/paulos-gebeyehu-84b0a5200/' target='_blank'><LinkedInIcon /></a>
                    <a className='cursor-pointer hover:text-orange' href='https://t.me/paulgb' target='_blank'><TelegramIcon /></a>
                </div>
                <div onClick={() => scrollToComponent('Contact')} className='p-3 border-2 rounded-lg w-48 border-orange text-orange text-center cursor-pointer'>
                    Contact Me
                </div>
            </div>
            <div className=' flex justify-center md:w-1/3'>
                <img src={myImage} className='h-[30rem]' />
            </div>
            <div className='flex flex-col pt-10 gap-y-3 md:w-1/3'>
                <p className='text-orange text-2xl font-[600]'>INTRODUCTION</p>
                <p className='text-5xl font-[600]'>Software Engineer</p>
                <p className='flex flex-wrap'>Hi, this is paulos gebeyehu i am a freelance software engineer and designer. I have solid knowledge and experience in programming and web development.</p>
                <div className='flex flex-wrap justify-between items-center'>
                    <div onClick={() => scrollToComponent('Portfolio')} className='cursor-pointer text-orange'>Learn More <ArrowDownwardIcon sx={{ fontSize: '1.2rem' }} className='-mt-0.5' /></div>
                    <button onClick={handleDownload} className="p-3 w-48 rounded-lg border-2 border-orange text-orange text-center cursor-pointer">
                        Download Resume
                    </button>
                    {/* <a href="Paulos_Gebeyehu_Resume.pdf" onClick={handleDownloadResume} className="p-3 w-48 rounded-lg border-2 border-orange text-orange text-center cursor-pointer">
                        Download Resumes
                    </a> */}
                </div>
            </div>
        </div>
    )
}

export default Home
