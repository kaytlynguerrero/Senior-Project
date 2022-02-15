package com.steds.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.util.List;
import java.util.Map;

@JsonIgnoreProperties(ignoreUnknown = true)
public class DailyChartResponse {
    private String symbol;
    private List<Map<String,Object>> historical;

    public String getSymbol() {
        return symbol;
    }

    public void setSymbol(String symbol) {
        this.symbol = symbol;
    }

    public List<Map<String, Object>> getHistorical() {
        return historical;
    }

    public void setHistorical(List<Map<String, Object>> historical) {
        this.historical = historical;
    }

    @Override
    public String toString() {
        return "DailyChartResponse{" +
                "symbol='" + symbol + '\'' +
                ", PriceAndDates=" + historical +
                '}';
    }
}
