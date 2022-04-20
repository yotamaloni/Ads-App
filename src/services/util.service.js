export const utilService = {
  makeId,
  getCleanUrl,
};

function makeId(length = 6) {
  var txt = "";
  var possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < length; i++) {
    txt += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return txt;
}

//Validate the name of the domain
function getCleanUrl(url) {
  const possibles = ["https://www.", "http://www.", "www.", "https", "http"];
  let cleanUrl = url;
  const possible = possibles.find((currPossible) =>
    url.startsWith(currPossible)
  );
  if (possible) {
    cleanUrl = url.substring(possible.length, url.length);
  }
  return cleanUrl;
}

