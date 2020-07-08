        const obj1 = {
            age:20,
            name: 'xialuo',
            address:{
                city: 'beijing'
            },
            arr:['a', 'b','c']
        }

        const obj2 = deepClone(obj1);
        obj2.address.city = 'shanghai';
        console.log(obj1.address.city);

        function deepClone(obj = {}) {
            if(typeof obj !== 'object' || obj == null){
                //obj是null 或者不是对象和数组 直接返回
                return obj;
            }
            let result
            if(obj instanceof Array){
                result = []
            }else {
                result = {}
            }
            
            for(let key in obj){
                if(obj.hasOwnProperty(key)){
                    //保证key不是原型属性
                    result[key] = deepClone(obj[key]);
                }
            }

            return result;


        }