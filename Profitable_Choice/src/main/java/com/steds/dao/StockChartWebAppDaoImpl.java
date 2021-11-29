package com.steds.dao;

import com.steds.model.StockByTimeCharts;
import org.springframework.stereotype.Repository;

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
}
