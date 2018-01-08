"use strict";
var person = new Object("");
person.name="mike";
person.sayName = function(){
	// console.log(this.name);
};
person.sayName();

person = {
	name: "jane",
	sayName: function(){
		// console.log(this.name);
	}
};
person.sayName();

var book = {
	_year: 2017,
	edition: 1
};
Object.defineProperty(book, "year", {
	get: function(){
		return this._year;
	},
	set: function(newValue){
		if(newValue > 2017){
			this._year = newValue;
			this.edition = newValue - 2017;
		}
	}
});

book.year=2019;
// console.log(book.edition);

//工厂模式
function createPerson(name, age, job) {
	var o = new Object();
	o.name = name;
	o.age = age;
	o.job = job;
	o.sayName = function(){
		// console.log(this.name);
	};
	return o;
}
person = createPerson('hsp', 24, 'dev');
// console.log(person.job);
person.sayName();

//构造函数模式
function Person(name, age, job){
	this.name = name;
	this.age = age;
	this.job = job;
	this.sayName = function(){
		// console.log(this.name);
	};
}
person = new Person('hpf', 24, 'aaa');
// console.log(person.job);
person.sayName();
// console.log(person.constructor == Person);
// console.log(person instanceof Object);
// console.log(person instanceof Person);

// Person('askl', 24, 'bbb');//添加到window//严格模式下不行
// window.sayName();

function Man() {}
Man.prototype.name = 'asd';
Man.prototype.age = 25;
Man.prototype.sayName = function(){
	// console.log(this.name);
};
var man = new Man();
man.sayName();
// console.log('name' in man);
// console.log(Man.prototype.isPrototypeOf(man));
// console.log(Object.getPrototypeOf(man).name);
// console.log(Object.getPrototypeOf(man) == Man.prototype);
// console.log(man.name);
// console.log(man.hasOwnProperty('name'));//在给定属性存在对象实例中,才返回true。
man.name = 'fgh';
// console.log(man.name);
// console.log(man.hasOwnProperty('name'));
// console.log(man.hasOwnProperty('name')&&('name' in man));
// console.log(Object.keys(man));
delete man.name;
// console.log(man.hasOwnProperty('name')&&('name' in man));
// console.log(man.name);
// console.log(Object.keys(Man.prototype));
// console.log(Object.getOwnPropertyNames(Man.prototype));

function Woman() {}
Woman.prototype = {
	// constructor: Woman,
	name: 'jkl',
	age: 21,
	sayName: function () {
		// console.log(this.name);
	}
};
new Woman().sayName();
