package com.tutorials.sqliteexample

import android.os.Bundle
import android.widget.Button
import android.widget.EditText
import android.widget.TextView
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)


        val db = DatabaseHandler(this)
        val addUserBtn = findViewById(R.id.addUserBtn) as Button
        val listUserButton = findViewById(R.id.listUserButton) as Button

        addUserBtn.setOnClickListener {

            val editTextAge = findViewById(R.id.editTextAge) as EditText
            val editTextName = findViewById(R.id.editTextName) as EditText

            if (editTextAge.text.toString().isEmpty() || editTextName.text.toString().isEmpty()) {
                Toast.makeText(this, "Tüm alanları doldurun!", Toast.LENGTH_SHORT).show()
                return@setOnClickListener
            }

            val user = User(editTextName.text.toString(), editTextAge.text.toString().toInt())
            db.insertData(user)

        }

        listUserButton.setOnClickListener {

            val resultView = findViewById(R.id.resultTextView) as TextView
            val data = db.readData()

            resultView.text = ""

            for (i in 0 until data.size) {
                resultView.append(data[i].id.toString() + " -- " + data[i].name.toString() + " -- " + data[i].age.toString() +"\n")
            }


        }


    }
}