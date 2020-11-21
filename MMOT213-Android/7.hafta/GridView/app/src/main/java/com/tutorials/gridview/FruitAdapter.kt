package com.tutorials.gridview

import android.content.Context
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.BaseAdapter
import android.widget.ImageView
import android.widget.TextView

class FruitAdapter : BaseAdapter {
    var context: Context? = null
    var fruitList = ArrayList<Fruit>()

    constructor(context: Context, fruitList: ArrayList<Fruit>) : super() {
        this.context = context
        this.fruitList = fruitList
    }

    override fun getCount(): Int {
        return fruitList.size
    }

    override fun getItem(position: Int): Any {
        return fruitList[position]
    }

    override fun getItemId(position: Int): Long {
        return position.toLong()
    }

    override fun getView(position: Int, convertView: View?, parent: ViewGroup?): View {
        var fruit = this.fruitList[position]

        val inflater = context!!.getSystemService(Context.LAYOUT_INFLATER_SERVICE) as LayoutInflater
        val fruitItemView = inflater.inflate(R.layout.fruit_layout, null)

        val fruitName = fruitItemView.findViewById(R.id.fruitName) as TextView
        val fruitImage = fruitItemView.findViewById(R.id.fruitImage) as ImageView

        fruitName.setText(fruit.name!!)
        fruitImage.setImageResource(fruit.image!!)

        fruitImage.setOnClickListener {
            println("seçilen meyve : ${fruit.toString()}")
        }


        return fruitItemView

    }


}