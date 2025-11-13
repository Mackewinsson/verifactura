module.exports = {
  apps: [
    {
      name: "verifactura",
      script: "./bin/www",
      instances: 1,
      exec_mode: "fork",
      autorestart: true,
      watch: false,
      env_file: ".env",
      env: {
        NODE_ENV: "production",
      },
      max_memory_restart: "256M",
    },
  ],
};
