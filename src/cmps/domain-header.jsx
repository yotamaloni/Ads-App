import { SaveAction } from './save-action.jsx'

export const DomainHeader = (props) => {
    const { domain } = props
    const { parseTime } = domain
    return (
        <section className="domain-header flex justify-between">
            <div>Domain: <span>{domain.name}</span></div>
            <div>Total advertisers: <span>{domain.numOfAds}</span></div>
            <div>Parse time: <span>{parseTime === 'cached' ? 'Cached' : parseTime + 'ms'}</span></div>
            <div className="actions-container">
                <SaveAction domain={domain} />
            </div>
        </section>
    )
}