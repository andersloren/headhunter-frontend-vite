export const downloadFile = (htmlCode) => {
  console.log("fileDownloader");
  const fileContent = htmlCode;
  const filename = "ad.html";

  const blob = new Blob([fileContent], { type: "text/html" });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  URL.revokeObjectURL(url);
};
