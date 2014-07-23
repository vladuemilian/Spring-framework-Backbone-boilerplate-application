package market.services;

import java.util.ArrayList;

import market.models.user.User;
import market.models.user.UserAuthority;

import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.authentication.dao.AbstractUserDetailsAuthenticationProvider;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;


@Component
public class AuthService extends AbstractUserDetailsAuthenticationProvider
{

	@Override
	protected void additionalAuthenticationChecks(UserDetails arg0,
			UsernamePasswordAuthenticationToken arg1)
			throws AuthenticationException {
		// TODO Auto-generated method stub
		
	}

	@Override
	protected UserDetails retrieveUser(String username,
			UsernamePasswordAuthenticationToken authentication)
			throws AuthenticationException {
		// TODO Auto-generated method stub
	
		String password = (String) authentication.getCredentials();
		
		GrantedAuthority role = new UserAuthority("ROLE_USER");
		ArrayList<GrantedAuthority> roles = new ArrayList<GrantedAuthority>();
		roles.add(role);
		
		
		if(password.equals("asdf"))
		{
			System.out.println("bad credintals error");
			throw new BadCredentialsException("auth error");
		}
		
		//User user = new User("asdf", "asdf", roles);
	
		User user = new User();
		user.setId("1011010101");
		user.setUsername("sorin@pc.com");
		user.setPassword(password);
		
		return user;
		
		/*
		if(true)
		{
			throw new BadCredentialsException("auth error");
		}
		
		return null;
		*/
	}

}
