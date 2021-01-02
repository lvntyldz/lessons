package com.tutorials.sqliteexample

import android.content.ContentValues
import android.content.Context
import android.database.sqlite.SQLiteDatabase
import android.database.sqlite.SQLiteOpenHelper
import android.widget.Toast

val DATABASENAME = "UsersDB"
val TABLENAME = "Users"
val COL_NAME = "name"
val COL_AGE = "age"
val COL_ID = "id"

class DatabaseHandler(var context: Context) : SQLiteOpenHelper(context, DATABASENAME, null, 1) {

    override fun onCreate(db: SQLiteDatabase?) {

        val createTable =
            "CREATE TABLE " + TABLENAME + "(" + COL_ID + " INTEGER PRIMARY KEY AUTOINCREMENT, " + COL_NAME + " VARCHAR(25), " + COL_AGE + " INTEGER )"
        db?.execSQL(createTable)
    }

    override fun onUpgrade(db: SQLiteDatabase?, oldVersion: Int, newVersion: Int) {
        TODO("Not yet implemented")
    }

    fun insertData(user: User) {

        val database = this.writableDatabase
        val contentValues = ContentValues()
        contentValues.put(COL_NAME, user.name)
        contentValues.put(COL_AGE, user.age)

        val result = database.insert(TABLENAME, null, contentValues)

        if (result == 0L) {
            Toast.makeText(context, "Kullanıcı eklenemedi", Toast.LENGTH_SHORT).show()
        } else {
            Toast.makeText(context, "Kullanıcı eklendi", Toast.LENGTH_SHORT).show()
        }

    }

    fun readData():MutableList<User>{

        val list : MutableList<User> = ArrayList()
        val db = this.readableDatabase
        val query = "Select * from $TABLENAME"
        val result = db.rawQuery(query,null)

        if(result.moveToFirst()){

            do{

                val id : Int = result.getString(result.getColumnIndex(COL_ID)).toInt()
                val name : String = result.getString(result.getColumnIndex(COL_NAME))
                val age : Int = result.getString(result.getColumnIndex(COL_AGE)).toInt()

                val user  = User(id,name,age)
                list.add(user)
            }while (result.moveToNext())

        }

        return list
    }

}