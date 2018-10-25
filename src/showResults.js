//Promise构造函数接收一个函数作为参数，接收额外两个函数resolve和reject
//resolve表示Promise为解决状态，reject表示为拒绝状态
//setTimeout用于在制定的毫秒数后调用函数
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
//async函数返回的是一个Promise对象
export default (async function showResults(values) {
    //模拟服务器延迟
    //如果Promise是完成状态，await的结果是完成态的值，反之抛出拒绝值
    await sleep(500);
    //JSON.stringify(value, replacer, space)
    //value指将要序列化成JSON字符串的值
    //replacer为null，对象所有属性都会被序列化
    //space指缩进用的空白字符串，用于美化输出
    //ES6的新语法，模板字符串，可以换行、嵌入变量和原生输出
    //小撇号使用tab键上面的引号``， 非enter键旁边的引号''
    window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
});