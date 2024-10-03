import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';
import CloseIcon from '@mui/icons-material/Close';

const LinkItems = (props: any) => {

    return <button className='hover:text-orange'
        onClick={() => {
            props.setterFunction(props.text)
            props.closeMenu(false)
        }} >{props.text}</button>

}
const Navigation = ({ scrollToComponent, setClose }: any, props: any) => {
    const handleDownload = () => {
        const pdfUrl = 'assets/Paulos-Gebeyehu-Tefera-Resume.pdf';
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = 'Paulos_Gebeyehu_Resume.pdf';
        link.click();
    };
    return (
        <div className='flex max-md:flex-col max-md:items-start gap-y-8 max-md:fixed max-md:w-[50vw] max-md:h-screen
         max-md:right-0 max-md:border-l-2 max-md:border-orange
          max-md:bg-secondary md:justify-center gap-x-10 p-5 pt-20 md:pt-10 bg-primary text-whiteText font-[600] text-xl'>
            <div className="md:hidden">
                <CloseIcon sx={{ fontSize: '2.5rem' }} onClick={() => setClose(false)} className={props.close ? 'fixed cursor-pointer text-whiteText cursor-pointer rounded-full text-white left-[50vw] top-3 w-12 h-12' : 'hidden'} />
            </div>

            <LinkItems text="Home" setterFunction={scrollToComponent} closeMenu={setClose} />
            <LinkItems text="Portfolio" setterFunction={scrollToComponent} closeMenu={setClose} />
            <LinkItems text="Skills" setterFunction={scrollToComponent} closeMenu={setClose} />
            <LinkItems text="Certificates" setterFunction={scrollToComponent} closeMenu={setClose} />
            <LinkItems text="Contact" setterFunction={scrollToComponent} closeMenu={setClose} />

            <button onClick={handleDownload} className="p-3 max-sm:text-[12px] max-sm:flex max-sm:justify-center max-sm:w-full w-48 my-5 flex rounded-lg border-2 text-base border-orange text-orange text-center cursor-pointer md:hidden">
                Download Resume
            </button>
            <div className='flex flex-wrap gap-5 md:hidden'>
                <a className='cursor-pointer hover:text-orange' href='https://github.com/pos1234' target='_blank'><GitHubIcon /></a>
                <a className='cursor-pointer hover:text-orange' href='https://www.linkedin.com/in/paulos-gebeyehu-84b0a5200/' target='_blank'><LinkedInIcon /></a>
                <a className='cursor-pointer hover:text-orange' href='' target='_blank'><TelegramIcon /></a>
            </div>
        </div>
    )
}

export default Navigation
