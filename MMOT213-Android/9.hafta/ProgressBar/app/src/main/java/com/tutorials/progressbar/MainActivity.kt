package com.tutorials.progressbar

import android.os.Bundle
import android.os.Handler
import android.view.View
import android.widget.Button
import android.widget.ProgressBar
import android.widget.TextView
import androidx.appcompat.app.AppCompatActivity

class MainActivity : AppCompatActivity() {

    private var i = 0
    private val handler = Handler()

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val button = findViewById(R.id.button) as Button
        val progressBar = findViewById(R.id.progressBar) as ProgressBar
        val progressBarText = findViewById(R.id.textView) as TextView

        button.setOnClickListener {

            progressBar.setVisibility(View.VISIBLE)
            i = progressBar!!.progress


            Thread(Runnable {

                while (i < 100) {
                    i += 5

                    handler.post(Runnable {
                        progressBar!!.progress = i
                        progressBarText.text = "$i/${progressBar!!.max}"
                    })

                    Thread.sleep(100)

                    if (i == 100) {
                        progressBar.setVisibility(View.INVISIBLE)
                    }

                }

            }).start()

        }

    }
}