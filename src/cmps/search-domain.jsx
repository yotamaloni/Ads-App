import { useState, useEffect, useRef } from "react";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

import { useFormRegister } from '../hooks/useFormRegister'

export const SearchDomain = (props) => {
    const inputRef = useRef();
    useEffect(() => {
        inputRef.current.focus()
    }, [])

    const onDomainNameChange = ({ domainName }) => {
        setDomain(domainName)
    }

    const onSubmitForm = (ev) => {
        if (!domainName) return
        ev.preventDefault()
        props.onUpdateDomain(domainName)
    }
    const [domainName, setDomain] = useState('')
    const [register] = useFormRegister({
        model: '',
        type: '',
    }, onDomainNameChange)

    const formProps = { className: 'search-domain-form' }

    return (
        <section className="search-domain form-container">
            <form {...formProps} onSubmit={onSubmitForm} className="flex">
                <SearchOutlinedIcon onClick={onSubmitForm} className="clickable" />
                <input ref={inputRef} required {...register('domainName', undefined, 'Enter domain name...(e.g. msn.com)')}
                />
            </form>
        </section>
    )
}