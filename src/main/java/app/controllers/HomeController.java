package app.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController
{

	@RequestMapping(value=
	{
		"/",
		"/user/login",
		"/en/**",
		"/ro/**",
		"/test**",
		"/clinics/**",
		"/contact/**"
	})
	public String Pages()
	{
		System.out.println("page executed!");
		return "index";
	}
	
}
