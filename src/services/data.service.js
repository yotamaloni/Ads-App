import { utilService } from "./util.service";

export const domains = [
  {
    name: "ynet",
    counter: 10,
    ads: [
      { id: utilService.makeId(), name: "google.com", count: 102 },
      { id: utilService.makeId(), name: "yahoo.com", count: 2 },
      { id: utilService.makeId(), name: "yotam.com", count: 234 },
      { id: utilService.makeId(), name: "gmail.com", count: 3 },
      { id: utilService.makeId(), name: "david.com", count: 234 },
      { id: utilService.makeId(), name: "shabi.com", count: 34 },
      { id: utilService.makeId(), name: "momo.com", count: 434 },
    ],
  },
  {
    name: "msn",
    counter: 10,
    ads: [
      { id: utilService.makeId(), name: "dav.com", count: 2 },
      { id: utilService.makeId(), name: "gav.com", count: 2 },
      { id: utilService.makeId(), name: "zav.com", count: 3234 },
      { id: utilService.makeId(), name: "rav.com", count: 23324 },
      { id: utilService.makeId(), name: "shav.com", count: 234 },
      { id: utilService.makeId(), name: "yav.com", count: 23 },
      { id: utilService.makeId(), name: "av.com", count: 1 },
    ],
  },
  {
    name: "yahoo",
    counter: 10,
    ads: [
      { id: utilService.makeId(), name: "ya.com", count: 11 },
      { id: utilService.makeId(), name: "ydf.com", count: 11 },
      { id: utilService.makeId(), name: "yfgh.com", count: 33 },
      { id: utilService.makeId(), name: "yjkj.com", count: 3 },
      { id: utilService.makeId(), name: "ysf.com", count: 234 },
      { id: utilService.makeId(), name: "ylll.com", count: 3 },
      { id: utilService.makeId(), name: "yff.com", count: 4 },
    ],
  },
];
