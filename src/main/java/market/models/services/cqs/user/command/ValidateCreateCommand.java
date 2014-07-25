package market.models.services.cqs.user.command;

import market.user.models.validator.UserValidator;

import org.springframework.beans.factory.annotation.Autowired;

public class ValidateCreateCommand {

	@Autowired
	private CreateCommand createCommand;
	

	@Autowired
	private UserValidator userValidator;
	
}
