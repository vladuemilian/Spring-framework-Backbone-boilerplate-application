package app.config.handler;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.logout.LogoutSuccessHandler;
import org.springframework.stereotype.Component;

@Component
public class LogoutHandler implements LogoutSuccessHandler{

	@Override
	public void onLogoutSuccess(HttpServletRequest arg0,
			HttpServletResponse response, Authentication arg2) throws IOException,
			ServletException {
		// TODO Auto-generated method stub
		response.setContentType("application/json");
		response.getWriter().write("{\"status\": false}");
		
	}



}
