### debounce - 防抖
debounce - 当调用函数n秒后，才会执行逻辑,如果在这n秒内又调用, 则将重新开始计算等待时间。
拆解:
1.持续触发不执行
2.不触发的一段时间之后再执行

#### 实现原理
对函数进行加工、执行控制，返回新的函数(加一层执行包装) 
1. 闭包 + setTimeout
setTimeout延时调用回调函数，变量记录timeid，再次调用如果变量存在就返回清除timeid，再次执行延时逻辑，直到回调函数执行再清除timeid。

2. 改变this
Funtion.prototype.call
Funtion.prototype.apply
Funtion.prototype.bind

#### 适用场景
1. 搜索框展示提示，频繁促发ajax
2. resize 事件处理
3. ...

