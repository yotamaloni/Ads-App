import { useFormRegister } from '../hooks/useFormRegister'

export const SearchDomain = () => {

    const [register] = useFormRegister({
        model: '',
        type: '',
    })

    const formProps = { className: 'search-domain-form' }

    return (
        <section className="search-domain">
            <form {...formProps}>
                <label>
                    <input {...register('domain', undefined, 'Enter domain name...(e.g. msn.com)')}
                    />
                </label>
            </form>
        </section>
    )
}