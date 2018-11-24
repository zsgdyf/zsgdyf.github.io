---
title: Windows 下更改 Telegram Desktop 默认字体
abbrlink: fd45428c
date: 2018-11-15 15:07:00
tags:
- 随笔
- 备份
categories:
- 技术
---

备个份，方便以后好找。

<!--more-->

感谢作者 [ysc3839](https://github.com/ysc3839)

[github 链接地址](https://github.com/ysc3839/TGFont)

# 使用

下载 `TGFont.dll` 并重命名为 `winmm.dll`，然后放在 Telegram 的文件夹里。

[下载地址](https://github.com/ysc3839/TGFont/releases)

# 配置

初次运行时会创建 `TGFont.json`。

将中文字体更改为微软雅黑，我的配置如下：

```json
{
	"fonts": {
		"SimSun": {
			"replace": "Microsoft YaHei UI",
			"#size": 0,
			"#width": 0,
			"#weight": 0,
			"#italic": false,
			"#underLine": false,
			"#strikeOut": false
		}
	},
	"debug": false
}
```

