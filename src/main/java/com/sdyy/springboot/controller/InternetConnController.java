package com.sdyy.springboot.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class InternetConnController {

	@RequestMapping("/internetConn")
	public String internetConn(){
		return "internetConn";
	}
}
