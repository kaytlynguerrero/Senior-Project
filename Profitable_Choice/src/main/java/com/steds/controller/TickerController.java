package com.steds.controller;

import com.steds.dao.UserWebAppDao;
import com.steds.dao.stockChartWebAppDao;
import com.steds.model.*;
import com.steds.service.ServiceLayer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;


@RestController
@CrossOrigin
public class TickerController {

    //Kaytlyn api key bdd24a064c278e87dce6eff46915235b
    //Sabur Api Key d0896058131a955d9158b4672cb56fac
    //Stedwards email key be141489434b9d5ebd38d0aa148ffc51
    //api key
    private final String apikey = "d0896058131a955d9158b4672cb56fac";
    //api url
    private final String uri = "https://financialmodelingprep.com";
    //api endpoint for historical graphs
    private final String historicalPath = "/api/v3/historical-chart/";
    //Date formatter
    SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
    SimpleDateFormat sdf2 = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss a");



    //autowire our interface for user interface/login/registration
    @Autowired
    protected UserWebAppDao dao;
    //Autowire the StockChartWebAppDaoImpl for our graphs
    @Autowired
    protected stockChartWebAppDao graphDao;
    @Autowired
    ServiceLayer serivce;

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


    //Get StockByTimeCharts Model Class --> Graph for the FE
    @RequestMapping(value="/stock-historical-price/{time}/{ticker}", method= RequestMethod.GET)
    @ResponseStatus(value = HttpStatus.OK)
    public List<List<Object>> returnStockByTimeWithPriceForChart (@PathVariable("ticker") String input, @PathVariable("time") String time) throws ParseException {
        String ticker = input;
        String timestamp = time;
        String path = uri+"/api/v3/historical-chart/" + timestamp+ "/"+ ticker + "?apikey="+apikey;

        List<historical> graphXandYPoints = new ArrayList<>();
        List<Object> percentChange = new ArrayList<>();
        //formatted return
        List<List<Object>> newStats = new ArrayList<>();

        RestTemplate restTemplate = new RestTemplate();
        List<HashMap> result = restTemplate.getForObject(path, List.class);

        //List to store our timestamps/prices by the historical {time}
        List<StockByTimeCharts> companyInfo = new ArrayList<StockByTimeCharts>();

        //FOR 5MIN CHART AKA DAILY add the if statement
        if(timestamp.equals("5min")){
            for(int i=0; i< result.size();i++){
                //iterate through our list of results
                Map returnTickerHistorical = result.get(i);

                // create new StockByTimeCharts instantiation
                StockByTimeCharts chartInfo = new StockByTimeCharts();
                //date formatting so we can parse the dates later and get our graph endpoints
                String sDate = (String) returnTickerHistorical.get("date"); //retrieve orig String value of the date
                Date formattedDate = sdf.parse(sDate);

                //Adjust formattedDate for CST by subtracting 1 from the hour since it comes in EST
                int  centralHour = formattedDate.getHours()-1;
                formattedDate.setHours(centralHour);

                //set StockByTimeCharts model class attributes
                chartInfo.setDate((Date) formattedDate);
                chartInfo.setOpen((double) returnTickerHistorical.get("open"));
                chartInfo.setLow((double) returnTickerHistorical.get("low"));
                chartInfo.setHigh((double) returnTickerHistorical.get("high"));
                chartInfo.setClose((double) returnTickerHistorical.get("close"));
                chartInfo.setVolume((Integer) returnTickerHistorical.get("volume"));

                //add the rest of the StockByTimeChartsModel in here
                companyInfo.add(chartInfo);
            }
            //our graph endpoints are in here
            graphXandYPoints = graphDao.getGraphPointsBy5minForDaily(companyInfo);

            //list of open and old price
            List<Double> percentChangeList = new ArrayList();
            percentChangeList.add(graphXandYPoints.get(0).getClose());
            percentChangeList.add(graphXandYPoints.get(graphXandYPoints.size()-1).getClose());
            //List of percent Change
            percentChange = serivce.buildPercentChangeFor5min(percentChangeList);

            //list of prices for StockByTimeChart model with company stats
            List<Double> prices = new ArrayList();
            for(int i=0;i<graphXandYPoints.size();i++){
                prices.add(graphXandYPoints.get(i).getClose());
            }
            //List of company open, low, high, close prices
            List<StockByTimeCharts> companyStats = serivce.buildCompanyStatsFor5min(prices);

            newStats.add(Collections.singletonList(graphXandYPoints));
            newStats.add((List<Object>) percentChange);
            newStats.add(Collections.singletonList(companyStats));
        }

        if(timestamp.equals("15min")){
            for(int i=0; i< result.size();i++){
                //iterate through our list of results
                Map returnTickerHistorical = result.get(i);

                // create new StockByTimeCharts instantiation
                StockByTimeCharts chartInfo = new StockByTimeCharts();
                //date formatting so we can parse the dates later and get our graph endpoints
                String sDate = (String) returnTickerHistorical.get("date"); //retrieve orig String value of the date
                Date formattedDate = sdf.parse(sDate);

                //Adjust formattedDate for CST by subtracting 1 from the hour since it comes in EST
                int  centralHour = formattedDate.getHours()-1;
                formattedDate.setHours(centralHour);

                chartInfo.setDate((Date) formattedDate);
                chartInfo.setOpen((double) returnTickerHistorical.get("open"));
                chartInfo.setLow((double) returnTickerHistorical.get("low"));
                chartInfo.setHigh((double) returnTickerHistorical.get("high"));
                chartInfo.setClose((double) returnTickerHistorical.get("close"));
                chartInfo.setVolume((Integer) returnTickerHistorical.get("volume"));

                //add the rest of the StockByTimeChartsModel in here
                companyInfo.add(chartInfo);
            }
            //our graph endpoints are in here
            graphXandYPoints = graphDao.getGraphPointsBy15minForDaily(companyInfo);
            //list of open and old price
            List<Double> percentChangeList = new ArrayList();
            percentChangeList.add(graphXandYPoints.get(0).getClose());
            percentChangeList.add(graphXandYPoints.get(graphXandYPoints.size()-1).getClose());
            //builds percentChange into this list
            percentChange = serivce.buildPercentChangeFor15min(percentChangeList);

            //list of prices for StockByTimeChart model with company stats
            List<Double> prices = new ArrayList();
            for(int i=0;i<graphXandYPoints.size();i++){
                prices.add(graphXandYPoints.get(i).getClose());
            }
            //List of company open, low, high, close prices
            List<StockByTimeCharts> companyStats = serivce.buildCompanyStatsFor15min(prices);

            newStats.add(Collections.singletonList(graphXandYPoints));
            newStats.add((List<Object>) percentChange);
            newStats.add(Collections.singletonList(companyStats));
        }

        return newStats;
    }
    //Get StockByTimeCharts Model Class --> Graph for the FE
    @RequestMapping(value="/stock-historical-price/{ticker}", method= RequestMethod.GET)
    @ResponseStatus(value = HttpStatus.OK)
    public List<List<Object>> StockByTimeWithPriceForDailyPrices (@PathVariable("ticker") String input) throws ParseException {
        String ticker = input;
        String path = uri+"/api/v3/historical-price-full/"+ ticker + "?serietype=line" + "&apikey=" + apikey;

        RestTemplate restTemplate = new RestTemplate();
        DailyChartResponse result = restTemplate.getForObject(path, DailyChartResponse.class);

        //Service layer shit?
        List<List<Object>> graphXandYPoints = serivce.buildGraphPointsForDailyPrices(result);

        return graphXandYPoints;
    }

    @PostMapping("/register")
    public ResponseEntity<User> registerUser(@RequestBody UserForm form) {
        ResponseEntity<User> response = null;
        User user = dao.registerUser(form);
        int userID = user.getUserId();
       // try{
        User debugUser = dao.findUser(userID);
        if(dao.findUser(userID).equals(user)) {
            System.out.println("user added in db and checked for");
            response = new ResponseEntity<User>(user,HttpStatus.OK);
        }
    //    }
      /*  catch(Exception e){
           // Logger.error("Invalid Input:",e.getMessage());
            response = new ResponseEntity<User>(user,HttpStatus.BAD_REQUEST);
        }*/
        return response;
    }


  /*  @RequestMapping(value="/log-in/{username}/{password}", method= RequestMethod.GET)
    @ResponseStatus(value = HttpStatus.OK)
    public ResponseEntity<User> loginUser (@PathVariable("username") String username, @PathVariable("password") String password) {
        ResponseEntity<User> response = null;
        User test = new User();
        String checkUserName = username;
        String checkPassword = password;
     //   test.equals(dao.findUserByName(checkUserName));
  //      User user = dao.findUserByName(checkUserName);
    //    System.out.println(user);
        User loggingUser = dao.findUserByPassword(password);
        response = new ResponseEntity<User>(loggingUser,HttpStatus.OK);
  /*      if(user.equals(loggingUser)){
            System.out.println("user was found and received");
            response = new ResponseEntity<User>(loggingUser,HttpStatus.OK);
        }
    return response;
    }*/
}
