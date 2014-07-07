package market.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

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
		return "index";
	}
	
}
