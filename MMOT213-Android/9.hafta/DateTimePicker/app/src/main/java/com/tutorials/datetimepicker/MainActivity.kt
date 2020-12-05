package com.tutorials.datetimepicker

import android.app.DatePickerDialog
import android.app.TimePickerDialog
import android.os.Bundle
import android.widget.Button
import android.widget.TextView
import androidx.appcompat.app.AppCompatActivity
import java.util.*

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val timeTextView = findViewById(R.id.timeTextView) as TextView
        val dateTextView = findViewById(R.id.dateTextView) as TextView
        val changeDateBtn = findViewById(R.id.changeDateBtn) as Button
        val changeTimeBtn = findViewById(R.id.changeTimeBtn) as Button

        dateTextView.text = "--/--/----"
        timeTextView.text = "--:--"

        val now = Calendar.getInstance()

        changeDateBtn.setOnClickListener {

            val datePickerDialog = DatePickerDialog(this, DatePickerDialog.OnDateSetListener { view, year, month, dayOfMonth -> dateTextView.text = "$dayOfMonth/$month/$year" }, now.get(Calendar.YEAR), now.get(Calendar.MONTH), now.get(Calendar.DAY_OF_MONTH))

            datePickerDialog.show()

        }


        changeTimeBtn.setOnClickListener {

            val timePickerDialog = TimePickerDialog(this, TimePickerDialog.OnTimeSetListener { view, hourOfDay, minute -> timeTextView.text = "$hourOfDay:$minute" }, now.get(Calendar.HOUR_OF_DAY), now.get(Calendar.MINUTE), false)
            timePickerDialog.show()

        }


    }
}