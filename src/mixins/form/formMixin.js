export default {
  methods: {
    getCampaignSource() {
      const campaignSource = localStorage.getItem("campaignSource");
      if (campaignSource) {
        if (
          this.global.validCampaignSources.includes(
            campaignSource.toLowerCase()
          )
        ) {
          return campaignSource;
        }
        return "unknown";
      }

      return "organic";
    },
  },
};
