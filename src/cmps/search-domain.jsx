import { useState } from "react";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

import { useFormRegister } from '../hooks/useFormRegister'

export const SearchDomain = (props) => {

    const onDomainChange = ({ domain }) => {
        setDomain(domain)
    }

    const onSubmitForm = (ev) => {
        if (!domain) return
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
            <form {...formProps} onSubmit={onSubmitForm} className="flex">
                <SearchOutlinedIcon onClick={onSubmitForm} className="clickable" />
                <input required {...register('domain', undefined, 'Enter domain name...(e.g. msn.com)')}
                />
            </form>
        </section>
    )
}