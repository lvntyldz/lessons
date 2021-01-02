package com.tutorials.sqliteexample

class User {
    var age: Int = 0
    var name: String? = null
    var id: Int = 0

    constructor(id: Int, name: String, age: Int) {
        this.age = age
        this.name = name
        this.id = id
    }

    constructor(name: String, age: Int) {
        this.age = age
        this.name = name
    }

}