/** Website 分类配置 */
const WEBSITE_SORTS: WebsiteSort[] = [
  {
    title: "OI",
    sites: [
      {
        title: "洛谷",
        description:"梦开始的地方",
        url: "https://www.luogu.com.cn/user/1223866",
        icon: "https://fecdn.luogu.com.cn/columba/static.325908fec383795b.logo-single-color.svg",
        color: "#0171CD",
      },
      {
        title: "Codeforces",
        url: "https://codeforces.com/profile/Qaaxaap",
        icon: "https://cdn.luogu.com.cn/upload/image_hosting/y69fur93.png",
      },
      {
        title: "博客园",
        description:"不常用，还是自己博客好用",
        url: "https://www.cnblogs.com/Qaaxaap",
        color: "#0171CD",
      },
    ],
  },
  {
    title: "示例分类2",
  },
  {
    title: "友情链接",
    sites: [
      {
        title: "EsunR Blog",
        description: "EsunR 的博客",
        url: "https://www.esunr.xyz",
        icon: "https://esunr-image-bed.oss-cn-beijing.aliyuncs.com/logo.jpg",
      },
    ],
  },
];

/** Website 配置（2023.3.29 已废弃） */
const WEBSITE_ITEMS: WebsiteItem[] = [];

const GLOBAL_CONFIG = {
  /**
   * 博客名称
   */
  BLOG_NAME: "Qaaxaap-Blog",
  /**
   * 个人博客链接
   */
  BLOG_URL: "https://blog.qaaxaap.living",
  /**
   * 指定中心 LOGO 图片地址
   */
  LOGO_URL: null,
  /**
   * 个人 Github 链接
   */
  GITHUB_URL: "https://github.com/951753yyswys",
  /**
   * 背景图片地址
   */
  BACKGROUND_IMG_URL: "https://imgloc.com/image/CnWngF",
  /**
   * ICP 备案号，留空不显示
   */
  ICP: "",
  ICP_URL: "https://beian.miit.gov.cn/",
  FOOTER_INFO: true,
  /**
   * 网站欢迎标语
   */
  SLOGANS: [
    "欢迎拜访",
    "Welcome, my friend!",
    "还活着",
    "日光之下并无新事",
    "你说得对，但是",
    "何意味",
  ],
  /**
   * Website 分类配置
   */
  WEBSITE_SORTS,
  /**
   * Website 配置（2023.3.29 已废弃）
   */
  WEBSITE_ITEMS,
  /**
   * 网站 Title Keywords Description 的配置，用于 SEO
   */
  TKD: {
    title: "Qaaxaap's Blog Index",
    keywords: "Blog, Index, Index Page",
    description: "This is my personal blog index page.",
  },
};

export default GLOBAL_CONFIG;
