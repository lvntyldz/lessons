package com.tutorials.localnotification

import android.app.*
import android.content.Context
import android.content.Intent
import android.graphics.BitmapFactory
import android.graphics.Color
import android.os.Build
import android.os.Bundle
import android.widget.Button
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity

class MainActivity : AppCompatActivity() {

    lateinit var manager: NotificationManager
    lateinit var notificationBuilder: Notification.Builder
    lateinit var channel: NotificationChannel

    private val channelId = "com.tutorials.localnotification"
    private val requestCode = 1002
    private val notificationId = 1001

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)


        val notificationButton = findViewById(R.id.notificationButton) as Button
        manager = getSystemService(Context.NOTIFICATION_SERVICE) as NotificationManager

        notificationButton.setOnClickListener {
            val toast = Toast.makeText(applicationContext, "Notification başlatılıyor....", Toast.LENGTH_SHORT)
            toast.show()


            val intent = Intent(this, LauncherActivity::class.java)
            val pendingIntent = PendingIntent.getActivity(this, requestCode, intent, PendingIntent.FLAG_UPDATE_CURRENT)

            val notificationTitle = "here is title"
            val notificationContent = "here is content"


            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {//Version>=26

                val toast2 = Toast.makeText(applicationContext, "version>=26", Toast.LENGTH_SHORT)
                toast2.show()

                channel = NotificationChannel(channelId, "notification name", NotificationManager.IMPORTANCE_HIGH)
                channel.enableLights(true)
                channel.lightColor = Color.BLUE
                channel.enableVibration(true)

                manager.createNotificationChannel(channel)


                notificationBuilder = Notification.Builder(this, channelId)
                        .setContentTitle(notificationTitle)
                        .setContentText(notificationContent)
                        .setContentIntent(pendingIntent)
                        .setSmallIcon(R.drawable.notify)
                        .setLargeIcon(BitmapFactory.decodeResource(resources, R.drawable.notify))
                
            } else {
                notificationBuilder = Notification.Builder(this, channelId)
                        .setContentTitle(notificationTitle)
                        .setContentText(notificationContent)
                        .setContentIntent(pendingIntent)
                        .setSmallIcon(R.drawable.notify)
            }

            manager.notify(notificationId, notificationBuilder.build())

        }


    }
}