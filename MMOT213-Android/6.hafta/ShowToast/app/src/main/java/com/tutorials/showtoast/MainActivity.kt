package com.tutorials.showtoast

import android.graphics.Color
import android.os.Bundle
import android.view.Gravity
import android.view.View
import android.widget.Button
import android.widget.TextView
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val button1 = findViewById(R.id.button) as Button
        val button2 = findViewById(R.id.button2) as Button
        val button3 = findViewById(R.id.button3) as Button


        button1.setOnClickListener {
            Toast.makeText(applicationContext, "ilk toast mesajı", Toast.LENGTH_SHORT).show()
        }


        button2.setOnClickListener {

            val toast = Toast.makeText(applicationContext, "ikinci toast mesajı", Toast.LENGTH_SHORT)
            toast.setGravity(Gravity.TOP or Gravity.LEFT,0,0)
            toast.show()

        }


        button3.setOnClickListener {

            val toast = Toast.makeText(applicationContext, "üçüncü toast mesajı", Toast.LENGTH_SHORT)

            var view:View = toast.view
            view.setBackgroundColor(Color.RED)

            var text = view.findViewById<View>(android.R.id.message) as TextView
            text.setTextColor(Color.BLUE)

            toast.setGravity(Gravity.TOP or Gravity.RIGHT,0,0)

            toast.show()
        }


    }
}