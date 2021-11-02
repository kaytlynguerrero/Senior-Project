package com.steds.controller;

import com.steds.dao.UserWebAppDao;
import com.steds.model.Ticker;
import com.steds.model.User;
import com.steds.model.UserForm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.HashMap;
import java.util.List;
import java.util.Map;


@RestController
@CrossOrigin
public class TickerController {

    private final String apikey = "be141489434b9d5ebd38d0aa148ffc51";
    private final String uri = "https://financialmodelingprep.com";

    @Autowired
    protected UserWebAppDao dao;

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

    @PostMapping("/register")
    public ResponseEntity<User> registerUser(@RequestBody UserForm form) {
        ResponseEntity<User> response = null;
        User user = dao.registerUser(form);
        int userID = user.getUserId();
        try{
            if(dao.findUser(userID) != user) {
                throw new Exception("Employee Id is not valid");
            }
            response = new ResponseEntity<User>(user,HttpStatus.OK);
        }
        catch(Exception e){
           // Logger.error("Invalid Input:",e.getMessage());
            response = new ResponseEntity<User>(user,HttpStatus.BAD_REQUEST);
        }
        return response;
    }
}
