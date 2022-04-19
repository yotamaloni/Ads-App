import React, { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom'

import { domainService } from '../services/domain.service'

import { SearchDomain } from "../cmps/search-domain.jsx"
import { DomainHeader } from "../cmps/domain-header.jsx"
import { SearchAds } from "../cmps/search-ads.jsx"
import { AdsList } from "../cmps/ads-list.jsx"
import { PagesList } from "../cmps/page-list.jsx"
import CircularIndeterminate from '../cmps/loader.jsx'


export const AdsApp = (props) => {
    const history = useHistory()

    const [domain, setDomain] = useState(null)
    const [filterBy, setFilterBy] = useState({ title: null, currPage: 1 })
    const [sortBy, setSortBy] = useState({ type: 'count', order: 1 })
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        const { name } = props.match.params;
        onUpdateDomain(name)
    }, [])

    const onUpdateDomain = async (domainName) => {
        setLoading(true)
        await updateDomain(domainName)
        setLoading(false)
    }

    const updateDomain = async (domainName) => {
        const UpdatedFilterBy = { title: null, currPage: 1 }
        setFilterBy(UpdatedFilterBy)
        const domain = await domainService.query(domainName, UpdatedFilterBy, sortBy)
        setDomain(domain)
        history.push(`/domain/${domainName}`)
    }

    const onUpdateFilterBy = async (field, value) => {
        let updatedFilterBy
        if (field === 'title') {
            const { currPage } = filterBy
            updatedFilterBy = { title: value, currPage }
        } else if (field === 'currPage') {
            const { title } = filterBy
            updatedFilterBy = { title, currPage: value }
        }
        setFilterBy(updatedFilterBy)
        const domainFiltered = await domainService.query(domain.name, updatedFilterBy, sortBy)
        setDomain(domainFiltered)
    }

    const onUpdateSortBy = async (sortByType) => {
        let order = 1
        if (sortBy.type === sortByType) {
            order = sortBy.order * -1
        }
        const newSortBy = { type: sortByType, order }
        setSortBy(newSortBy)
        const domainSorted = await domainService.query(domain.name, filterBy, newSortBy)
        setDomain(domainSorted)
    }

    if (!domain || isLoading) return <div className='loader-page'>
        <CircularIndeterminate />
    </div>

    return (
        <section className="ads-app">
            <SearchDomain onUpdateDomain={onUpdateDomain} />
            <DomainHeader domain={domain} />
            <SearchAds onUpdateFilterBy={onUpdateFilterBy} />
            <AdsList ads={domain.adsToDisplay} onUpdateSortBy={onUpdateSortBy} sortBy={sortBy} />
            {domain.adsToDisplay.length === 0 ?
                <div className="failure-msg">
                    No advertisers to display
                </div>
                :
                <PagesList domain={domain} onUpdateFilterBy={onUpdateFilterBy} currPage={filterBy.currPage} />
            }
        </section >
    )
}
