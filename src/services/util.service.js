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
  let cleanUrl = url.toLowerCase();
  const possible = possibles.find((currPossible) =>
    cleanUrl.startsWith(currPossible)
  );
  if (possible) {
    cleanUrl = cleanUrl.substring(possible.length, cleanUrl.length);
  }
  return cleanUrl;
}
