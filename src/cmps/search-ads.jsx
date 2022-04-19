import { useFormRegister } from '../hooks/useFormRegister'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

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
            <form {...formProps} onSubmit={(ev) => ev.preventDefault()} className="flex" >
                <SearchOutlinedIcon className="clickable" />
                <input required {...register('adsName', undefined, 'Search for ads...')}
                />
            </form>
        </section>
    )
}