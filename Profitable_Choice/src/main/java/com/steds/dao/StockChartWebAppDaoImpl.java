package com.steds.dao;

import com.steds.model.StockByTimeCharts;
import com.steds.model.historical;
import org.springframework.stereotype.Repository;

import java.time.DayOfWeek;
import java.time.Instant;
import java.time.LocalDate;
import java.time.ZoneId;
import java.util.*;

@Repository
public class StockChartWebAppDaoImpl implements stockChartWebAppDao {

    private int openingTimeHour = 8;
    private int openingTimeMin = 30;

    @Override
    public List<historical> getGraphPointsBy5minForDaily(List<StockByTimeCharts> companyInfo) {
        //List of Price and Date
        LinkedHashMap<String, Double> PriceAndDateOfCompany = new LinkedHashMap<>();
        //formatted return statement
        List<historical> newStats = new ArrayList<>();
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
            historical dailyChartData = new historical();
            StockByTimeCharts getGraphPointsFromCompany = companyInfo.get(i);
            //Converting to our List<objects here
            dailyChartData.setClose(getGraphPointsFromCompany.getClose());
            dailyChartData.setDate(getGraphPointsFromCompany.getDate().toString());
            //add to our  list objects then
            newStats.add(dailyChartData);
        }


        return newStats;
    }

    @Override
    public  List<historical> getGraphPointsBy15minForDaily(List<StockByTimeCharts> companyInfo) {
        // x and y cord linkedhashmap
        LinkedHashMap<String, Double> PriceAndDateOfCompany = new LinkedHashMap<>();
        //formatted return statement
        List<historical> newStats = new ArrayList<>();
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
            historical dailyChartData = new historical();
            StockByTimeCharts getGraphPointsFromCompany = companyInfo.get(i);
            //PriceAndDateOfCompany.put(getGraphPointsFromCompany.getDate().toString(), getGraphPointsFromCompany.getClose());
            //Converting to our List<objects here
            dailyChartData.setClose(getGraphPointsFromCompany.getClose());
            dailyChartData.setDate(getGraphPointsFromCompany.getDate().toString());
            //add to our  list objects then
            newStats.add(dailyChartData);
        }
        return newStats;

    }

    @Override
    public List<List<Object>> getGraphPointsByDailyBasis(List<List<Object>> companyInfo) {
        List<List<Object>> formattedReturn = new ArrayList<>();
        formattedReturn = companyInfo;
        return formattedReturn;
    }
}
