package com.tutorials.myapplication

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import android.widget.TextView

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        var number=0

        var textView = findViewById(R.id.textView) as TextView
        var increaseBtn = findViewById(R.id.increaseBtn) as Button
        var decreasBtn = findViewById(R.id.decreaseBtn) as Button


        increaseBtn.setOnClickListener {
            number = number+1
            textView.text = number.toString()
        }

        decreasBtn.setOnClickListener {
            number = number-1
            textView.text = number.toString()
        }



    }
}