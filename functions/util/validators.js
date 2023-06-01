exports.isCampaignSourceValid = (source) => {
  const campaignSource = source.toLowerCase();
  if (
    campaignSource === "facebook" ||
    campaignSource === "organic" ||
    campaignSource === "instagram" ||
    campaignSource === "jeepjam22" ||
    campaignSource === "kiosk" ||
    campaignSource === "bizcard" ||
    campaignSource === "unknown"
  ) {
    return true;
  }

  return false;
};
