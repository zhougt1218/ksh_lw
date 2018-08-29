package com.sdyy.springboot;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.UnsupportedEncodingException;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.ProtocolException;
import java.net.URL;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;

@RunWith(SpringRunner.class)
@SpringBootTest
public class LwkshApplicationTests {

	@Test
	public void contextLoads() {
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
          System.out.println(res);
          JSONObject   json = JSON.parseObject(res);
          String msg = json.getString("msg");
          System.out.println(msg);
		} catch (MalformedURLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (ProtocolException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (UnsupportedEncodingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

}
