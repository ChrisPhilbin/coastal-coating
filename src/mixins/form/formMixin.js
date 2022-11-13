export default {
  data() {
    return {
      phoneRegEx:
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
    };
  },
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
