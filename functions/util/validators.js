exports.isCampaignSourceValid = (source) => {
  const campaignSource = source.toLowerCase();
  if (campaignSource === "facebook" || campaignSource === "organic" || campaignSource === "instagram") {
    return true;
  }

  return false;
};
