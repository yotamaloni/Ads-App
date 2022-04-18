import { httpService } from "./http.service";
import { utilService } from "./util.service";
import { storageService } from "./async-storage.service";

const STORAGE_KEY_CURR_DOMAIN = "currDomain";

export const adsService = {
  query,
  getCurrDomain,
};

async function query(domainName, filterBy, sortBy) {
  // const domain = await storageService.query(
  //   "domain",
  //   domainName,
  //   filterBy,
  //   sortBy
  // );
  // if (!filterBy) _saveCurrDomain(domain);
  // return domain;
  const data = {
    filterBy,
    sortBy,
  };
  return httpService.get(`domain/${domainName}`, { data });
}

function getCurrDomain() {
  return JSON.parse(sessionStorage.getItem(STORAGE_KEY_CURR_DOMAIN) || "null");
}

function _saveCurrDomain(domain) {
  sessionStorage.setItem(STORAGE_KEY_CURR_DOMAIN, JSON.stringify(domain));
}
