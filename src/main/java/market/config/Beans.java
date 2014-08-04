package market.config;

import market.domain.user.User;
import market.services.EventCommandDecoratee;
import market.services.ICommand;
import market.services.ValidatorCommandDecoratee;
import market.services.clinic.command.CreateClinic;
import market.services.clinic.command.parameter.CreateClinicParameter;
import market.validator.UserValidator;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class Beans {

	@Bean(name="CreateClinic")
	public ICommand<CreateClinicParameter, User> create(){

		/*
		ICommand<CreateClinicParameter> createClinicCommand = 
				new ValidatorCommandDecoratee<CreateClinicParameter>(
					new EventCommandDecoratee<CreateClinicParameter>(
						new CreateClinicCommand(), CreateClinicCommand.class
					),
					new UserValidator()
		);	
		*/
		
		ICommand<CreateClinicParameter, User> createClinicCommand = 
		new EventCommandDecoratee<CreateClinicParameter, User>(
			new ValidatorCommandDecoratee<CreateClinicParameter, User>(new CreateClinic(), new UserValidator()),
		CreateClinic.class);
		
		return createClinicCommand;
	}
}
