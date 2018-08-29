package com.sdyy.springboot.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class DataSourceController {

	@RequestMapping("/dataSource2")
	public String dataSource(){
		return "dataSource2";
	}
}
