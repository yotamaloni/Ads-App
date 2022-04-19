export const downloadService = {
  downloadFile,
  getCsvData,
};

async function downloadFile(domain) {
  const fileName = domain.name.split(".")[0];
  const json = JSON.stringify(domain);
  const blob = new Blob([json], { type: "application/json" });
  const href = await URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = href;
  link.download = fileName + ".json";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function getCsvData(domain) {
  let csvData = [
    ["Domain Name", domain.name],
    ["", ""],
    ["Advertiser's Name", "Count"],
  ];
  domain.ads.forEach((ad) => {
    csvData.push([ad.name, ad.count]);
  });
  return csvData;
}
