package com.tutorials.gridview

import android.os.Bundle
import android.widget.GridView
import androidx.appcompat.app.AppCompatActivity

class MainActivity : AppCompatActivity() {

    var adapter: FruitAdapter? = null
    var fruits =  ArrayList<Fruit>()

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)


        fruits.add(Fruit("Limon",R.drawable.lemon_icon))
        fruits.add(Fruit("elma",R.drawable.apple_icon))
        fruits.add(Fruit("Muz",R.drawable.banana_icon))

        adapter = FruitAdapter(this,fruits)

        val gridView = findViewById(R.id.gridView) as GridView
        gridView.adapter = adapter

    }
}