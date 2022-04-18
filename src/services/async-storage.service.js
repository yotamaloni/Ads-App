import { utilService } from "./util.service.js";
import { domains } from "./data.service.js";

export const storageService = {
  query,
  get,
  post,
  put,
  remove,
};

var timeoutId = null;

function query(entityType, entityName, filterBy, sortBy, delay = 100) {
  var entities = JSON.parse(localStorage.getItem(entityType)) || domains;
  _save(entityType, entities);
  const domain = entities.find(
    (entity) => entity.name.toLowerCase() === entityName.toLowerCase()
  );

  if (filterBy) {
    domain.ads = domain.ads.filter((ad) =>
      ad.name.toLowerCase().includes(filterBy.title.toLowerCase())
    );
  }

  domain.ads.sort((ad1, ad2) => {
    if (sortBy.type === "count") return (ad2.count - ad1.count) * sortBy.order;
    const name1 = ad1.name.toLowerCase();
    const name2 = ad2.name.toLowerCase();
    return 1;
  });

  return new Promise((resolve, reject) => {
    clearTimeout();
    timeoutId = setTimeout(() => {
      if (!domain) reject("OOOOPs");
      resolve(domain);
    }, delay);
  });
}

function get(entityType, entityId) {
  return query(entityType).then((entities) =>
    entities.find((entity) => entity._id === entityId)
  );
}
function post(entityType, newEntity) {
  newEntity._id = _makeId();
  return query(entityType).then((entities) => {
    entities.push(newEntity);
    _save(entityType, entities);
    return newEntity;
  });
}

function put(entityType, updatedEntity) {
  return query(entityType).then((entities) => {
    const idx = entities.findIndex(
      (entity) => entity._id === updatedEntity._id
    );
    entities.splice(idx, 1, updatedEntity);
    _save(entityType, entities);
    return updatedEntity;
  });
}

function remove(entityType, entityId) {
  return query(entityType).then((entities) => {
    const idx = entities.findIndex((entity) => entity._id === entityId);
    entities.splice(idx, 1);
    _save(entityType, entities);
  });
}

function _save(entityType, entities) {
  console.log("entityType FROM SAVE!", entityType);
  localStorage.setItem(entityType, JSON.stringify(entities));
}

function _makeId(length = 5) {
  var text = "";
  var possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}
