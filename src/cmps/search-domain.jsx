import { useState } from "react";
import { useFormRegister } from '../hooks/useFormRegister'

export const SearchDomain = (props) => {

    const onDomainChange = ({ domain }) => {
        setDomain(domain)
    }

    const onSubmitForm = (ev) => {
        ev.preventDefault()
        props.onUpdateDomain(domain)
    }
    const [domain, setDomain] = useState('')
    const [register] = useFormRegister({
        model: '',
        type: '',
    }, onDomainChange)

    const formProps = { className: 'search-domain-form' }

    return (
        <section className="search-domain form-container">
            <form {...formProps} onSubmit={onSubmitForm}>
                <label>
                    <input required {...register('domain', undefined, 'Enter domain name...(e.g. msn.com)')}
                    />
                </label>
            </form>
        </section>
    )
}