package com.steds.dao;

import com.steds.model.StockByTimeCharts;
import com.steds.model.historical;

import java.util.List;

public interface stockChartWebAppDao {

    //Get the data for 5min chart starting from open time
    public List<historical> getGraphPointsBy5minForDaily (List<StockByTimeCharts> companyInfo);
    //data for our weekly chart
    public List<historical>  getGraphPointsBy15minForDaily(List<StockByTimeCharts> companyInfo);
    //data for our monthly chart == 23 BUSINESS DAYS
    public List<List<Object>> getGraphPointsByDailyBasis(List<List<Object>> companyInfo);


}
