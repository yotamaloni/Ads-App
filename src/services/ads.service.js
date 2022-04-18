import { httpService } from "./http.service";
import { utilService } from "./util.service";
import { storageService } from "./async-storage.service";

const STORAGE_KEY_CURR_DOMAIN = "currDomain";

export const adsService = {
  query,
  getCurrDomain,
};

async function query(domainName, filterBy = null) {
  const domain = await storageService.query("domain", domainName);
  _saveCurrDomain(domain);
  return domain;
  // return domain;
  // return httpService.get(`name`, { filterBy });
}

function getCurrDomain() {
  return JSON.parse(sessionStorage.getItem(STORAGE_KEY_CURR_DOMAIN) || "null");
}

function _saveCurrDomain(domain) {
  sessionStorage.setItem(STORAGE_KEY_CURR_DOMAIN, JSON.stringify(domain));
}
