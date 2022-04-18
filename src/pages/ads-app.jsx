import { useEffect, useState } from "react";

import { adsService } from '../services/ads.service'

import { SearchDomain } from "../cmps/search-domain.jsx"
import { DomainHeader } from "../cmps/domain-header.jsx"
import { SearchAds } from "../cmps/search-ads.jsx"
import { AdsList } from "../cmps/ads-list.jsx"
import { LocalDining } from "@material-ui/icons";

export const AdsApp = () => {
    const [domain, setDomain] = useState(null)
    const [filterBy, setFilterBy] = useState(null)
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        const domain = adsService.getCurrDomain()
        if (domain) setDomain(domain)
        else updateDomain('ynet')
    }, [])

    const onUpdateDomain = (domainName) => {
        setLoading(true)
        updateDomain(domainName)
        setLoading(false)
    }

    const updateDomain = async (domainName) => {
        const domain = await adsService.query(domainName)
        setDomain(domain)
    }

    const onFilterBy = (filterBy) => {
        setFilterBy(filterBy)
    }
    if (isLoading) return (
        <section className="ads-app">
            Loading
        </section >
    )
    if (!domain) return <div>Loading</div>
    return (
        <section className="ads-app">
            <SearchDomain onUpdateDomain={onUpdateDomain} />
            <DomainHeader domain={domain} />
            <SearchAds onFilterBy={onFilterBy} />
            <AdsList ads={domain.ads} />
        </section >
    )
}


const ads = [
    { id: 2, name: "google.com", count: 102 },
    { id: 3, name: "yahoo.com", count: 2 },
    { id: 4, name: "yotam.com", count: 234 },
    { id: 5, name: "gmail.com", count: 3 },
    { id: 6, name: "david.com", count: 234 },
    { id: 7, name: "shabi.com", count: 34 },
    { id: 8, name: "momo.com", count: 434 },
];
