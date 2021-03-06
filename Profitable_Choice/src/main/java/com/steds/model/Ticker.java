package com.steds.model;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Ticker {
    @JsonProperty("name")
    private String name;
    @JsonProperty("symbol")
    private String symbol;

    public Ticker() {

    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSymbol() {
        return symbol;
    }

    public void setSymbol(String symbol) {
        this.symbol = symbol;
    }
}
