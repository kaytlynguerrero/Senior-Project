package com.steds.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.Objects;

public class Ticker {
    @JsonProperty("symbol")
    private String symbol;
    @JsonProperty("price")
    private double price;
    @JsonProperty("industry")
    private String industry;
    @JsonProperty("website")
    private String website;
    @JsonProperty("description")
    private String description;
    @JsonProperty("sector")
    private String sector;
    @JsonProperty("companyName")
    private String companyName;
    @JsonProperty("currency")
    private String currency;
    @JsonProperty("exchange")
    private String stockExchange;
    @JsonProperty("exchangeShortName")
    private String exchangeShortName;

    public Ticker(String symbol, double price, String industry, String website, String description, String sector, String companyName, String currency, String stockExchange, String exchangeShortName) {
        this.symbol = symbol;
        this.price = price;
        this.industry = industry;
        this.website = website;
        this.description = description;
        this.sector = sector;
        this.companyName = companyName;
        this.currency = currency;
        this.stockExchange = stockExchange;
        this.exchangeShortName = exchangeShortName;
    }
    public Ticker(){

    }

    public String getSymbol() {
        return symbol;
    }

    public void setSymbol(String symbol) {
        this.symbol = symbol;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getIndustry() {
        return industry;
    }

    public void setIndustry(String industry) {
        this.industry = industry;
    }

    public String getWebsite() {
        return website;
    }

    public void setWebsite(String website) {
        this.website = website;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getSector() {
        return sector;
    }

    public void setSector(String sector) {
        this.sector = sector;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public String getCurrency() {
        return currency;
    }

    public void setCurrency(String currency) {
        this.currency = currency;
    }

    public String getStockExchange() {
        return stockExchange;
    }

    public void setStockExchange(String stockExchange) {
        this.stockExchange = stockExchange;
    }

    public String getExchangeShortName() {
        return exchangeShortName;
    }

    public void setExchangeShortName(String exchangeShortName) {
        this.exchangeShortName = exchangeShortName;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Ticker ticker = (Ticker) o;
        return price == ticker.price && Objects.equals(symbol, ticker.symbol) && Objects.equals(industry, ticker.industry) && Objects.equals(website, ticker.website) && Objects.equals(description, ticker.description) && Objects.equals(sector, ticker.sector) && Objects.equals(companyName, ticker.companyName) && Objects.equals(currency, ticker.currency) && Objects.equals(stockExchange, ticker.stockExchange) && Objects.equals(exchangeShortName, ticker.exchangeShortName);
    }

    @Override
    public int hashCode() {
        return Objects.hash(symbol, price, industry, website, description, sector, companyName, currency, stockExchange, exchangeShortName);
    }

    @Override
    public String toString() {
        return "Ticker{" +
                "symbol='" + symbol + '\'' +
                ", price=" + price +
                ", industry='" + industry + '\'' +
                ", website='" + website + '\'' +
                ", description='" + description + '\'' +
                ", sector='" + sector + '\'' +
                ", companyName='" + companyName + '\'' +
                ", currency='" + currency + '\'' +
                ", stockExchange='" + stockExchange + '\'' +
                ", exchangeShortName='" + exchangeShortName + '\'' +
                '}';
    }
}
