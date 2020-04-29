let BASE_URLS = {
  baseUrl: ""
};

if (process.env.NODE_ENV === "development") {
  //开发环境下的代理地址，
  BASE_URLS.baseUrl = "http://dev.jcsl.tech:80";
} else if (process.env.NODE_ENV === "production") {
  //生产环境下的地址

  BASE_URLS.baseUrl = "http://dev.jcsl.tech:80";
}
export { BASE_URLS };
