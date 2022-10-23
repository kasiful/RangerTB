package com.example.rangertb

import android.annotation.SuppressLint
import android.content.Context
import android.content.Intent
import android.os.Bundle
import android.provider.AlarmClock
import android.webkit.WebView
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import java.util.*
import kotlin.collections.ArrayList

var data_user =
    """[{"nama":"Ayah","nik":"1374020101900001","hasil_skrining":"","validasi":"","tahap_pengobatan":"","berat_badan":"","jumlah_obat":"","waktu_awal_minum_obat":"","tanggal_awal":"","jadwal_harian":""},{"nama":"Bunda","nik":"1374020101910001","hasil_skrining":"","validasi":"","tahap_pengobatan":"","berat_badan":"","jumlah_obat":"","waktu_awal_minum_obat":"","tanggal_awal":"","jadwal_harian":""},{"nama":"Anak Pertama","nik":"1374020101200001","hasil_skrining":"","validasi":"","tahap_pengobatan":"","berat_badan":"","jumlah_obat":"","waktu_awal_minum_obat":"","tanggal_awal":"","jadwal_harian":""},{"nama":"Anak Kedua","nik":"1374020101220001","hasil_skrining":"","validasi":"","tahap_pengobatan":"","berat_badan":"","jumlah_obat":"","waktu_awal_minum_obat":"","tanggal_awal":"","jadwal_harian":""},{"nama":"Anak Ketiga","nik":"1374020101220001","hasil_skrining":"","validasi":"","tahap_pengobatan":"","berat_badan":"","jumlah_obat":"","waktu_awal_minum_obat":"","tanggal_awal":"","jadwal_harian":""}]"""

class MainActivity : AppCompatActivity() {
    @SuppressLint("JavascriptInterface")
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val sharedPreference =  getSharedPreferences("json_data_preference",Context.MODE_PRIVATE)
        if (!sharedPreference.contains("json_data")) {
            var editor = sharedPreference.edit()
            editor.putString("json_data",data_user)
            editor.commit()
        }
//        var editor = sharedPreference.edit()
//        editor.putString("json_data",data_user)
//        editor.commit()

        val myWebView: WebView = findViewById(R.id.webview)
        myWebView.loadUrl("file:///android_asset/ranger_tb_web/index.html")
        myWebView.settings.javaScriptEnabled = true
        myWebView.addJavascriptInterface(WebAppInterface(this), "Android")

    }


}

