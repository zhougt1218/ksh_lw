package com.sdyy.springboot.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class DataChangeController {

	@RequestMapping("/dataChange")
	public String dataChange(){
		return "dataChange";
	}
}
