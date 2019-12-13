var express = require('express');
var router = express.Router();

router.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", ' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {title: 'Express'});
  res.send('跨域请求');
});
router.get('/login', function (req, res, next) {
  res.json({
    data:[
        {username: "aaa", password: "123456"}
    ],
    status:200,
    statusText: "OK"
  });
});
router.get('/logout', function (req, res, next) {
  res.json({
    code: "0",
  });
});

//左侧菜单数据
router.get('/aside', function (req, res, next) {
  res.json({
    "list": [
      {
        "id": "12029857621868544",
        "createDate": "2016-05-16 15:26:44",
        "modifyDate": "2016-07-21 18:40:24",
        "flag": true,
        "orders": "1",
        "name": "人员管理",
        "parentId": "12029684246118400",
        "remark": "用户管理",
        "url": "/admin/admin/list.jhtml",
        "type": "1",
        "large": "",
        "medium": "http://192.168.0.8:8083/image/upload/image/menu/2016/07/21/p1ao6g3g9kvum632101s10ig4ee5.png",
        "mediumBg": "http://192.168.0.8:8083/image/upload/image/menu/2016/07/21/p1ao6g3m821vu12m3o0k2eq17397.png",
        "thumbnail": "",
        "isParent": true,
        "parentName": "",
        "icon": 'iconfont el-icon-location',
      },
      {
        "id": "12030099176030208",
        "createDate": "2016-05-16 15:27:42",
        "modifyDate": "2016-07-21 18:31:47",
        "flag": true,
        "orders": "2",
        "name": "角色管理",
        "parentId": "12029684246118400",
        "remark": "角色管理",
        "url": "/admin/role/list.jhtml",
        "type": "1",
        "large": "",
        "medium": "http://192.168.0.8:8083/image/upload/image/menu/2016/07/21/p1ao6g5cpl4uk114qhg012b8kk75.png",
        "mediumBg": "http://192.168.0.8:8083/image/upload/image/menu/2016/07/21/p1ao6g5k97ifp15uoahj139u6p67.png",
        "thumbnail": "",
        "isParent": true,
        "parentName": "",
        "icon": 'iconfont el-icon-location',
      },
      {
        "id": "12030299793784832",
        "createDate": "2016-05-16 15:28:30",
        "modifyDate": "2016-07-25 18:50:11",
        "flag": true,
        "orders": "3",
        "name": "菜单管理",
        "parentId": "12029684246118400",
        "remark": "权限管理",
        "url": "/admin/menu/tree.jhtml",
        "type": "1",
        "large": "",
        "medium": "http://192.168.0.8:8083/image/upload/image/menu/2016/07/21/p1ao6g6lt714c5fmc16hu4nh16hh5.png",
        "mediumBg": "http://192.168.0.8:8083/image/upload/image/menu/2016/07/21/p1ao6g6p4l1i281nd4msr96422m7.png",
        "thumbnail": "",
        "isParent": true,
        "parentName": "",
        "icon": 'iconfont el-icon-location',
      },
      {
        "id": "13099012202692608",
        "createDate": "2016-05-19 14:15:11",
        "modifyDate": "2016-07-20 14:55:49",
        "flag": true,
        "orders": "4",
        "name": "区域管理",
        "parentId": "12029684246118400",
        "remark": "区域管理",
        "url": "/admin/area/tree.jhtml",
        "type": "1",
        "large": "",
        "medium": "http://192.168.0.8:8083/image/upload/image/menu/2016/05/19/p1aj3qe898u3t1vpti1v70dhf5.png",
        "mediumBg": "http://192.168.0.8:8083/image/upload/image/menu/2016/05/19/p1aj3qei269j76hmovv8210iu7.png",
        "thumbnail": "",
        "isParent": true,
        "parentName": "",
        "icon": 'iconfont el-icon-location',
      },
      {
        "id": "13499244367314944",
        "createDate": "2016-05-20 16:45:33",
        "modifyDate": "2018-01-18 09:46:45",
        "flag": true,
        "orders": "5",
        "name": "机构管理",
        "parentId": "12029684246118400",
        "remark": "",
        "url": "/admin/areaProxy/tree.jhtml",
        "type": "1",
        "large": "",
        "medium": "http://192.168.0.8:8083/image/upload/image/menu/2018/01/18/p1c43f3lu9bnv17131hftvkev6a5.png",
        "mediumBg": "http://192.168.0.8:8083/image/upload/image/menu/2018/01/18/p1c43f405oko81mh21m9dvoos4e7.png",
        "thumbnail": "",
        "isParent": true,
        "parentName": "",
        "icon": 'iconfont el-icon-location',
      },
      {
        "id": "15587894823485440",
        "createDate": "2016-05-26 11:05:06",
        "modifyDate": "2018-01-18 09:48:10",
        "flag": true,
        "orders": "6",
        "name": "电子卡分级",
        "parentId": "12029684246118400",
        "remark": "电子卡分级",
        "url": "/admin/member/list.jhtml",
        "type": "1",
        "large": "",
        "medium": "http://192.168.0.8:8083/image/upload/image/menu/2018/01/18/p1c43f77aar8ies8ignhshmaa5.png",
        "mediumBg": "http://192.168.0.8:8083/image/upload/image/menu/2018/01/18/p1c43f7abtjt5138b19i214im2dt7.png",
        "thumbnail": "",
        "isParent": true,
        "parentName": "",
        "icon": 'iconfont el-icon-location',
      },
      {
        "id": "132365441262682112",
        "createDate": "2017-04-13 16:57:23",
        "modifyDate": "2018-01-18 09:47:32",
        "flag": true,
        "orders": "7",
        "name": "充值规则",
        "parentId": "12029684246118400",
        "remark": "",
        "url": "/admin/rechargeRule/list.jhtml",
        "type": "1",
        "large": "",
        "medium": "http://192.168.0.8:8083/image/upload/image/menu/2018/01/18/p1c43f625m1rn4v151cgc12a86bo5.png",
        "mediumBg": "http://192.168.0.8:8083/image/upload/image/menu/2018/01/18/p1c43f65smg0hai41e9m1ms93mh7.png",
        "thumbnail": "",
        "isParent": true,
        "parentName": "",
        "icon": 'iconfont el-icon-location',
      },
      {
        "id": "12669476390567936",
        "createDate": "2016-05-18 09:48:21",
        "modifyDate": "2016-07-21 18:39:17",
        "flag": true,
        "orders": "8",
        "name": "标准编码",
        "parentId": "12029684246118400",
        "remark": "",
        "url": "/admin/stdCodeType/list.jhtml",
        "type": "1",
        "large": "",
        "medium": "http://192.168.0.8:8083/image/upload/image/menu/2016/07/21/p1ao6gjabr1nkb2h71muo1b3lqur5.png",
        "mediumBg": "http://192.168.0.8:8083/image/upload/image/menu/2016/07/21/p1ao6gjcjnhf7d3u118ummq1kbk7.png",
        "thumbnail": "",
        "isParent": true,
        "parentName": "",
        "icon": 'iconfont el-icon-location',
      },
      {
        "id": "31539903175065600",
        "createDate": "2016-07-09 11:32:42",
        "modifyDate": "2016-07-22 16:10:46",
        "flag": true,
        "orders": "9",
        "name": "系统设置",
        "parentId": "12029684246118400",
        "remark": "",
        "url": "/admin/setting/editPointSetting.jhtml",
        "type": "1",
        "large": "",
        "medium": "http://192.168.0.8:8083/image/upload/image/menu/2016/07/21/p1ao6gjprk1hi8m9q1ma37o31t9v5.png",
        "mediumBg": "http://192.168.0.8:8083/image/upload/image/menu/2016/07/21/p1ao6gjshnbncp05ej51osu1l8q7.png",
        "thumbnail": "",
        "isParent": true,
        "parentName": "",
        "icon": 'iconfont el-icon-location',
      },
      {
        "id": "232655505460297728",
        "createDate": "2018-01-15 10:54:18",
        "modifyDate": "2018-01-15 10:54:50",
        "flag": true,
        "orders": "10",
        "name": "油站支付配置",
        "parentId": "12029684246118400",
        "remark": "油站支付配置",
        "url": "/admin/orgPaymerchant/list.jhtml",
        "type": "1",
        "large": "",
        "medium": "http://192.168.0.8:8083/image/upload/image/menu/2018/01/15/p1c3rrp8vr135113fbj5ksmtt55.png",
        "mediumBg": "http://192.168.0.8:8083/image/upload/image/menu/2018/01/15/p1c3rrporu1ihn1hvktc1jb42j47.png",
        "thumbnail": "",
        "isParent": true,
        "parentName": "",
        "icon": 'iconfont el-icon-location',
      },
      {
        "id": "200082929748017152",
        "createDate": "2017-10-17 13:42:31",
        "modifyDate": "2017-10-17 13:42:31",
        "flag": true,
        "orders": "11",
        "name": "支付商户配置",
        "parentId": "12029684246118400",
        "remark": "支付商户配置",
        "url": "/admin/payMerchant/list.jhtml",
        "type": "1",
        "large": "",
        "medium": "http://192.168.0.8:8083/image/upload/image/menu/2017/10/17/p1bskdk75lfr0eun15m5mnl1hnu5.png",
        "mediumBg": "http://192.168.0.8:8083/image/upload/image/menu/2017/10/17/p1bskdlhm41m2ihaq1o8slie1rb17.png",
        "thumbnail": "",
        "isParent": true,
        "parentName": "",
        "icon": 'iconfont el-icon-location',
      },
      {
        "id": "37430594438692864",
        "createDate": "2016-07-25 17:40:12",
        "modifyDate": "2016-07-25 18:52:33",
        "flag": true,
        "orders": "12",
        "name": "代理权限设置",
        "parentId": "12029684246118400",
        "remark": "",
        "url": "",
        "type": "1",
        "large": "",
        "medium": "http://192.168.0.8:8083/image/upload/image/menu/2016/07/25/p1aogqrn2d1laq1urfndt6cp7ht5.png",
        "mediumBg": "http://192.168.0.8:8083/image/upload/image/menu/2016/07/25/p1aogqrt87i6s94duq2c70l647.png",
        "thumbnail": "",
        "isParent": true,
        "parentName": "",
        "icon": 'iconfont el-icon-location',
        "children": [
          {
            "id": "13",
            "name": "油站人员管理"
          },
          {
            "id": "14",
            "name": " 油站角色管理"
          },
          {
            "id": "15",
            "name": " 油站菜单管理"
          },
          {
            "id": "16",
            "name": " 自动油站角色"
          },
        ]
      },
      {
        "id": "37448952089411584",
        "createDate": "2016-07-25 18:53:09",
        "modifyDate": "2016-07-25 18:53:09",
        "flag": true,
        "orders": "13",
        "name": "公司权限设置",
        "parentId": "12029684246118400",
        "remark": "",
        "url": "",
        "type": "1",
        "large": "",
        "medium": "http://192.168.0.8:8083/image/upload/image/menu/2016/07/25/p1aogqv9fq18m81fja8fb17l1jdq5.png",
        "mediumBg": "http://192.168.0.8:8083/image/upload/image/menu/2016/07/25/p1aogqvc2ei0ftsp58a1as2pq27.png",
        "thumbnail": "",
        "isParent": true,
        "parentName": "",
        "icon": 'iconfont el-icon-location',
        "children": [
          {
            "id": "1",
            "name": "公司人员管理"
          },
          {
            "id": "2",
            "name": " 公司角色管理"
          },
          {
            "id": "3",
            "name": " 公司菜单管理"
          }
        ]
      },
      {
        "id": "37449063930527744",
        "createDate": "2016-07-25 18:53:35",
        "modifyDate": "2016-07-25 18:53:35",
        "flag": true,
        "orders": "14",
        "name": "油站权限设置",
        "parentId": "12029684246118400",
        "remark": "",
        "url": "",
        "type": "1",
        "large": "",
        "medium": "http://192.168.0.8:8083/image/upload/image/menu/2016/07/25/p1aogr08k7im0tmkn7qfh01bq75.png",
        "mediumBg": "http://192.168.0.8:8083/image/upload/image/menu/2016/07/25/p1aogr0acvqihdji1rke1nb41fpl7.png",
        "thumbnail": "",
        "isParent": true,
        "parentName": "",
        "icon": 'iconfont el-icon-location',
        "children": [
          {
            "id": "4",
            "name": "油站人员管理"
          },
          {
            "id": "5",
            "name": " 油站角色管理"
          },
          {
            "id": "6",
            "name": " 油站菜单管理"
          },
          {
            "id": "7",
            "name": " 自动油站角色"
          },
          {
            "id": "8",
            "name": " 自动油站菜单"
          },
          {
            "id": "9",
            "name": " MIS油站角色"
          },
          {
            "id": "10",
            "name": " MIS油站菜单"
          }
        ]
      },
      {
        "id": "70659339181883392",
        "createDate": "2016-10-25 10:19:22",
        "modifyDate": "2016-10-25 10:20:53",
        "flag": true,
        "orders": "33",
        "name": "洗车房权限设置",
        "parentId": "12029684246118400",
        "remark": "",
        "url": "",
        "type": "15",
        "large": "",
        "medium": "http://192.168.0.8:8083/image/upload/image/menu/2016/07/25/p1aogqrn2d1laq1urfndt6cp7ht5.png",
        "mediumBg": "http://192.168.0.8:8083/image/upload/image/menu/2016/07/25/p1aogqvc2ei0ftsp58a1as2pq27.png",
        "thumbnail": "",
        "isParent": true,
        "parentName": "",
        "icon": 'iconfont el-icon-location',
        "children": [
          {
            "id": "70659339181883352",
            "name": "洗车房人员管理"
          },
          {
            "id": "11",
            "name": " 洗车房角色管理"
          },
          {
            "id": "12",
            "name": " 洗车房菜单管理"
          }
        ]
      },
      {
        "id": "170748268668518400",
        "createDate": "2017-07-28 14:57:02",
        "modifyDate": "2018-01-18 10:28:35",
        "flag": true,
        "orders": "16",
        "name": "定时任务管理",
        "parentId": "12029684246118400",
        "remark": "",
        "url": "/admin/timingTask/list.jhtml",
        "type": "1",
        "large": "",
        "medium": "http://192.168.0.8:8083/image/upload/image/menu/2018/01/18/p1c43hh6em1l1d1pgp1j38jco1aio5.png",
        "mediumBg": "http://192.168.0.8:8083/image/upload/image/menu/2018/01/18/p1c43hha4g1bv4rbl1sslobd1lv77.png",
        "thumbnail": "",
        "isParent": true,
        "parentName": ""
      }
    ]
  });
});
router.get('/asideData', function (req, res, next) {
  res.json({
    "list": [
      {
        "id": "01",
        "name": "推广详情",
        "parentId": "12029684246118400",
        "icon": 'iconfont el-icon-location',
      },
      {
        "id": "02",
        "name": "转卡记录",
        "parentId": "12029684246118400",
        "icon": 'iconfont el-icon-location',
      },
      {
        "id": "03",
        "name": "每日资金统计",
        "icon": 'iconfont el-icon-location',
      },
      {
        "id": "04",
        "name": "消费开票管理",
        "icon": 'iconfont el-icon-location',
      },
      {
        "id": "05",
        "name": "充值开票管理",
        "icon": 'iconfont el-icon-location',
      },
      {
        "id": "06",
        "name": "pos交易流水",
        "icon": 'iconfont el-icon-location',
      },
      {
        "id": "07",
        "name": "中转交易流水",
        "icon": 'iconfont el-icon-location',
      },
      {
        "id": "09",
        "name": "电子卡日报",
        "icon": 'iconfont el-icon-location',
      },
      {
        "id": "10",
        "name": "电子卡月报",
        "icon": 'iconfont el-icon-location',
      }
    ]
  });
});
router.get('/asideBag', function (req, res, next) {
  res.json({
    "list": [
      {
        "id": "01",
        "name": "审核管理",
        "parentId": "12029684246118400",
        "icon": 'iconfont el-icon-location',
      },
      {
        "id": "02",
        "name": "结算管理",
        "parentId": "12029684246118400",
        "icon": 'iconfont el-icon-location',
      },
      {
        "id": "03",
        "name": "专车审核",
        "icon": 'iconfont el-icon-location',
      },
      {
        "id": "04",
        "name": "退款审核",
        "icon": 'iconfont el-icon-info',
      },
    ]
  });
});
router.get('/approve', function (req, res, next) {
  res.json({
    "list": [
      {
        "id": "1",
        "item": "自动红包（1）",
      },
      {
        "id": "2",
        "item": "积分兑换（2）",
      },
    ]
  });
});
router.get('/approveNo', function (req, res, next) {
  res.json({
    "list": [
      {
        "id": "01",
        "item": "区域代理（1）"
      },
      {
        "id": "02",
        "item": "公司（2）"
      },
      {
        "id": "03",
        "item": "加油站（5）",
      },
      {
        "id": "04",
        "item": "洗车房（1）",
      },
      {
        "id": "05",
        "item": "区域油品（1）",
      },
      {
        "id": "06",
        "item": "积分兑换（1）",
      },
    ]
  });
});

//右侧内容数据
router.get('/member', function (req, res, next) {
  res.json({
    breadList: [
      {name: "首页", path: "/home"},
      {name: "系统管理", path: "/home/index-system"},
      {name: "人员管理", path: "/home/index-system/member"},
    ],
    rowData: [
      {
        id: '2016-05-24',
        phone: '123465757',
        accountCode: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        use: '可用',
        date: '2016-05-04',
        lock: '未锁定'
      },
      {
        id: '2016-05-23',
        phone: '2235465',
        accountCode: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        use: '可用',
        date: '2016-05-22',
        lock: '未锁定'
      },
      {
        id: '2016-05-21',
        phone: '4564537',
        accountCode: '普陀区',
        address: '上海市普陀区金沙江路 1518',
        use: '可用',
        date: '2016-05-04',
        lock: '未锁定'
      },
      {
        id: '2016-05-20',
        phone: '455353',
        accountCode: '普陀区',
        address: '上海市普陀区金沙江路 1518',
        use: '可用',
        date: '2016-05-04',
        lock: '未锁定'
      },
      {
        id: '2016-05-19',
        phone: '124554654',
        accountCode: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        use: '可用',
        date: '2016-05-04',
        lock: '未锁定'
      },
      {
        id: '2016-05-18',
        phone: '12142445',
        accountCode: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        use: '可用',
        date: '2016-05-04',
        lock: '未锁定'
      },
      {
        id: '2016-05-17',
        phone: '1235741124',
        accountCode: '普陀区',
        address: '上海市普陀区金沙江路 1518',
        use: '可用',
        date: '2016-05-04',
        lock: '未锁定'
      },
      {
        id: '2016-05-16',
        phone: '12124245445',
        accountCode: '普陀区',
        address: '上海市普陀区金沙江路 1518',
        use: '可用',
        date: '2016-05-04',
        lock: '未锁定'
      },
      {
        id: '2016-05-15',
        phone: '15945451224',
        accountCode: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        use: '可用',
        date: '2016-05-04',
        lock: '未锁定'
      },
      {
        id: '2016-05-14',
        phone: '1234567578',
        accountCode: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        use: '可用',
        date: '2016-05-04',
        lock: '未锁定'
      },
      {
        id: '2016-05-13',
        phone: '1583482457',
        accountCode: '普陀区',
        address: '上海市普陀区金沙江路 1518',
        use: '可用',
        date: '2016-05-04',
        lock: '未锁定'
      },
      {
        id: '2016-05-12',
        phone: '1224545454',
        accountCode: '普陀区',
        address: '上海市普陀区金沙江路 1518',
        use: '可用',
        date: '2016-05-04',
        lock: '未锁定'
      },
      {
        id: '2016-05-11',
        phone: '1575352457',
        accountCode: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        use: '可用',
        date: '2016-05-04',
        lock: '未锁定'
      },
      {
        id: '2016-05-10',
        phone: '18716005711',
        accountCode: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        use: '可用',
        date: '2016-05-04',
        lock: '未锁定'
      },
      {
        id: '2016-05-09',
        phone: '15742457557',
        accountCode: '普陀区',
        address: '上海市普陀区金沙江路 1518',
        use: '可用',
        date: '2016-05-04',
        lock: '未锁定'
      },
      {
        id: '2016-05-08',
        phone: '15780022452',
        accountCode: '普陀区',
        address: '上海市普陀区金沙江路 1518',
        use: '可用',
        date: '2016-05-04',
        lock: '未锁定'
      },
      {
        id: '2016-05-07',
        phone: '1888888888',
        accountCode: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        use: '可用',
        date: '2016-05-04',
        lock: '未锁定'
      },
      {
        id: '2016-05-06',
        phone: '15811124244',
        accountCode: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        use: '可用',
        date: '2016-05-04',
        lock: '未锁定'
      },
      {
        id: '2016-05-05',
        phone: '15811418144',
        accountCode: '普陀区',
        address: '上海市普陀区金沙江路 1518',
        use: '可用',
        date: '2016-05-04',
        lock: '未锁定'
      },
      {
        id: '2016-05-04',
        phone: '15811418244',
        accountCode: '普陀区',
        address: '上海市普陀区金沙江路 1518',
        use: '可用',
        date: '2016-05-04',
        lock: '未锁定'
      },
    ]
  });
});
router.get('/member2', function (req, res, next) {
  res.json({
    breadList: [
      {name: "首页", path: "/home"},
      {name: "系统管理", path: "/home/index-system"},
      {name: "人员管理", path: "/home/index-system/member"},
    ],
    rowData: [
      {
        id: '2016-05-10',
        phone: '18716005711',
        accountCode: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        use: '可用',
        date: '2016-05-04',
        lock: '未锁定'
      },
      {
        id: '2016-05-09',
        phone: '15742457557',
        accountCode: '普陀区',
        address: '上海市普陀区金沙江路 1518',
        use: '可用',
        date: '2016-05-04',
        lock: '未锁定'
      },
      {
        id: '2016-05-08',
        phone: '15780022452',
        accountCode: '普陀区',
        address: '上海市普陀区金沙江路 1518',
        use: '可用',
        date: '2016-05-04',
        lock: '未锁定'
      },
      {
        id: '2016-05-07',
        phone: '1888888888',
        accountCode: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        use: '可用',
        date: '2016-05-04',
        lock: '未锁定'
      },
      {
        id: '2016-05-06',
        phone: '15811124244',
        accountCode: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        use: '可用',
        date: '2016-05-04',
        lock: '未锁定'
      },
      {
        id: '2016-05-05',
        phone: '15811418144',
        accountCode: '普陀区',
        address: '上海市普陀区金沙江路 1518',
        use: '可用',
        date: '2016-05-04',
        lock: '未锁定'
      },
      {
        id: '2016-05-04',
        phone: '15811418244',
        accountCode: '普陀区',
        address: '上海市普陀区金沙江路 1518',
        use: '可用',
        date: '2016-05-04',
        lock: '未锁定'
      },
    ]
  });
});
router.get('/member-new', function (req, res, next) {
  res.json({
    breadList: [
      {name: "首页", path: "/home"},
      {name: "人员管理", path: "/home/index-system/member"},
      {name: "新建人员", path: "/home/index-system/member-new"},
    ],
  });
});
router.get('/tree', function (req, res, next) {
  res.json({
    list: [
      {
        id: 110,
        label: "通用",
        iconClass: "iconClassRoot",
        open: true,
        parentId: 0,
        children: [
          {
            id: 111,
            label: "保存密码",
            parentId: 110,
            iconClass: "iconClassNode",
          },
          {
            id: 112,
            label: "上传文件",
            clickNode: true,
            parentId: 110,
            iconClass: "iconClassNode",
          }, {
            id: 113,
            label: "修改密码",
            parentId: 110,
            iconClass: "iconClassNode",
          }]
      },
      {
        id: 220,
        label: "系统管理",
        iconClass: "iconClassRoot",
        open: true,
        parentId: 0,
        children: [
          {
            id: 221,
            label: "人员管理",
            parentId: 220,
            iconClass: "iconClassNode",
            children: [
              {
                id: 233,
                parentId: 220,
                label: "添加用户",
                iconClass: "iconClassNode",
                path: "",
              },
              {
                id: 222,
                parentId: 221,
                label: "删除用户",
                iconClass: "iconClassNode",
                path: "",
              },
              {
                id: 223,
                parentId: 220,
                label: "编辑密码",
                iconClass: "iconClassNode",
                path: "",
              },
              {
                id: 224,
                parentId: 221,
                label: "用户保存",
                iconClass: "iconClassNode",
                path: "",
              },
              {
                id: 225,
                parentId: 220,
                label: "禁用、启用、解锁",
                iconClass: "iconClassNode",
                path: "",
              },
              {
                id: 226,
                parentId: 221,
                label: "修改密码",
                iconClass: "iconClassNode",
                path: "",
              },
              {
                id: 227,
                parentId: 220,
                label: "编辑用户",
                iconClass: "iconClassNode",
                path: "",
              },
              {
                id: 228,
                parentId: 221,
                label: "手机号重复验证",
                iconClass: "iconClassNode",
                path: "",
              },
              {
                id: 229,
                parentId: 220,
                label: "用户更新",
                iconClass: "iconClassNode",
                path: "",
              },
              {
                id: 230,
                parentId: 221,
                label: "重置密码",
                iconClass: "iconClassNode",
                path: "",
              }
            ],
          }
        ]
      },
      {
        id: 330,
        label: "通用",
        iconClass: "iconClassRoot",
        open: true,
        parentId: 0,
        children: [
          {
            id: 331,
            label: "保存密码",
            parentId: 330,
            iconClass: "iconClassNode",
          },
          {
            id: 332,
            label: "上传文件",
            clickNode: true,
            parentId: 330,
            iconClass: "iconClassNode",
          },
          {
            id: 333,
            label: "修改密码",
            parentId: 330,
            iconClass: "iconClassNode",
          }
        ]
      },
      {
        id: 440,
        label: "通用",
        iconClass: "iconClassRoot",
        open: true,
        parentId: 0,
        children: [
          {
            id: 441,
            label: "保存密码",
            parentId: 440,
            iconClass: "iconClassNode",
          },
          {
            id: 442,
            label: "上传文件",
            clickNode: true,
            parentId: 440,
            iconClass: "iconClassNode",
          }, {
            id: 443,
            label: "修改密码",
            parentId: 770,
            iconClass: "iconClassNode",
          }
        ]
      },
      {
        id: 550,
        label: "娱乐",
        iconClass: "iconClassRoot",
        open: true,
        parentId: 0,
        children: [
          {
            id: 551,
            label: "游戏",
            parentId: 550,
            iconClass: "iconClassNode",
            children: [
              {
                id: 551,
                parentId: 550,
                label: "游戏2",
                iconClass: "iconClassNode",
                path: "",
                children: [
                  {
                    id: 552,
                    parentId: 551,
                    label: "游戏3",
                    iconClass: "iconClassNode",
                    path: "",
                    children: [
                      {
                        id: 553,
                        parentId: 552,
                        label: "游戏4",
                        iconClass: "iconClassNode",
                        path: "",
                        children: [
                          {
                            id: 554,
                            parentId: 553,
                            label: "游戏5",
                            iconClass: "iconClassNode",
                            path: "",
                          }
                        ],
                      }
                    ],
                  }
                ],
              }
            ],
          },
          {
            id: 882,
            label: "电影",
            clickNode: true,
            parentId: 880,
            iconClass: "iconClassNode",
          }, {
            id: 883,
            label: "新闻",
            parentId: 880,
            iconClass: "iconClassNode",
          }]
      },
      {
        id: 990,
        label: "BAT",
        iconClass: "iconClassRoot",
        open: false,
        parentId: 0,
        children: [
          {
            id: 991,
            label: "马化腾",
            parentId: 990,
            iconClass: "iconClassNode",
          },
          {
            id: 992,
            label: "李彦宏",
            parentId: 990,
            iconClass: "iconClassNode",
          },
          {
            id: 993,
            label: "马云",
            parentId: 990,
            iconClass: "iconClassNode",
          }
        ]
      }
    ],
  });
});
router.get('/get-tree-city', function (req, res, next) {
  res.json({
    list:[
      {
        "id": "1",
        "createDate": "2016-04-29 13:43:11",
        "modifyDate": "2016-04-29 13:43:11",
        "flag": true,
        "orders": "1",
        "name": "北京",
        "parentId": "",
        "fullName": "北京 ",
        "treePath": ",",
        "grade": "0",
        "region": "",
        "areaCode": "100",
        "childCount": "18",
        "parentName": "",
        "isParent": true
      },
      {
        "id": "2",
        "createDate": "2016-04-29 13:43:11",
        "modifyDate": "2016-04-29 13:43:11",
        "flag": true,
        "orders": "2",
        "name": "上海",
        "parentId": "",
        "fullName": "上海 ",
        "treePath": ",",
        "grade": "0",
        "region": "",
        "areaCode": "210",
        "childCount": "17",
        "parentName": "",
        "isParent": true
      },
      {
        "id": "3",
        "createDate": "2016-04-29 13:43:11",
        "modifyDate": "2016-04-29 13:43:11",
        "flag": true,
        "orders": "3",
        "name": "天津",
        "parentId": "",
        "fullName": "天津 ",
        "treePath": ",",
        "grade": "0",
        "region": "",
        "areaCode": "220",
        "childCount": "18",
        "parentName": "",
        "isParent": true
      },
      {
        "id": "4",
        "createDate": "2016-04-29 13:43:11",
        "modifyDate": "2016-04-29 13:43:11",
        "flag": true,
        "orders": "4",
        "name": "重庆",
        "parentId": "",
        "fullName": "重庆 ",
        "treePath": ",",
        "grade": "0",
        "region": "",
        "areaCode": "230",
        "childCount": "40",
        "parentName": "",
        "isParent": true
      },
      {
        "id": "5",
        "createDate": "2016-04-29 13:43:11",
        "modifyDate": "2016-04-29 13:43:11",
        "flag": true,
        "orders": "5",
        "name": "河北",
        "parentId": "",
        "fullName": "河北 ",
        "treePath": ",",
        "grade": "0",
        "region": "",
        "areaCode": "310",
        "childCount": "11",
        "parentName": "",
        "isParent": true
      },
      {
        "id": "6",
        "createDate": "2016-04-29 13:43:11",
        "modifyDate": "2016-04-29 13:43:11",
        "flag": true,
        "orders": "6",
        "name": "山西",
        "parentId": "",
        "fullName": "山西 ",
        "treePath": ",",
        "grade": "0",
        "region": "",
        "areaCode": "350",
        "childCount": "11",
        "parentName": "",
        "isParent": true
      },
      {
        "id": "7",
        "createDate": "2016-04-29 13:43:11",
        "modifyDate": "2016-04-29 13:43:11",
        "flag": true,
        "orders": "7",
        "name": "河南",
        "parentId": "",
        "fullName": "河南 ",
        "treePath": ",",
        "grade": "0",
        "region": "",
        "areaCode": "370",
        "childCount": "18",
        "parentName": "",
        "isParent": true
      },
      {
        "id": "8",
        "createDate": "2016-04-29 13:43:11",
        "modifyDate": "2016-04-29 13:43:11",
        "flag": true,
        "orders": "8",
        "name": "辽宁",
        "parentId": "",
        "fullName": "辽宁 ",
        "treePath": ",",
        "grade": "0",
        "region": "",
        "areaCode": "240",
        "childCount": "14",
        "parentName": "",
        "isParent": true
      },
      {
        "id": "9",
        "createDate": "2016-04-29 13:43:11",
        "modifyDate": "2016-04-29 13:43:11",
        "flag": true,
        "orders": "9",
        "name": "吉林",
        "parentId": "",
        "fullName": "吉林 ",
        "treePath": ",",
        "grade": "0",
        "region": "",
        "areaCode": "430",
        "childCount": "9",
        "parentName": "",
        "isParent": true
      },
      {
        "id": "10",
        "createDate": "2016-04-29 13:43:11",
        "modifyDate": "2016-04-29 13:43:11",
        "flag": true,
        "orders": "10",
        "name": "黑龙江",
        "parentId": "",
        "fullName": "黑龙江 ",
        "treePath": ",",
        "grade": "0",
        "region": "",
        "areaCode": "450",
        "childCount": "13",
        "parentName": "",
        "isParent": true
      },
      {
        "id": "11",
        "createDate": "2016-04-29 13:43:11",
        "modifyDate": "2016-04-29 13:43:11",
        "flag": true,
        "orders": "11",
        "name": "内蒙古",
        "parentId": "",
        "fullName": "内蒙古 ",
        "treePath": ",",
        "grade": "0",
        "region": "",
        "areaCode": "470",
        "childCount": "12",
        "parentName": "",
        "isParent": true
      },
      {
        "id": "12",
        "createDate": "2016-04-29 13:43:11",
        "modifyDate": "2016-04-29 13:43:11",
        "flag": true,
        "orders": "12",
        "name": "江苏",
        "parentId": "",
        "fullName": "江苏 ",
        "treePath": ",",
        "grade": "0",
        "region": "",
        "areaCode": "250",
        "childCount": "13",
        "parentName": "",
        "isParent": true
      },
      {
        "id": "13",
        "createDate": "2016-04-29 13:43:11",
        "modifyDate": "2016-04-29 13:43:11",
        "flag": true,
        "orders": "13",
        "name": "山东",
        "parentId": "",
        "fullName": "山东 ",
        "treePath": ",",
        "grade": "0",
        "region": "",
        "areaCode": "530",
        "childCount": "17",
        "parentName": "",
        "isParent": true
      },
      {
        "id": "14",
        "createDate": "2016-04-29 13:43:11",
        "modifyDate": "2016-04-29 13:43:11",
        "flag": true,
        "orders": "14",
        "name": "安徽",
        "parentId": "",
        "fullName": "安徽 ",
        "treePath": ",",
        "grade": "0",
        "region": "",
        "areaCode": "550",
        "childCount": "16",
        "parentName": "",
        "isParent": true
      },
      {
        "id": "15",
        "createDate": "2016-04-29 13:43:11",
        "modifyDate": "2016-04-29 13:43:11",
        "flag": true,
        "orders": "15",
        "name": "浙江",
        "parentId": "",
        "fullName": "浙江 ",
        "treePath": ",",
        "grade": "0",
        "region": "",
        "areaCode": "570",
        "childCount": "11",
        "parentName": "",
        "isParent": true
      },
      {
        "id": "16",
        "createDate": "2016-04-29 13:43:11",
        "modifyDate": "2016-04-29 13:43:11",
        "flag": true,
        "orders": "16",
        "name": "福建",
        "parentId": "",
        "fullName": "福建 ",
        "treePath": ",",
        "grade": "0",
        "region": "",
        "areaCode": "590",
        "childCount": "9",
        "parentName": "",
        "isParent": true
      },
      {
        "id": "17",
        "createDate": "2016-04-29 13:43:11",
        "modifyDate": "2016-04-29 13:43:11",
        "flag": true,
        "orders": "17",
        "name": "湖北",
        "parentId": "",
        "fullName": "湖北 ",
        "treePath": ",",
        "grade": "0",
        "region": "",
        "areaCode": "270",
        "childCount": "17",
        "parentName": "",
        "isParent": true
      },
      {
        "id": "18",
        "createDate": "2016-04-29 13:43:11",
        "modifyDate": "2016-04-29 13:43:11",
        "flag": true,
        "orders": "18",
        "name": "湖南",
        "parentId": "",
        "fullName": "湖南 ",
        "treePath": ",",
        "grade": "0",
        "region": "",
        "areaCode": "730",
        "childCount": "15",
        "parentName": "",
        "isParent": true
      },
      {
        "id": "19",
        "createDate": "2016-04-29 13:43:11",
        "modifyDate": "2016-04-29 13:43:11",
        "flag": true,
        "orders": "19",
        "name": "广东",
        "parentId": "",
        "fullName": "广东 ",
        "treePath": ",",
        "grade": "0",
        "region": "",
        "areaCode": "200",
        "childCount": "21",
        "parentName": "",
        "isParent": true
      },
      {
        "id": "20",
        "createDate": "2016-04-29 13:43:11",
        "modifyDate": "2016-04-29 13:43:11",
        "flag": true,
        "orders": "20",
        "name": "广西",
        "parentId": "",
        "fullName": "广西 ",
        "treePath": ",",
        "grade": "0",
        "region": "",
        "areaCode": "770",
        "childCount": "14",
        "parentName": "",
        "isParent": true
      },
      {
        "id": "21",
        "createDate": "2016-04-29 13:43:11",
        "modifyDate": "2016-04-29 13:43:11",
        "flag": true,
        "orders": "21",
        "name": "江西",
        "parentId": "",
        "fullName": "江西 ",
        "treePath": ",",
        "grade": "0",
        "region": "",
        "areaCode": "790",
        "childCount": "11",
        "parentName": "",
        "isParent": true
      },
      {
        "id": "22",
        "createDate": "2016-04-29 13:43:11",
        "modifyDate": "2016-04-29 13:43:11",
        "flag": true,
        "orders": "22",
        "name": "四川",
        "parentId": "",
        "fullName": "四川 ",
        "treePath": ",",
        "grade": "0",
        "region": "",
        "areaCode": "280",
        "childCount": "21",
        "parentName": "",
        "isParent": true
      },
      {
        "id": "23",
        "createDate": "2016-04-29 13:43:11",
        "modifyDate": "2016-04-29 13:43:11",
        "flag": true,
        "orders": "23",
        "name": "海南",
        "parentId": "",
        "fullName": "海南 ",
        "treePath": ",",
        "grade": "0",
        "region": "",
        "areaCode": "890",
        "childCount": "19",
        "parentName": "",
        "isParent": true
      },
      {
        "id": "24",
        "createDate": "2016-04-29 13:43:11",
        "modifyDate": "2016-04-29 13:43:11",
        "flag": true,
        "orders": "24",
        "name": "贵州",
        "parentId": "",
        "fullName": "贵州 ",
        "treePath": ",",
        "grade": "0",
        "region": "",
        "areaCode": "850",
        "childCount": "9",
        "parentName": "",
        "isParent": true
      },
      {
        "id": "25",
        "createDate": "2016-04-29 13:43:11",
        "modifyDate": "2016-04-29 13:43:11",
        "flag": true,
        "orders": "25",
        "name": "云南",
        "parentId": "",
        "fullName": "云南 ",
        "treePath": ",",
        "grade": "0",
        "region": "",
        "areaCode": "870",
        "childCount": "16",
        "parentName": "",
        "isParent": true
      },
      {
        "id": "26",
        "createDate": "2016-04-29 13:43:11",
        "modifyDate": "2016-04-29 13:43:11",
        "flag": true,
        "orders": "26",
        "name": "西藏",
        "parentId": "",
        "fullName": "西藏 ",
        "treePath": ",",
        "grade": "0",
        "region": "",
        "areaCode": "891",
        "childCount": "7",
        "parentName": "",
        "isParent": true
      },
      {
        "id": "27",
        "createDate": "2016-04-29 13:43:11",
        "modifyDate": "2016-04-29 13:43:11",
        "flag": true,
        "orders": "27",
        "name": "陕西",
        "parentId": "",
        "fullName": "陕西 ",
        "treePath": ",",
        "grade": "0",
        "region": "",
        "areaCode": "290",
        "childCount": "10",
        "parentName": "",
        "isParent": true
      },
      {
        "id": "28",
        "createDate": "2016-04-29 13:43:11",
        "modifyDate": "2016-04-29 13:43:11",
        "flag": true,
        "orders": "28",
        "name": "甘肃",
        "parentId": "",
        "fullName": "甘肃 ",
        "treePath": ",",
        "grade": "0",
        "region": "",
        "areaCode": "930",
        "childCount": "14",
        "parentName": "",
        "isParent": true
      },
      {
        "id": "29",
        "createDate": "2016-04-29 13:43:11",
        "modifyDate": "2016-04-29 13:43:11",
        "flag": true,
        "orders": "29",
        "name": "青海",
        "parentId": "",
        "fullName": "青海 ",
        "treePath": ",",
        "grade": "0",
        "region": "",
        "areaCode": "970",
        "childCount": "8",
        "parentName": "",
        "isParent": true
      },
      {
        "id": "30",
        "createDate": "2016-04-29 13:43:11",
        "modifyDate": "2016-04-29 13:43:11",
        "flag": true,
        "orders": "30",
        "name": "宁夏",
        "parentId": "",
        "fullName": "宁夏 ",
        "treePath": ",",
        "grade": "0",
        "region": "",
        "areaCode": "950",
        "childCount": "5",
        "parentName": "",
        "isParent": true
      },
      {
        "id": "31",
        "createDate": "2016-04-29 13:43:11",
        "modifyDate": "2016-04-29 13:43:11",
        "flag": true,
        "orders": "31",
        "name": "新疆",
        "parentId": "",
        "fullName": "新疆 ",
        "treePath": ",",
        "grade": "0",
        "region": "",
        "areaCode": "990",
        "childCount": "19",
        "parentName": "",
        "isParent": true
      },
      {
        "id": "32",
        "createDate": "2016-04-29 13:43:11",
        "modifyDate": "2016-04-29 13:43:11",
        "flag": true,
        "orders": "32",
        "name": "台湾",
        "parentId": "",
        "fullName": "台湾 ",
        "treePath": ",",
        "grade": "0",
        "region": "",
        "areaCode": "991",
        "childCount": "1",
        "parentName": "",
        "isParent": true
      },
      {
        "id": "42",
        "createDate": "2016-04-29 13:43:11",
        "modifyDate": "2016-04-29 13:43:11",
        "flag": true,
        "orders": "33",
        "name": "香港",
        "parentId": "",
        "fullName": "香港 ",
        "treePath": ",",
        "grade": "0",
        "region": "",
        "areaCode": "852",
        "childCount": "1",
        "parentName": "",
        "isParent": true
      },
      {
        "id": "43",
        "createDate": "2016-04-29 13:43:11",
        "modifyDate": "2016-04-29 13:43:11",
        "flag": true,
        "orders": "34",
        "name": "澳门",
        "parentId": "",
        "fullName": "澳门 ",
        "treePath": ",",
        "grade": "0",
        "region": "",
        "areaCode": "853",
        "childCount": "1",
        "parentName": "",
        "isParent": true
      },
      {
        "id": "84",
        "createDate": "2016-04-29 13:43:11",
        "modifyDate": "2016-05-11 16:18:49",
        "flag": true,
        "orders": "35",
        "name": "钓鱼岛",
        "parentId": "",
        "fullName": "钓鱼岛 ",
        "treePath": ",",
        "grade": "0",
        "region": "",
        "areaCode": "999",
        "childCount": "1",
        "parentName": "",
        "isParent": true
      }
    ]
  });
});
router.post('/form-tree', function (req, res, next) {
  res.send('POST request to the homepage');
});
router.get('./static/json/city.json', function (req, res, next) {
  res.send('POST request to the homepage');
});
router.get('/level', function (req, res, next) {
  res.json({
    "member": {
      "id": "305240729402212352",
      "createDate": "2018-08-03 18:02:04",
      "modifyDate": "2018-08-03 18:02:04",
      "flag": true,
      "name": '普通会员',
      "memberType": "1",
      "levelRule": "1",
      "rechargeLevelRules": [
        {
          "id": "311673747444596736",
          "createDate": "2018-08-21 12:04:35",
          "modifyDate": "2018-08-21 12:04:35",
          "flag": true,
          "typeRuleId": "305240729402212352",
          "rechargeAmount": "1.00",
          "memberLevel": "1",
          "cutType": "1",
          "cutPrice": "2.00"
        },
        {
          "id": "311673747444596737",
          "createDate": "2018-08-21 12:04:35",
          "modifyDate": "2018-08-21 12:04:35",
          "flag": true,
          "typeRuleId": "305240729402212352",
          "rechargeAmount": "2.00",
          "memberLevel": "2",
          "cutType": "1",
          "cutPrice": "2.00"
        }
      ]
    },
    "memberCar": {
      "id": "305241887151751168",
      "createDate": "2018-08-03 18:06:40",
      "modifyDate": "2018-08-03 18:06:40",
      "flag": true,
      "name": '出租车会员',
      "memberType": "2",
      "levelRule": "1",
      "rechargeLevelRules": [
        {
          "id": "311673814511517696",
          "createDate": "2018-08-21 12:04:51",
          "modifyDate": "2018-08-21 12:04:51",
          "flag": true,
          "typeRuleId": "305241887151751168",
          "rechargeAmount": "1.00",
          "memberLevel": "1",
          "cutType": "1",
          "cutPrice": "2.00"
        },
        {
          "id": "311673814511517697",
          "createDate": "2018-08-21 12:04:51",
          "modifyDate": "2018-08-21 12:04:51",
          "flag": true,
          "typeRuleId": "305241887151751168",
          "rechargeAmount": "2.00",
          "memberLevel": "2",
          "cutType": "1",
          "cutPrice": "2.00"
        },
        {
          "id": "311673814511517697",
          "createDate": "2018-08-21 12:04:51",
          "modifyDate": "2018-08-21 12:04:51",
          "flag": true,
          "typeRuleId": "305241887151751168",
          "rechargeAmount": "3.00",
          "memberLevel": "3",
          "cutType": "1",
          "cutPrice": "3.00"
        }
      ]
    },
    "memberTaxi": {
      "id": "306208347315503104",
      "createDate": "2018-08-06 10:07:02",
      "modifyDate": "2018-08-06 10:07:02",
      "flag": true,
      "name": '专车会员',
      "memberType": "3",
      "levelRule": "1",
      "rechargeLevelRules": [
        {
          "id": "311673798778683392",
          "createDate": "2018-08-21 12:04:47",
          "modifyDate": "2018-08-21 12:04:47",
          "flag": true,
          "typeRuleId": "306208347315503104",
          "rechargeAmount": "1.00",
          "memberLevel": "1",
          "cutType": "2",
          "cutPrice": "2.00"
        },
        {
          "id": "311673798778683393",
          "createDate": "2018-08-21 12:04:47",
          "modifyDate": "2018-08-21 12:04:47",
          "flag": true,
          "typeRuleId": "306208347315503104",
          "rechargeAmount": "2.00",
          "memberLevel": "2",
          "cutType": "1",
          "cutPrice": "2.00"
        },
        {
          "id": "311673798778683394",
          "createDate": "2018-08-21 12:04:47",
          "modifyDate": "2018-08-21 12:04:47",
          "flag": true,
          "typeRuleId": "306208347315503104",
          "rechargeAmount": "3.00",
          "memberLevel": "3",
          "cutType": "2",
          "cutPrice": "3.00"
        },
        {
          "id": "311673798778683395",
          "createDate": "2018-08-21 12:04:47",
          "modifyDate": "2018-08-21 12:04:47",
          "flag": true,
          "typeRuleId": "306208347315503104",
          "rechargeAmount": "4.00",
          "memberLevel": "4",
          "cutType": "1",
          "cutPrice": "4.00"
        },
        {
          "id": "311673798778683396",
          "createDate": "2018-08-21 12:04:47",
          "modifyDate": "2018-08-21 12:04:47",
          "flag": true,
          "typeRuleId": "306208347315503104",
          "rechargeAmount": "5.00",
          "memberLevel": "5",
          "cutType": "2",
          "cutPrice": "5.00"
        }
      ]
    },
  });
});
router.post('/save', function (req, res, next) {
  res.send('POST request to the homepage');
});
module.exports = router;
