package app.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import app.domain.user.User;
import app.service.EventCommandDecoratee;
import app.service.ICommand;
import app.service.ValidatorCommandDecoratee;
import app.service.clinic.command.CreateClinic;
import app.service.clinic.command.parameter.CreateClinicParameter;
import app.validator.UserValidator;

@Configuration
public class Beans {

	@Bean(name="CreateClinic")
	public ICommand<CreateClinicParameter, User> create(){

		ICommand<CreateClinicParameter, User> createClinicCommand = 
		new EventCommandDecoratee<CreateClinicParameter, User>(
			new ValidatorCommandDecoratee<CreateClinicParameter, User>(new CreateClinic(), new UserValidator()),
		CreateClinic.class);
		
		return createClinicCommand;
	}
}
