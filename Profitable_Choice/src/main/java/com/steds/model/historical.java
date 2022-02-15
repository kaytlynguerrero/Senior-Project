package com.steds.model;

import com.fasterxml.jackson.annotation.JsonProperty;

public class historical {
    @JsonProperty("date")
    private String date;
    @JsonProperty("close")
    private Double close;

    public historical() {

    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public Double getClose() {
        return close;
    }

    public void setClose(Double close) {
        this.close = close;
    }
}
