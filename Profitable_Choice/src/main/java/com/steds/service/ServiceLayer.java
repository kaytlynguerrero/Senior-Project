package com.steds.service;

import com.steds.dao.stockChartWebAppDao;
import com.steds.model.DailyChartResponse;
import com.steds.model.historical;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.ParseException;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.time.format.FormatStyle;
import java.util.*;

@Service
public class ServiceLayer {

    @Autowired
    private stockChartWebAppDao stockChartDao;
    //SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd ");
    DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd", Locale.ENGLISH);

    @Autowired
    public ServiceLayer(stockChartWebAppDao stockChartDao) {
        this.stockChartDao = stockChartDao;
    }

    public List<List<Object>> buildGraphPointsForDailyPrices(DailyChartResponse result) throws ParseException {
        //List to store all of our timestamps/prices by the historical {time}
        List <historical> companyInfo = new ArrayList<historical>();
        List<Object> percentChange = new ArrayList<>();

        List<List<Object>> formattedReturn = new ArrayList<>();

        List<Map<String, Object>> results = result.getHistorical();
        //change the iterations for the time intervals  ex: i+5 for every +5 days
        int j =0 ;
        while(j!=23) {
            //historical model
            historical dailyChartData = new historical();
            //extracting Map from arraylist for our model object above
            Map checkDate = results.get(j);

            Double price = (Double) checkDate.get("close");
            String sDate = (String) checkDate.get("date");

            LocalDate date = LocalDate.parse(sDate,formatter);
            // Date formattedDate = sdf.parse(sDate);
            // int  centralHour = formattedDate.getHours()-1;

            //THIS IS OUR FORMATTER... WE CAN CHANGE MEDIUM TO LONG TO HAVE 'APRIL' INSTEAD OF 'APR'
            String formattedDate = date.format(DateTimeFormatter.ofLocalizedDate(FormatStyle.MEDIUM));

            dailyChartData.setClose(price);
            dailyChartData.setDate(formattedDate);

            companyInfo.add(dailyChartData);
            j++;
        }
        //Graph Data
        double percentage = 0;
        double newPrice = companyInfo.get(0).getClose();
        double oldPrice = companyInfo.get(companyInfo.size()-1).getClose();
        if(newPrice>=oldPrice){
            percentage = ((newPrice-oldPrice)/oldPrice)*100;
        }
        else{
            percentage = ((oldPrice-newPrice)/oldPrice)*100;
        }
        double roundPercentage = Math.round(percentage*100.0)/100.0;
        percentChange.add(0,roundPercentage);

        formattedReturn.add(Collections.singletonList(companyInfo));
        formattedReturn.add(percentChange);

        return formattedReturn;
    }
}


