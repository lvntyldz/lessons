package com.tutorials.sounpool

import android.media.AudioManager
import android.media.SoundPool
import android.os.Bundle
import android.widget.Button
import android.widget.TextView
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity

class MainActivity : AppCompatActivity() {

    var soundPool: SoundPool? = null
    private val soundId = 1

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val playSound = findViewById(R.id.playSound) as Button

        soundPool = SoundPool(6,AudioManager.STREAM_MUSIC,0)
        soundPool!!.load(baseContext,R.raw.alert,1)


        playSound.setOnClickListener {

            Toast.makeText(applicationContext, "Ses oynatma başlatılıyor", Toast.LENGTH_SHORT).show()
            soundPool?.play(soundId, 1F, 1F, 0, 0, 1F)
            Toast.makeText(this, "Çalıyor...", Toast.LENGTH_SHORT).show()
        }

    }
}