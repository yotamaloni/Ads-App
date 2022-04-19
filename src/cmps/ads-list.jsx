import { AdPreview } from "./ad-preview"

export const AdsList = (props) => {
    const { sortBy } = props
    const { type, order } = sortBy
    return (
        <section className="ads-container">
            <ul className="clean-list ads">
                <li className="flex justify-between align-center">
                    <div onClick={() => props.onUpdateSortBy('domain')}>Domain {type === 'domain' && <span> {(order === 1 ? '⬇' : '⬆')}</span>}</div>
                    <div className="count-container" onClick={() => props.onUpdateSortBy('count')}>Count {type === 'count' && <span> {(order === 1 ? '⬇' : '⬆')}</span>}</div>
                </li>
                {
                    props.ads.map(ad => {
                        return <li key={ad._id}>
                            <AdPreview ad={ad} />
                        </li>
                    })
                }
            </ul >
        </section>
    )
}