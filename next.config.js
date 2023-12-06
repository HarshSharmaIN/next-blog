const {PHASE_DEVELOPMENT_SERVER} = require("next/constants")

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: 'Cluster74109',
        mongodb_password: 'XEVdXU5sclpR',
        mongodb_clusterName: 'cluster74109',
        mongodb_database: 'next-blog-db-dev',
      },
    };
  }
  return {
      env: {
      mongodb_username: 'Cluster74109',
      mongodb_password: 'XEVdXU5sclpR',
      mongodb_clusterName: 'cluster74109',
      mongodb_database: 'next-blog-db',
    },
  };
}
