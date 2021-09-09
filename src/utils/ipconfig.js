// 在这个文件中定义ip地址和端口，以后就不用每个请求去修改

/**
 * 请求数据的接口的ip
 * @type {string}
 */
let ip = "http://localhost";
/**
 * 请求数据的接口的端口
 * @type {number}
 */
let port = 8080;
/**
 * 请求静态资源的ip
 * @type {string}
 */
let staticIp = "http://localhost"
/**
 * 请求静态资源的端口
 * @type {number}
 */
let staticPort = 8080;
/**
 * 前端项目里面的数据的接口的ip
 * @type {string}
 */
let selfIp = "http://localhost";
/**
 * 前端项目里面的数据的接口的端口
 * @type {number}
 */
let selfPort = 8081;

// 需要网络请求时 import导入使用
let address = `${ip}:${port}`;
let staticAddress = `${staticIp}:${staticPort}`;
let selfAddress = `${selfIp}:${selfPort}`;
export default {
	address,
	staticAddress,
	selfAddress,
}
