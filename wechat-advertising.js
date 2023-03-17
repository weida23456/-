/**
* @supported 你的设备 ID
// 设备ID为 Quantumult X - 点击 小风车 - 下滑到底 - 其它设置 - 下滑到底 - 关于 - 设备ID -长按 即可拷贝,然后替换到上面即可
*/

// 去除微信公众号文章内广告
var obj = JSON.parse($response.body);
obj.advertisement_num = 0;
obj.advertisement_info = [];
delete obj.appid;
$done({ body: JSON.stringify(obj) });
