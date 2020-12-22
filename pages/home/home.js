//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    banner_images: [
      {
        id: 1,
        type: 'banner',
        list: [{
          id: 1,
          picUrl: "/assets/banner-bg1.jpeg"
        }, 
        {
          id: 2,
          picUrl: "/assets/banner-bg2.jpeg"
        }]
      },
    ],
    kind_images: [
      {
        id: 1,
        type: 'kind',
        list: [{
          id: 1,
          title: "医生登录",
          picUrl: "/assets/kind_doctor.png"
        }, 
        {
          id: 2,
          title: "政策文件",
          picUrl: "/assets/kind_file.png"
        },
        {
          id: 3,
          title: "防控手册",
          picUrl: "/assets/kind_book.png"
        },
        {
          id: 4,
          title: "科普常识",
          picUrl: "/assets/kind_file.png"
        },
        {
          id: 5,
          title: "科普视频",
          picUrl: "/assets/kind_video.png"
        },
        {
          id: 6,
          title: "OK镜专题",
          picUrl: "/assets/kind_doctor.png"
        },
        {
          id: 7,
          title: "多宝镜专题",
          picUrl: "/assets/kind_doctor.png"
        },
        {
          id: 8,
          title: "我的二维码",
          picUrl: "/assets/kind_code.png"
        }]
      }
    ],
    current: 'tab1',
      tabs: [
        {
          key: 'tab1',
          title: 'Tab 1',
          content: 'Content of tab 1',
        },
        {
          key: 'tab2',
          title: 'Tab 2',
          content: 'Content of tab 2',
        },
        {
          key: 'tab3',
          title: 'Tab 3',
          content: 'Content of tab 3',
        },
      ],
    active: 0,
  },
  onLoad: function () { },
  previewImage: function(e) { // 单独发送图片 查看大图 未完成
    let current_img = e.target.dataset.src;
    wx.previewImage({
      current: current_img, // 当前显示图片的http链接
      urls: [] // 需要预览的图片http链接列表
    })
  },
  toAdvisory: function () {
    wx.navigateTo({
      url: '/pages/advisory/advisory'
    });
  },
  handleClick: function (e) {
    // 跳转错误 待处理
    // let data = e.currentTarget.dataset.value.id;
    // let toUrl = '';
    // if (data === 1) {
    //   toUrl = 'pages/kindHot/doctorLogin/doctorLogin'
    // } else if(data === 2) {
    //   toUrl = 'pages/kindHot/governmentFile/governmentFile'
    // } else if(data === 3) {
    //   toUrl = 'pages/kindHot/scienceBook/scienceBook'
    // } else if(data === 4) {
    //   toUrl = 'pages/kindHot/scienceKnow/scienceKnow'
    // } else if(data === 5) {
    //   toUrl = 'pages/kindHot/scienceVideo/scienceVideo'
    // } else if(data === 6) {
    //   toUrl = 'pages/kindHot/other1/other1'
    // } else if(data === 7) {
    //   toUrl = 'pages/kindHot/other2/other2'
    // } else if(data === 8) {
    //   toUrl = 'pages/kindHot/talkToDoctor/talkToDoctor'
    // }
    // wx.navigateTo({
    //   url: toUrl
    // });
  },
  // vant-ui 默认事件
  onChange(event) {
    wx.showToast({
      title: `切换到标签 ${event.detail.name}`,
      icon: 'none',
    });
  },
})