package market.config;

import market.services.AuthService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
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
	private LoginSuccessHandler loginSuccessHandler;
	
	@Autowired
	private LoginFailedHandler loginFailedHandler;
	
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http
		.csrf().disable()
		.authorizeRequests()
			.antMatchers("/js/**").permitAll()
			.antMatchers("/templates/**").permitAll()
			.antMatchers("/vendor/**").permitAll()
			.antMatchers("/api/v1.0/public/**").permitAll()
			.anyRequest().authenticated()
			.and()
		.formLogin()
			.loginPage("/user/login")
			.successHandler(loginSuccessHandler)
			.failureHandler(loginFailedHandler)
			.permitAll();
		
	}
	
	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception
	{
		auth.authenticationProvider(authService);
		
	}
	

}
