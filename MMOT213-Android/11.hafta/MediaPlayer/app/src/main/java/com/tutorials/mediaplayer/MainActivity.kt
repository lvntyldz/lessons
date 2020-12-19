package com.tutorials.mediaplayer

import android.media.MediaPlayer
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import android.widget.TextView

class MainActivity : AppCompatActivity() {
    var mediaPlayer : MediaPlayer?=null

    override fun onCreate(savedInstanceState: Bundle?) {

        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val playSoundBtn = findViewById(R.id.playSound) as Button
        val isPlayingTxt = findViewById(R.id.isPlayingTxt) as TextView


        playSoundBtn.setOnClickListener {

            mediaPlayer = MediaPlayer.create(this,R.raw.alert)
            mediaPlayer?.start()
            isPlayingTxt.setText(mediaPlayer!!.isPlaying.toString())

        }

    }
}