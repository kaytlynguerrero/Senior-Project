package com.steds.dao;

import com.steds.model.StockByTimeCharts;

import java.util.LinkedHashMap;
import java.util.List;

public interface stockChartWebAppDao {

    //Get the data for 5min chart starting from open time
    public LinkedHashMap<String, Double> getGraphPointsBy5minForDaily (List<StockByTimeCharts> companyInfo);
    //data for our weekly chart
    public LinkedHashMap<String, Double> getGraphPointsBy15minForDaily(List<StockByTimeCharts> companyInfo);
    //data for our monthly chart == 23 BUSINESS DAYS
    public List<List<Object>> getGraphPointsByDailyBasis(List<List<Object>> companyInfo);


}
