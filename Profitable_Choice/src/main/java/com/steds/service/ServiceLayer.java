package com.steds.service;

import com.steds.dao.stockChartWebAppDao;
import com.steds.model.DailyChartResponse;
import com.steds.model.StockByTimeCharts;
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

    //1M
    public List<List<Object>> monthlyChart(DailyChartResponse result) throws ParseException {
        //List to store all of our timestamps/prices by the historical {time}
        List <historical> companyInfo = new ArrayList<historical>();
        List<Object> percentChange = new ArrayList<>();

        List<List<Object>> formattedReturn = new ArrayList<>();

        List<Map<String, Object>> results = result.getHistorical();
        //change the iterations for the time intervals  ex: i+5 for every +5 days
        int j =23 ;
        while(j!=0) {
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
            j--;
        }
        //Graph Data
        double percentage = 0;
        double oldPrice = companyInfo.get(0).getClose();
        double newPrice = companyInfo.get(companyInfo.size()-1).getClose();
        if(newPrice>=oldPrice){
            percentage = ((newPrice-oldPrice)/oldPrice)*100;
        }
        else{
            percentage = ((newPrice-oldPrice)/oldPrice)*100;
        }
        double roundPercentage = Math.round(percentage*100.0)/100.0;
        percentChange.add(0,roundPercentage);

        //Company Stats
        List<Double> prices = new ArrayList();
        for(int i=0;i<companyInfo.size();i++){
            prices.add(companyInfo.get(i).getClose());
        }
        List<StockByTimeCharts> companyStats = buildCompanyStatsForDaily(prices);

        formattedReturn.add(Collections.singletonList(companyInfo));
        formattedReturn.add(percentChange);
        formattedReturn.add(Collections.singletonList(companyStats));


        return formattedReturn;
    }
    //3M
    public List<List<Object>> threeMonthsChart(DailyChartResponse result) throws ParseException {
        //List to store all of our timestamps/prices by the historical {time}
        List <historical> companyInfo = new ArrayList<historical>();
        List<Object> percentChange = new ArrayList<>();

        List<List<Object>> formattedReturn = new ArrayList<>();

        List<Map<String, Object>> results = result.getHistorical();
        //change the iterations for the time intervals  ex: i+5 for every +5 days
        int j =62 ;
        while(j!=0) {
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
            j--;
        }
        //Graph Data
        double percentage = 0;
        double oldPrice = companyInfo.get(0).getClose();
        double newPrice = companyInfo.get(companyInfo.size()-1).getClose();
        //percentage increase
        if(newPrice>=oldPrice){
            percentage = ((newPrice-oldPrice)/oldPrice)*100;
        }
        else{//percentage decrease
            percentage = ((newPrice-oldPrice)/oldPrice)*100;
        }
        double roundPercentage = Math.round(percentage*100.0)/100.0;
        percentChange.add(0,roundPercentage);

        //Company Stats
        List<Double> prices = new ArrayList();
        for(int i=0;i<companyInfo.size();i++){
            prices.add(companyInfo.get(i).getClose());
        }
        List<StockByTimeCharts> companyStats = buildCompanyStatsForDaily(prices);

        formattedReturn.add(Collections.singletonList(companyInfo));
        formattedReturn.add(percentChange);
        formattedReturn.add(Collections.singletonList(companyStats));


        return formattedReturn;
    }
    //1Y
    public List<List<Object>> oneYearChart(DailyChartResponse result) throws ParseException {
        //List to store all of our timestamps/prices by the historical {time}
        List <historical> companyInfo = new ArrayList<historical>();
        List<Object> percentChange = new ArrayList<>();

        List<List<Object>> formattedReturn = new ArrayList<>();

        List<Map<String, Object>> results = result.getHistorical();
        //change the iterations for the time intervals  ex: i+5 for every +5 days
        int j =261 ;
        while(j!=0) {
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
            j--;
        }
        //Graph Data
        double percentage = 0;
        double oldPrice = companyInfo.get(0).getClose();
        double newPrice = companyInfo.get(companyInfo.size()-1).getClose();
        //percentage increase
        if(newPrice>=oldPrice){
            percentage = ((newPrice-oldPrice)/oldPrice)*100;
        }
        else{//percentage decrease
            percentage = ((newPrice-oldPrice)/oldPrice)*100;
        }
        double roundPercentage = Math.round(percentage*100.0)/100.0;
        percentChange.add(0,roundPercentage);

        //Company Stats
        List<Double> prices = new ArrayList();
        for(int i=0;i<companyInfo.size();i++){
            prices.add(companyInfo.get(i).getClose());
        }
        List<StockByTimeCharts> companyStats = buildCompanyStatsForDaily(prices);

        formattedReturn.add(Collections.singletonList(companyInfo));
        formattedReturn.add(percentChange);
        formattedReturn.add(Collections.singletonList(companyStats));


        return formattedReturn;
    }

    public List<Object> buildPercentChangeFor5min (List<Double> prices){
        List<Object> newList = new ArrayList<>();

        double percentage = 0;
        double oldPrice = prices.get(0);
        double newPrice = prices.get(1);
        if(newPrice>=oldPrice){
            percentage = ((newPrice-oldPrice)/oldPrice)*100;
        }
        else{
            percentage = ((newPrice-oldPrice)/oldPrice)*100;
        }
        double roundPercentage = Math.round(percentage*100.0)/100.0;

        newList.add(roundPercentage);

        return newList;
    }
    public List<Object> buildPercentChangeFor15min(List<Double> prices){
        List<Object> newList = new ArrayList<>();

        double percentage = 0;
        double oldPrice = prices.get(0);
        double newPrice = prices.get(1);
        if(newPrice>=oldPrice){
            percentage = ((newPrice-oldPrice)/oldPrice)*100;
        }
        else{
            percentage = ((newPrice-oldPrice)/oldPrice)*100;
        }
        double roundPercentage = Math.round(percentage*100.0)/100.0;

        newList.add(roundPercentage);

        return newList;
    }

    public List<StockByTimeCharts> buildCompanyStatsFor5min(List<Double> prices){
        List<StockByTimeCharts> newList = new ArrayList<>();
        StockByTimeCharts newModel = new StockByTimeCharts();
        //open
        newModel.setOpen(prices.get(0));
        //low
        newModel.setLow(Collections.min(prices));
        //high
        newModel.setHigh(Collections.max(prices));
        //close
        newModel.setClose(prices.get(prices.size()-1));

        newList.add(newModel);
        return newList;
    }

    public List<StockByTimeCharts> buildCompanyStatsFor15min(List<Double> prices){
        List<StockByTimeCharts> newList = new ArrayList<>();
        StockByTimeCharts newModel = new StockByTimeCharts();
        //open
        newModel.setOpen(prices.get(0));
        //low
        newModel.setLow(Collections.min(prices));
        //high
        newModel.setHigh(Collections.max(prices));
        //close CHANGE THIS WHENEVER MARKET IS OPEN BUT WE ARE PRESENTING DURING THE DAY
        newModel.setClose(prices.get(prices.size()-1));

        newList.add(newModel);
        return newList;
    }
    public List<StockByTimeCharts> buildCompanyStatsForDaily(List<Double> prices){
        List<StockByTimeCharts> newList = new ArrayList<>();
        StockByTimeCharts newModel = new StockByTimeCharts();
        //open
        newModel.setOpen(prices.get(0));
        //low
        newModel.setLow(Collections.min(prices));
        //high
        newModel.setHigh(Collections.max(prices));
        //close CHANGE THIS WHENEVER MARKET IS OPEN BUT WE ARE PRESENTING DURING THE DAY
        newModel.setClose(prices.get(prices.size()-1));

        newList.add(newModel);
        return newList;
    }
}


