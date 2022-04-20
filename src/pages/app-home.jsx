import { Link } from 'react-router-dom'

export const AppHome = () => {
    const IMG_URL = "https://res.cloudinary.com/dnft2vfvz/image/upload/v1650378131/ies6doefs0lq5vkihm0j.png"
    return (
        <section className="app-home">
            <div className="txt-container">
                <h1>ADS APP helps you to find what you want..</h1>
                <p>Have you ever wondered what the number of advertisers of a particular site is... and did not know how to get it?
                    <br></br>
                    No problem, With ADS APP you can achieve this!
                </p>
                <div className='link-container'>
                    <Link to='/domain/msn.com' >
                        <button> START</button>
                    </Link>
                </div>
            </div>
            <div className="img-container">
                <img src={IMG_URL} />
            </div>
        </section >
    )
}

