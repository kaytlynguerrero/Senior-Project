package com.steds.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.steds.model.Ticker;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


@RestController
public class TickerController {

    private final String apikey = "be141489434b9d5ebd38d0aa148ffc51";
    private final String uri = "https://financialmodelingprep.com";


   // @RequestMapping(value= url + "/api/v3/profile/AAPL?apikey=" + apikey, method = RequestMethod.GET)
    //@ResponseStatus(value = HttpStatus.OK)

  /*  public String getJSONData(){
        String path = url+"/api/v3/profile/AAPL?apikey="+apikey;
        RestTemplate restTemplate = new RestTemplate();
        String result = restTemplate.getForObject(path, String.class);
        System.out.println(result);
        return result;
    }*/

    @RequestMapping(value="/search_ticker/{input}", method= RequestMethod.GET)
    @ResponseStatus(value = HttpStatus.OK)
    public Ticker returnCompanyProfile(@PathVariable String input) {
        String ticker = input;
        String path = uri+"/api/v3/profile/"+ticker+"?apikey="+apikey;

        RestTemplate restTemplate = new RestTemplate();
        List<HashMap> result = restTemplate.getForObject(path, List.class);

        Map returnObject = result.get(0);

        Ticker companyInfo = new Ticker();
        companyInfo.setSymbol((String) returnObject.get("symbol"));
        companyInfo.setPrice((Double) returnObject.get("price"));
        companyInfo.setIndustry((String) returnObject.get("industry"));
        companyInfo.setWebsite((String) returnObject.get("website"));
        companyInfo.setDescription((String) returnObject.get("description"));
        companyInfo.setSector((String) returnObject.get("sector"));
        companyInfo.setCompanyName((String) returnObject.get("companyName"));
        companyInfo.setCurrency((String) returnObject.get("currency"));
        companyInfo.setStockExchange((String) returnObject.get("exchange"));
        companyInfo.setExchangeShortName((String) returnObject.get("exchangeShortName"));

        return companyInfo;
    }
}
