module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "postgres",
        host: env(
          "DATABASE_HOST",
          "primital-strapi-db.eastus2.azurecontainer.io"
        ),
        port: env.int("DATABASE_PORT", 5432),
        database: env("DATABASE_NAME", "PrimitalStrapiDB"),
        username: env("DATABASE_USERNAME", "postgres"),
        password: env("DATABASE_PASSWORD", "L{3>PvN^8\\Y+?4D_"),
        ssl: env.bool("DATABASE_SSL", false),
      },
      options: {},
    },
  },
});
