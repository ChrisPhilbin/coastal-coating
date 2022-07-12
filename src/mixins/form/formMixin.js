export default {
  methods: {
    getCampaignSource() {
      const campaignSource = localStorage.getItem("campaignSource");
      if (campaignSource) {
        return campaignSource;
      }

      return "organic";
    },
  },
};
