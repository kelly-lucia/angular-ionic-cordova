# angular-ionic-cordova
## 自定义一个cordova插件

1. 安装pluginman

   ```
   npm install -g pluginman
   ```

2. 添加平台

   ```
   ionic cordova platform add android
   ionic cordova platform add ios
   ```

3.  使用 plugman 创建插件模板

   ```
   plugman create --name 插件名 --plugin_id 插件id --plugin_version 插件版本号
   ```

4. 进入插件目录，增加平台（plugin.xml）

   ```
   plugman platform add --platform_name android
   plugman platform add --platform_name ios
   ```

   最终生成的插件文件结构：

   ![image-20201108160441433](C:\Users\Administrator.USER01803251321\AppData\Roaming\Typora\typora-user-images\image-20201108160441433.png)

5. 创建插件package.json文件

   ```
   npm init
   ```

   