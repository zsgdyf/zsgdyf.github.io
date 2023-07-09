---
title: Hexo-next 基础配置
tags:
  - Hexo
  - 学习
categories:
  - 技术
abbrlink: 31053b28
date: 2018-09-26 17:29:17
---

Hexo-next 主题的配置文件位于`/themes/next/_config.yml`，
大部分情况下只需要修改这个文件即可。

<!--more-->

# 修改网站图标

```yaml
favicon:
  small: /images/favicon-16x16-next.png
  medium: /images/favicon-32x32-next.png
  apple_touch_icon: /images/apple-touch-icon-next.png
  safari_pinned_tab: /images/logo.svg
```

将你想要更改的图标文件放在`/source/`目录（推荐）或者`hexo-site/themes/next/source/images/`目录替换同名文件即可。

# 增加（或删除）“标签”、“分类”等

在网站所在文件夹执行

```
hexo new page tags
```

即可添加标签页面
（分类同理`hexo new page categories`）

对应 next 主题配置文件

```yaml
menu:
  home: / || home
  #about: /about/ || user
  tags: /tags/ || tags
  categories: /categories/ || th
  archives: /archives/ || archive
  #schedule: /schedule/ || calendar
  #sitemap: /sitemap.xml || sitemap
  #commonweal: /404/ || heartbeat
```

# 添加友链

```yaml
# Blog rolls
links_icon: link
links_title: Friends
links_layout: block
#links_layout: inline
links:
   沚水的小窝: http://blog.zsakvo.cc/
```

# 设置自己头像

```yaml
  avatar: /images/avatar.jpg
```

# 侧边栏增加自己社交账号

```yaml
social:
  GitHub: https://github.com/zsgdyf || github
  #E-Mail: mailto:yourname@gmail.com || envelope
  #Google: https://plus.google.com/yourname || google
  Twitter: https://twitter.com/zsgdyf || twitter
  #FB Page: https://www.facebook.com/yourname || facebook
  #VK Group: https://vk.com/yourname || vk
  #StackOverflow: https://stackoverflow.com/yourname || stack-overflow
  #YouTube: https://youtube.com/yourname || youtube
  #Instagram: https://instagram.com/yourname || instagram
  #Skype: skype:yourname?call|chat || skype
```

# 文章字数统计

安装字数统计插件

```
  npm i --save hexo-wordcount
```

然后打开主题配置

```yaml
 post_wordcount:
  item_text: true
  wordcount: true
  min2read: false
  totalcount: true
  separated_meta: true
```

打开 post.swig 文件，`/themes/next/layout/_macro/post.swig`

找到如下代码：

```html
<span title="{{ __('post.wordcount') }}">
    {{ wordcount(post.content) }}
</span>
```

修改为：

```html
<span title="{{ __('post.wordcount') }}">
    {{ wordcount(post.content) }} 字
</span>
```

同理修改阅读时长，修改为：

```html
<span title="{{ __('post.min2read') }}">
    {{ min2read(post.content) }} 分钟
</span>
```

# 修改字体大小

找到 base.styl 文件，`/themes/next/source/css/_variables/base.styl`

找到如下代码

```styl
// Font size
$font-size-base           = 16px
$font-size-base           = unit(hexo-config('font.global.size'), px) if hexo-config('font.global.size') is a 'unit'
$font-size-small          = $font-size-base - 2px
$font-size-smaller        = $font-size-base - 4px
$font-size-large          = $font-size-base + 2px
$font-size-larger         = $font-size-base + 4px


// Headings font size
$font-size-headings-step    = 2px
$font-size-headings-base    = 25px
$font-size-headings-base    = unit(hexo-config('font.headings.size'), px) if hexo-config('font.headings.size') is a 'unit'
$font-size-headings-small   = $font-size-headings-base - $font-size-headings-step
$font-size-headings-smaller = $font-size-headings-small - $font-size-headings-step
$font-size-headings-large   = $font-size-headings-base + $font-size-headings-step
$font-size-headings-larger  = $font-size-headings-large + $font-size-headings-step
```

修改其中的`font-size-base`即可。

# 增加站内搜索

在网站所在文件夹执行

```
npm install hexo-generator-search --save
```

添加搜索功能

接着修改主题配置文件为

```yaml
local_search:
  enable: true
```
