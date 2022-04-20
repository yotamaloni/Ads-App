import { domainService } from '../services/domain.service'

export const PagesList = (props) => {
    const { domain, onUpdateFilterBy, currPage } = props
    const numberOfPages = Math.ceil(domain.numOfAds / domain.maxItemsInPage)
    const pages = domainService.getPages(numberOfPages)
    
    return (
        <section className="page-list-container">
            <p>All Pages</p>
            <ul className="clean-list flex">
                {pages.map(page => {
                    return <li
                        className={page.numOfPage === currPage ? 'curr-page' : ''}
                        key={page.id}
                        onClick={() => (onUpdateFilterBy('currPage', page.numOfPage))}
                    >
                        {page.numOfPage}
                    </li>
                })}
            </ul >
        </section>
    )
}