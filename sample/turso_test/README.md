# turso test

 Version: 0.9.1

 Author  : Kouji Nakashima / kuc-arc-f.com

 date    : 2024/04/22

 update  :

***
### Summary

Turso LibSQL sample

***
### setting

* next.config.mjs
```
/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        APP_NAME: "app1234",
        API_URI : "",
        TURSO_AUTH_TOKEN: "",
        TURSO_URL: "libsql://",
    }, 
    experimental: {
        missingSuspenseWithCSRBailout: false,
    },
};

export default nextConfig;
```

***
### Blog:


***

