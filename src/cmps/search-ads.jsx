import { useFormRegister } from '../hooks/useFormRegister'
import { adsService } from '../services/ads.service'




export const SearchAds = (props) => {

    const onSubmitAds = ({ adsName }) => {
        props.onUpdateFilterBy(adsName)
    }
    const [register] = useFormRegister({
        model: '',
        type: '',
    }, onSubmitAds)

    const formProps = { className: 'search-ads-form' }


    return (
        <section className="search-ads form-container">
            <form {...formProps} onSubmit={(ev) => ev.preventDefault()} >
                <label>
                    <input  {...register('adsName', undefined, 'Search for ads')}
                    />
                </label>
            </form>
        </section>
    )
}