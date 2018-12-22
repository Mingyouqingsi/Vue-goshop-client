/**
 * Created by 王翔 on 2018-12-22.
 */
/*
* 包含n个请求接口模块4200000251201812211250755029
*/
import ajax from 'axios'

// export function reqAddress(longitude,latitude) {
//   return ajax (`/position/${latitude},${longitude}`)
// }
// [1、根据经纬度获取位置详情](#1根据经纬度获取位置详情)<br/>
export  const reqAddress = (longitude,latitude) => ajax (`/position/${latitude},${longitude}`);
/*[2、获取食品分类列表](#2获取食品分类列表)<br/>*/
export const reqCategory = () => ajax('/index_category');
/*## 3、根据经纬度获取商铺列表*/
export const reqShops = (longitude,latitude) => ajax('/shops',{longitude,latitude})
