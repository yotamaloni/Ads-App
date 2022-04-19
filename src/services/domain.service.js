import { httpService } from "./http.service";
import { utilService } from "./util.service";

const STORAGE_KEY_CURR_DOMAIN = "currDomain";

export const domainService = {
  query,
  getCurrDomain,
  getPages,
};

async function query(domainName, filterBy, sortBy) {
  const data = {
    filterBy,
    sortBy,
  };
  const domain = await httpService.get(`domain/${domainName}`, { data });
  return domain;
}

function getCurrDomain() {
  return JSON.parse(sessionStorage.getItem(STORAGE_KEY_CURR_DOMAIN) || "null");
}

function getPages(LengthOfPages) {
  const pages = [];
  for (let i = 0; i < LengthOfPages; i++) {
    pages.push({ numOfPage: i + 1, id: utilService.makeId() });
  }
  return pages;
}
