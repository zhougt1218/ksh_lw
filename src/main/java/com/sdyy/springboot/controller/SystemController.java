package com.sdyy.springboot.controller;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.UnsupportedEncodingException;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.ProtocolException;
import java.net.URL;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;

@Controller
public class SystemController {

	@RequestMapping("/system")
	public String system(Model model){
		String httpurl = "http://lwzhuisu.gov.cn/home-web/webLogin/TFdEWkI=/MTIzcXdl";
		
		
		try {
			URL url = new URL(httpurl);
			HttpURLConnection conn = (HttpURLConnection) url.openConnection();
			conn.setDoOutput(true);
			conn.setRequestMethod("GET");
			BufferedReader in = new  BufferedReader( new InputStreamReader(conn.getInputStream(),"UTF-8"));
			String line;
			String res = "";
            while ((line = in.readLine()) != null) {
                res += line;
            }
            in.close();
 //         System.out.println(res);
            JSONObject   json = JSON.parseObject(res);
            String msg = json.getString("msg");
 //         System.out.println(msg);
          model.addAttribute("msg", msg);
		} catch (Exception e) {
			e.printStackTrace();
			
		} 
		
		
		
		return "system";
	}
}
