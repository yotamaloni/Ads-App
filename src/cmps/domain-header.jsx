import { SaveAction } from './save-action.jsx'


export const DomainHeader = (props) => {
    const { domain } = props
    return (
        <section className="domain-header flex justify-between">
            <div>Domain: <span>{domain.name}</span></div>
            <div>Total advertisers: <span>{domain.ads.length}</span></div>
            <div>Parse time: <span>info</span></div>
            <div className="actions-container">
                <SaveAction domain={domain} />
            </div>
        </section>
    )
}