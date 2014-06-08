package market.controllers;

import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class HomeController
{


	@RequestMapping(value="/", method=RequestMethod.GET)
	public String Index()
	{
		return "index";
	}
	
	@RequestMapping(value="/a/**", method=RequestMethod.GET)
	public String Pages()
	{
		return "index";
	}
	
	@RequestMapping(value="/user/login", method=RequestMethod.GET)
	public String Login()
	{
		return "index";
	}
	

}
