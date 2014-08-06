package app.controllers.api.user;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import app.domain.user.User;
import app.domain.user.UserService;
import app.validator.ValidationException;

@Controller
@ResponseBody
@RequestMapping("/api/v1.0/")
public class UserController {
	
	@Autowired
	private UserService userService;

	/**
	 * @brief check if the user is authenticated - return a json
	 * with true/false status 
	 * 
	 * @param request
	 * @param response
	 * @return
	 */
	@RequestMapping(value="/user/auth/check", method=RequestMethod.GET)
	public AuthStatus UserCheck(HttpServletRequest request, HttpServletResponse response)
	{
		AuthStatus authStatus = new AuthStatus();
		
		Authentication auth = SecurityContextHolder.getContext().getAuthentication(); 
		if (!(auth instanceof AnonymousAuthenticationToken)) { 
			authStatus.status=true;
		}
		return authStatus;
	}
	

	@RequestMapping(value="/user/auth", method=RequestMethod.GET)
	public User getAuthenticatedUser()
	{
		User user = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
	
		return user;
	}

	
	/**
	 * @brief create a new user 
	 * 
	 * 
	 * @param request
	 * @param response
	 * @param email
	 * @param password
	 * @return
	 * @throws ValidationException
	 */
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
	
	
	
	static class AuthStatus
	{
		public boolean status = false;
	}
	
}
