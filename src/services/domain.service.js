import { httpService } from "./http.service";
import { utilService } from "./util.service";

export const domainService = {
  query,
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

function getPages(LengthOfPages) {
  const pages = [];
  for (let i = 0; i < LengthOfPages; i++) {
    pages.push({ numOfPage: i + 1, id: utilService.makeId() });
  }
  return pages;
}
