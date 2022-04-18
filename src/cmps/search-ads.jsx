import { useFormRegister } from '../hooks/useFormRegister'
import { adsService } from '../services/ads.service'

const onSubmitAds = ({ ads }) => {
}


export const SearchAds = () => {

    const [register] = useFormRegister({
        model: '',
        type: '',
    }, onSubmitAds)

    const formProps = { className: 'search-ads-form' }

    return (
        <section className="search-ads form-container">
            <form {...formProps} >
                <label>
                    <input  {...register('ads', undefined, 'Search for ads')}
                    />
                </label>
            </form>
        </section>
    )
}