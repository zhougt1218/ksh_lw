package com.sdyy.springboot.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class VisualManageController {

	@RequestMapping("/visualManage")
	public String visualManage(){
		return "visualManage";
	}
}
