import axios from "@/utils/axios";

const CatalogCurrent = "wx/catalog/current"; //分类目录当前分类数据接口
export function catalogCurrent(query) {
  return axios({
    url: CatalogCurrent,
    method: "get",
    params: query
  });
}
