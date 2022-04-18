import { useFormRegister } from '../hooks/useFormRegister'

export const SearchAds = () => {

    const [register] = useFormRegister({
        model: '',
        type: '',
    })

    const formProps = { className: 'search-ads-form' }

    return (
        <section className="search-ads">
            <form {...formProps}>
                <label>
                    <input {...register('ads', undefined, 'Search for ads')}
                    />
                </label>
            </form>
        </section>
    )
}