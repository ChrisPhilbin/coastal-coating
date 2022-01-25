exports.isCampaignSourceValid = (source) => {
  const campaignSource = source.toLowerCase();
  if (campaignSource === "facebook") {
    return true;
  }

  return false;
};
