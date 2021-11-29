package com.steds.dao;

import com.steds.model.StockByTimeCharts;
import org.springframework.stereotype.Repository;

import java.time.DayOfWeek;
import java.time.Instant;
import java.time.LocalDate;
import java.time.ZoneId;
import java.util.Calendar;
import java.util.Date;
import java.util.LinkedHashMap;
import java.util.List;

@Repository
public class StockChartWebAppDaoImpl implements stockChartWebAppDao {

    private int openingTimeHour = 8;
    private int openingTimeMin = 30;

    @Override
    public LinkedHashMap<String, Double> getGraphPointsBy5minForDaily(List<StockByTimeCharts> companyInfo) {
        //List of Price and Date
        LinkedHashMap<String, Double> PriceAndDateOfCompany = new LinkedHashMap<>();

        //get the date of first element in companyInfo
        Date realTimeDate = new Date();
        realTimeDate = companyInfo.get(0).getDate();
        int day = realTimeDate.getDay();


        int index = 0;
        //loop through to find the realTimeDate day and the index of the StockByTimeCharts element that matches with opening time of 9:30 (hour then minute)
        for (int i = 0; i < companyInfo.size(); i++) {
            int openHourTime = companyInfo.get(i).getDate().getHours();
            int openMinTime = companyInfo.get(i).getDate().getMinutes();
            if (openHourTime == openingTimeHour && openMinTime == openingTimeMin) {
                index = i;
                break;
            }
        }
        for(int i= index; i>=0;i--){
           StockByTimeCharts getGraphPointsFromCompany = companyInfo.get(i);
           PriceAndDateOfCompany.put(getGraphPointsFromCompany.getDate().toString(), getGraphPointsFromCompany.getClose());

        }
        return PriceAndDateOfCompany;
    }

    @Override
    public LinkedHashMap<String, Double> getGraphPointsBy15minForDaily(List<StockByTimeCharts> companyInfo) {
        // x and y cord linkedhashmap
        LinkedHashMap<String, Double> PriceAndDateOfCompany = new LinkedHashMap<>();

        //get the date of first element in companyInfo
        Date realTimeDate = new Date();
        realTimeDate = companyInfo.get(0).getDate();

        //ZoneID for Date --> LocalDate Conversion below
        ZoneId defaultZoneId = ZoneId.systemDefault();
        //Converting the date to Instant
        Instant instant = realTimeDate.toInstant();
        LocalDate localDate = instant.atZone(defaultZoneId).toLocalDate();


        LocalDate date = localDate.minusDays(5);
        //Deal's with business days but not holidays...
        if(date.getDayOfWeek() == DayOfWeek.SUNDAY)
            date = date.minusDays(2);
        if(date.getDayOfWeek() == DayOfWeek.SATURDAY)
            date = date.minusDays(1);

        int year = date.getYear();
        int month = date.getMonth().getValue();
        month = month -1;
        int day = date.getDayOfMonth();

        int index = 0;
        //loop through to find the realTimeDate day and the index of the StockByTimeCharts element that matches with opening time of 9:30 (hour then minute)
        for (int i = 0; i < companyInfo.size(); i++) {
            Calendar cal = Calendar.getInstance();
            cal.setTime(companyInfo.get(i).getDate());
            int startingYear = cal.get(Calendar.YEAR);
            int startingMonth = cal.get(Calendar.MONTH);
            int startingDay = cal.get(Calendar.DAY_OF_MONTH);
            int openHourTime = companyInfo.get(i).getDate().getHours();
            int openMinTime = companyInfo.get(i).getDate().getMinutes();
            if (openHourTime == openingTimeHour && openMinTime == openingTimeMin && startingYear == year &&
                    startingDay == day && startingMonth == month) {

                index = i;
                break;
            }
        }
        for(int i= index; i>=0;i--){
            StockByTimeCharts getGraphPointsFromCompany = companyInfo.get(i);
            PriceAndDateOfCompany.put(getGraphPointsFromCompany.getDate().toString(), getGraphPointsFromCompany.getClose());

        }
        return PriceAndDateOfCompany;

    }
}
