//去重
let arr = [1,2,3,4,1,3,5,2]
let data = new Set(arr)
console.log(data);//Set { 1, 2, 3, 4, 5 }

console.log([...data]);//[ 1, 2, 3, 4, 5 ]

let arr1=[1,2,3,4,1,3,5,2,'c'];
let data1=new Set(arr1);
console.log(data1);//Set { 1, 2, 3, 4, 5, 'c' }

console.log(data1.add("a").add("b"));//Set { 1, 2, 3, 4, 5, 'c', 'a', 'b' }

console.log(data1.delete("b"));//true
console.log(data1.has(2));//true
data1.clear();
console.log(data1.size,data1);//0 Set {}

/**
 * size 数据长度
 *
 * Set.add() 添加子项 返回set 数据本身
 * Set.delete() 删除子项 返回true | false
 * Set.has() 是否包含子项
 */


// Map
let data2 = new Map([['js',40],['vue',30],['react',20]]);
data2.set('零度',18);
console.log(data2);//Map { 'js' => 40, 'vue' => 30, 'react' => 20, '零度' => 18 }

console.log(data2.delete('js'));//true
console.log(data2);//Map { 'vue' => 30, 'react' => 20, '零度' => 18 }
console.log(data2.get('vue'));//30
console.log(data2.has('vue'));//true
console.log(data2);//Map { 'vue' => 30, 'react' => 20, '零度' => 18 }
