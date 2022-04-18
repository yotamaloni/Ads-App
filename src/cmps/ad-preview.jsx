
export const AdPreview = (props) => {
    return (
        <section className="ad-preview">
            <div>{props.ad.name}</div>
            <div>{props.ad.count}</div>
        </section>
    )
}