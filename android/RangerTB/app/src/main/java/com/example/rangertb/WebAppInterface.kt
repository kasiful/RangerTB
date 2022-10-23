package com.example.rangertb

import android.content.Context
import android.content.Intent
import android.provider.AlarmClock
import android.webkit.JavascriptInterface
import android.widget.Toast
import androidx.core.content.ContextCompat.startActivity
import com.google.gson.Gson
import java.util.*
import kotlin.collections.ArrayList

/** data class digunakan untuk membaca json */
data class Dset (
    var nama: String? = null,
    var nik: String? = null,
    var hasil_skrining: String? = null,
    var validasi: String? = null,
    var tahap_pengobatan: String? = null,
    var nama_obat: String? = null,
    var jumlah_obat: String? = null,
    var waktu_awal_minum_obat: String? = null,
)

/** interface untuk penghubung android dan javascript dengan fungsi */
class WebAppInterface(private val mContext: Context) {
    //    val mPrefs = mContext.getSharedPreferences("My_Prefs", 0)
    @JavascriptInterface
    fun skrining() {
        val intent = Intent(mContext, Skrining::class.java)
        mContext.startActivity(intent)
    }

    @JavascriptInterface
    fun alarmObat() {
        val intent = Intent(mContext, AlarmObat::class.java)
        mContext.startActivity(intent)
    }

    @JavascriptInterface
    fun capaianSembuh() {
        val intent = Intent(mContext, CapaianSembuh::class.java)
        mContext.startActivity(intent)
    }

    @JavascriptInterface
    fun get_dataset(): String? {
        val sharedPreference = mContext.getSharedPreferences("json_data_preference", Context.MODE_PRIVATE)
        var dset = sharedPreference.getString("json_data", "")
        return dset;
    }

    @JavascriptInterface
    fun toast(teks:String) {
        Toast.makeText(mContext, teks, Toast.LENGTH_SHORT).show()
    }

    @JavascriptInterface
    fun hasil_skrining(nik:String, hasil:String) {
        val sharedPreference = mContext.getSharedPreferences("json_data_preference", Context.MODE_PRIVATE);
        var dset_string = sharedPreference.getString("json_data", "");

        val dset: List<Dset> = Gson().fromJson(dset_string, Array<Dset>::class.java).toList();
        var posisi_nik = -1;
        for (i in 0..dset.count()){
            if (dset[i].nik == nik){
                posisi_nik = i;
                break;
            }
        }
        dset[posisi_nik].hasil_skrining = hasil

        // setelah di edit, simpan ke sharedPreference
        dset_string = Gson().toJson(dset)
//        Log.d("TESTING SAJA", dset_string)
        var editor = sharedPreference.edit()
        editor.putString("json_data",dset_string)
        editor.commit()

    }

    @JavascriptInterface
    fun finish(){

    }

    @JavascriptInterface
    fun edit_nilai_alarm_obat(dset_string:String) {
        val sharedPreference = mContext.getSharedPreferences("json_data_preference", Context.MODE_PRIVATE);
        var editor = sharedPreference.edit()
        editor.putString("json_data",dset_string)
        editor.commit()
        Toast.makeText(mContext, "Data berhasil disimpan", Toast.LENGTH_SHORT).show()
    }

    @JavascriptInterface
    fun set_alarm_obat(waktu:String, jadwal:String){
        try{
            var waktu = waktu.split(":")
            var jam = waktu[0].toInt()
            var menit = waktu[1].toInt()

            val alarmDays = ArrayList<Int>()
            if (jadwal == ""){
                alarmDays.add(Calendar.MONDAY)
                alarmDays.add(Calendar.TUESDAY)
                alarmDays.add(Calendar.WEDNESDAY)
                alarmDays.add(Calendar.THURSDAY)
                alarmDays.add(Calendar.FRIDAY)
                alarmDays.add(Calendar.SATURDAY)
                alarmDays.add(Calendar.SUNDAY)
            } else {
                val jadwal_arr = jadwal.split(";").toTypedArray()
                var list_hari = arrayOf("senin", "selasa", "rabu", "kamis", "jumat", "sabtu", "minggu");
                var kalender = arrayOf(Calendar.MONDAY, Calendar.TUESDAY, Calendar.WEDNESDAY, Calendar.THURSDAY, Calendar.FRIDAY, Calendar.SATURDAY, Calendar.SUNDAY)
                for (i in 0 until (jadwal_arr.count())){
                    for (j in 0 until (list_hari.count())){
                        if (jadwal_arr[i] == list_hari[j]){
                            alarmDays.add(kalender[j])
                            break
                        }
                    }
                }
            }

            val intent = Intent(AlarmClock.ACTION_SET_ALARM)
            intent.putExtra(AlarmClock.EXTRA_HOUR, jam)
            intent.putExtra(AlarmClock.EXTRA_MINUTES, menit)
            intent.putExtra(AlarmClock.EXTRA_MESSAGE, "Minum Obat TB ya :D")
            intent.putExtra(AlarmClock.EXTRA_DAYS, alarmDays)
            mContext.startActivity(intent)
        } catch (err: Exception) {
            Toast.makeText(mContext, err.message, Toast.LENGTH_SHORT).show()
        }


    }

    @JavascriptInterface
    fun resetData() {
        val sharedPreference =
            mContext.getSharedPreferences("json_data_preference", Context.MODE_PRIVATE)
        var editor = sharedPreference.edit()
        editor.putString("json_data", data_user)
        editor.commit()
        Toast.makeText(mContext, "Reset Data Berhasil", Toast.LENGTH_SHORT).show()
    }

}