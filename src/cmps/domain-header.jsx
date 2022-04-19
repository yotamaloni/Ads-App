import { SaveAction } from './save-action.jsx'

export const DomainHeader = (props) => {
    const { domain } = props
    return (
        <section className="domain-header flex justify-between">
            <div>Domain: <span>{domain.name}</span></div>
            <div>Total advertisers: <span>{domain.numOfAds}</span></div>
            <div>Parse time: <span>{domain.parseTime}ms</span></div>
            <div className="actions-container">
                <SaveAction domain={domain} />
            </div>
        </section>
    )
}