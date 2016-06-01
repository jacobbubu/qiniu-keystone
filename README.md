本项目是 https://github.com/jacobbubu/keystone/tree/v0.3.x 的演示项目，用来演示 QiniuImage 字段的效果。

运行代码前，需要修改 `./keystone.js` 文件，配置你在 [七牛云存储]() 的 `App Key` 、 `Secret Key` 以及域名前缀（http 和 https(可选)）。

随后在 `models/QiniuImage.js` 中，别忘了修改 `hereImage.bucket` 的配置，这里的值是你在七牛创建的 bucket 名字。

```
npm i
npm start
```

浏览器访问 `http://localhost:3000/keystone`，用户名是 `user@keystonejs.com`, 密码是 `admin`。