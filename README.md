# nextjs14_2

 Version: 0.9.1

 Author  : Kouji Nakashima / kuc-arc-f.com

 date    : 2024/04/22

 update  :

***
### Summary

Next.js 14, sample

***
### setting

* next.config.mjs
```
/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        APP_NAME: "app1234",
        API_URI : "",
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

