import { useEffect, useState } from "react";

import { adsService } from '../services/ads.service'

import { SearchDomain } from "../cmps/search-domain.jsx"
import { DomainHeader } from "../cmps/domain-header.jsx"
import { SearchAds } from "../cmps/search-ads.jsx"
import { AdsList } from "../cmps/ads-list.jsx"
import { LocalDining } from "@material-ui/icons";
// import { CircularIndeterminate } from '../cmps/loader.jsx'


export const AdsApp = () => {
    const [domain, setDomain] = useState(null)
    const [filterBy, setFilterBy] = useState(null)
    const [sortBy, setSortBy] = useState({ type: 'count', order: 1 })
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        const domain = adsService.getCurrDomain()
        if (domain) setDomain(domain)
        else updateDomain('ynet', filterBy, sortBy)
    }, [])

    const onUpdateDomain = (domainName) => {
        setLoading(true)
        updateDomain(domainName)
        setLoading(false)
    }

    const updateDomain = async (domainName) => {
        const domain = await adsService.query(domainName, filterBy, sortBy)
        setDomain(domain)
    }

    const onUpdateFilterBy = async (adsTitle) => {
        let filterBy
        if (adsTitle) filterBy = { title: adsTitle }
        else filterBy = null
        const domainFiltered = await adsService.query(domain.name, filterBy, sortBy)
        setDomain(domainFiltered)
    }

    const onUpdateSortBy = async (sortByType) => {
        let order = 1
        if (sortBy.type === sortByType) {
            order = sortBy.order * -1
        }
        const newSortBy = { type: sortByType, order }
        setSortBy(newSortBy)
        const domainSorted = await adsService.query(domain.name, filterBy, newSortBy)
        setDomain(domainSorted)
    }

    if (!domain) return <div className='loader-page'>
        {/* <CircularIndeterminate /> */}
        loading
    </div>
    return (
        <section className="ads-app">
            <SearchDomain onUpdateDomain={onUpdateDomain} />
            <DomainHeader domain={domain} />
            <SearchAds onUpdateFilterBy={onUpdateFilterBy} />
            <AdsList ads={domain.ads} onUpdateSortBy={onUpdateSortBy} sortBy={sortBy} />
        </section >
    )
}
