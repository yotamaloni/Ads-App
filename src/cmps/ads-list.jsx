import { AdPreview } from "./ad-preview"

export const AdsList = (props) => {
    return (
        <ul className="clean-list ads">
            <li className="flex justify-between align-center">
                <div>Domain</div>
                <div>Count</div>
            </li>
            {props.ads.map(ad => {
                return <li key={ad.id}><AdPreview ad={ad} /></li>
            })}
        </ul>
    )
}