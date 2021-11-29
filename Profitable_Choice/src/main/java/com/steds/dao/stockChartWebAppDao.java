package com.steds.dao;

import com.steds.model.StockByTimeCharts;

import java.util.LinkedHashMap;
import java.util.List;

public interface stockChartWebAppDao {

    //Get the data for 5min chart starting from open time
    public LinkedHashMap<String, Double> getGraphPointsBy5minForDaily (List<StockByTimeCharts> companyInfo);

}
