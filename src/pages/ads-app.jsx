import { SearchDomain } from "../cmps/search-domain.jsx"
import { DomainHeader } from "../cmps/domain-header.jsx"
import { SearchAds } from "../cmps/search-ads.jsx"
import { AdsList } from "../cmps/ads-list.jsx"

export const AdsApp = () => {
    return (
        <section className="ads-app">
            <SearchDomain />
            <DomainHeader />
            <SearchAds />
            <AdsList />
        </section >
    )
}

