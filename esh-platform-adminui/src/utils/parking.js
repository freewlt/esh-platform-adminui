/**
 * Created by Administrator on 2019/11/22.
 */
export function TMap () {
  return new Promise(function (resolve, reject) {
    window.init = function () {
      resolve(qq)
    }
    var script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = 'http://map.qq.com/api/js?v=2.exp&callback=init&key=EQLBZ-W5AKJ-5RIF7-KZMBU-GNUCT-BEFGR'
    script.onerror = reject
    document.head.appendChild(script)
  })
}
