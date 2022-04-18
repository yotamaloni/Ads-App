import { Spa } from "@material-ui/icons"
import { AdPreview } from "./ad-preview"

export const AdsList = (props) => {
    const { sortBy } = props
    const { type, order } = sortBy
    return (
        <ul className="clean-list ads">
            <li className="flex justify-between align-center">
                <div onClick={() => props.onUpdateSortBy('domain')}>Domain {type === 'domain' && <span> {(order === 1 ? '⬇' : '⬆')}</span>}</div>
                <div onClick={() => props.onUpdateSortBy('count')}>Count {type === 'count' && <span> {(order === 1 ? '⬇' : '⬆')}</span>}</div>
            </li>
            {
                props.ads.map(ad => {
                    return <li key={ad.id}><AdPreview ad={ad} /></li>
                })
            }
        </ul >
    )
}