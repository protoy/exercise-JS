        class Student {
            constructor(name, number){
                this.name = name
                this.number = number
            }
            sayHi() {
                console.log(
                    `姓名 ${this.name}，学好 ${this.number}`
                )
            }
            study() {

            }
        }
        //通过类声明对象/实例
        const xialuo = new Student('夏洛', 100);
        console.log(xialuo.name);
        console.log(xialuo.number);
        xialuo.sayHi();

        class Youngstudent extends Student{
            constructor(name, age){
                super(name)
                this.age = age;
            }
            year() {
                console.log(`the age of ${this.name} is ${this.age}`);
            }
        }
        const madongmei = new Youngstudent('马冬梅', 16);
        madongmei.year();

        console.log(Student.prototype.__proto__)
        console.log(Student.prototype)
        console.log(Youngstudent.prototype)