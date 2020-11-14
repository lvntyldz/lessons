package com.tutorials.myapplication

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.Gravity
import android.view.LayoutInflater
import android.widget.Button
import android.widget.ImageView
import android.widget.TextView
import android.widget.Toast

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val button = findViewById(R.id.button) as Button

        button.setOnClickListener {
            showCustomToastMessage("toast mesajı örneği",R.drawable.ic_launcher_background)
        }

    }


    fun showCustomToastMessage(message:String,imageSrc:Int){

        var toast = Toast(this)

        toast.apply {

            var layout = LayoutInflater.from(applicationContext).inflate(R.layout.toast_activity,null,false)

            val textView = layout.findViewById<TextView>(R.id.textView2) as TextView
            textView.setText(message)

            val imageView = layout.findViewById<ImageView>(R.id.imageView3) as ImageView
            imageView.setImageResource(imageSrc)

            setGravity(Gravity.CENTER,0,0)
            setView(layout)
            show()
        }


    }
}