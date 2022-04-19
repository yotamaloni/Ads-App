
export const AdPreview = (props) => {
    const URL = `https://www.${props.ad.name}`
    return (
        <section className="ad-preview">
            <a target="_blank" href={URL} className="costume-link">{props.ad.name}</a>
            <div className="count-container">{props.ad.count}</div>
        </section>
    )
}