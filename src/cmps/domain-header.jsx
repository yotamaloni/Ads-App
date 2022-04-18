export const DomainHeader = (props) => {
    const { domain } = props
    return (
        <section className="domain-header flex justify-between">
            <div>Name: <span>{domain.name}</span></div>
            <div>Counter: <span>{domain.ads.length}</span></div>
            <div>info-title: <span>info</span></div>
            <div>info-title: <span>info</span></div>
        </section>
    )
}