package market.controllers.api.v1dot0.user;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import market.models.services.user.UserService;
import market.models.services.user.ValidationException;
import market.models.user.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@ResponseBody
@RequestMapping("/api/v1.0/")
public class UserController {
	
	@Autowired
	private UserService userService;
	
	@RequestMapping(value="/user/check", method=RequestMethod.GET)
	public AuthStatus UserCheck(HttpServletRequest request, HttpServletResponse response)
	{
		AuthStatus authStatus = new AuthStatus();
		
		Authentication auth = SecurityContextHolder.getContext().getAuthentication(); 
		if (!(auth instanceof AnonymousAuthenticationToken)) { 
			authStatus.status=true;
		}
		
		return authStatus;
	}

	static class AuthStatus
	{
		public boolean status = false;
	}
	
	
	@RequestMapping(value="/user", method=RequestMethod.POST)
	public User postUser(
			HttpServletRequest request, HttpServletResponse response,
			@RequestParam("email") String email,
			@RequestParam("password") String password
			) throws ValidationException
	{
	
		User user = userService.create(email, password);
		
		return user;
	}	
}
