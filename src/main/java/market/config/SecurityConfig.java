package market.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.annotation.web.servlet.configuration.EnableWebMvcSecurity;

@Configuration
@EnableWebMvcSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter
{

	@Autowired
	private AuthService authService;
	
	@Autowired
	private LoginResponseHandler loginResponseHandler;
	
	@Autowired
	private LogoutHandler logoutHandler;
	
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http
		.csrf().disable()
		.authorizeRequests()
			.antMatchers("/js/**").permitAll()
			.antMatchers("/templates/**").permitAll()
			.antMatchers("/vendor/**").permitAll()
			//no-authentication required
			.antMatchers(HttpMethod.GET, "/api/v1.0/user/auth/check").permitAll()
			.antMatchers(HttpMethod.POST, "/api/v1.0/user").permitAll()
			.antMatchers(HttpMethod.POST, "/api/v1.0/user/**/clinic").permitAll()
			.antMatchers("/").permitAll()
			
			//authentication required
			//.anyRequest().authenticated()
			.antMatchers("/api/**").authenticated()
			.and()
		.logout().logoutSuccessHandler(logoutHandler).and()
		.formLogin()
			.loginPage("/user/login")
			.successHandler(loginResponseHandler)
			.failureHandler(loginResponseHandler)
			.permitAll();
		
	}
	
	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception
	{
		auth.authenticationProvider(authService);
		
	}
	

}
