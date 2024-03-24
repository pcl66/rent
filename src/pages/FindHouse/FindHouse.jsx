import { useContext, useEffect } from "react";
import AMapLoader from "@amap/amap-jsapi-loader";
import {LeftOutline} from 'antd-mobile-icons'
import './index.scss'
import { useNavigate } from "react-router-dom";
import { getAreaByName, getGeoInfoByName, getHouseInfo } from "../../request/indexAPI";
import { CityProvider } from "../../provider/CityProvider";

export default function FindHouse() {
  let map = null;
  
  const nav = useNavigate()
  const { currentCity } = useContext(CityProvider)
  
  const drawMarker = (AMap, data, grade) => {
    console.log('grade', grade)
    const marker = new AMap.Marker({
      content: `<div class="bound-item" id=${data.value}>
        <span>${data.label}</span>
        <span>${data.count}</span>
      </div>`, //自定义点标记覆盖物内容
      position: [data.coord.longitude, data.coord.latitude], //基点位置
      // offset: new AMap.Pixel(-13, -30), //相对于基点的偏移位置
    });
    map.setZoom(grade)
    map.add(marker);
    const markerDom = document.getElementById(data.value);
    markerDom?.addEventListener("click", () => {
      if(grade === 14) return
      map.setCenter([data.coord.longitude, data.coord.latitude])
      getHouseInfo(data.value).then(v => {
        map.clearMap()
        console.log(v)
        map.setZoom(grade)
        const dataList = v.body
        dataList.forEach(v => {
          drawMarker(AMap, v, grade + 2)
        })
      })
    })
  }

  useEffect(() => {
    AMapLoader.load({
      key: "eda7c73618d91fcdbe7c299ee1775c4a", // 申请好的Web端开发者Key，首次调用 load 时必填
      version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
      plugins: ['AMap.Scale', 'AMap.ToolBar', 'AMap.Geocoder'], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
    })
      .then((AMap) => {
        map = new AMap.Map("container", {
          // 设置地图容器id
          viewMode: "3D", // 是否为3D地图模式
          zoom: 10, // 初始化地图级别
          center: [116.397428, 39.90923], // 初始化地图中心点位置
        });
        var toolbar = new AMap.ToolBar(); //创建工具条插件实例
        map.addControl(toolbar); //添加工具条插件到页面
        var scale = new AMap.Scale(); //创建工具条插件实例
        map.addControl(scale); //添加工具条插件到页面
        getAreaByName(currentCity).then(val => {
          getGeoInfoByName(currentCity).then(res => {
            console.log('res', res)
            map.setCenter([res.longitude, res.latitude])
          })
          getHouseInfo(val.body.value).then(v => {
            console.log(v)
            const dataList = v.body
            dataList.forEach(v => {
              drawMarker(AMap, v, 10)
            })
          })
        })
      })
      .catch((e) => {
        console.log(e);
      });

    return () => {
      map?.destroy();
    };
  }, []);

  return (
    <div className="house-find">
      <div className='house-find-top'>
        <LeftOutline onClick={() => { nav('/home/index') }} className='left-arrow'/>
        <span>地图找房</span>
      </div>
      <div
        id="container"
        className='container'
        style={{ height: 'calc(100vh - 55px)' }}
      ></div>
    </div>
  );
}