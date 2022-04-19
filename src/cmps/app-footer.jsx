import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';

export const AppFooter = () => {
    return (
        <section className="app-footer flex justify-center align-center">
            <div className='social-media-container'>
                <div className='title'>
                    <p>Visit us</p>
                </div>
                <a target="_blank" href="https://www.facebook.com/" className='social-media-icon-container facebook clean-link'>
                    <FacebookIcon sx={{ width: '100%', height: 'auto' }} />
                </a>
                <a target="_blank" href="https://www.youtube.com/" className='social-media-icon-container youtube clean-link'>
                    <YouTubeIcon sx={{ width: '100%', height: 'auto' }} />
                </a>
                <a target="_blank" href="https://www.twitter.com/" className='social-media-icon-container twitter clean-link'>
                    <TwitterIcon sx={{ width: '100%', height: 'auto' }} />
                </a>
            </div>
            <div className='rights-container flex'>
                <p>©️ All rights reserved</p>
            </div>
        </section>
    )
}