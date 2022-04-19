import { httpService } from "./http.service";
import { utilService } from "./util.service";

const STORAGE_KEY_CURR_DOMAIN = "currDomain";

export const domainService = {
  query,
  getCurrDomain,
};

async function query(domainName, filterBy, sortBy) {
  const data = {
    filterBy,
    sortBy,
  };
  const domain = await httpService.get(`domain/${domainName}`, { data });
  // if (!filterBy) _saveCurrDomain(domain);
  return domain;
}

function getCurrDomain() {
  return JSON.parse(sessionStorage.getItem(STORAGE_KEY_CURR_DOMAIN) || "null");
}

function _saveCurrDomain(domain) {
  sessionStorage.setItem(STORAGE_KEY_CURR_DOMAIN, JSON.stringify(domain));
}
