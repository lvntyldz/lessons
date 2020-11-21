package com.tutorials.siwtchscreen

import android.content.Intent
import android.graphics.Color
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import android.widget.EditText
import android.widget.TextView
import android.widget.Toast

class LoginActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_login)

        window.decorView.setBackgroundColor(Color.BLUE)
        
        val loginBtn = findViewById(R.id.loginBtn) as Button
        val username = findViewById(R.id.username) as EditText
        val password = findViewById(R.id.password) as EditText

        loginBtn.setOnClickListener {
            //Toast.makeText(this,"giriş yapılıyor",Toast.LENGTH_SHORT).show()

            val usernameStr = username.getText().toString()
            val passwordStr = password.getText().toString()


            if(usernameStr.equals("ali") && passwordStr.equals("123")){
                val intent = Intent(this, HomeActivity::class.java)
                startActivity(intent)
            }

        }

    }
}