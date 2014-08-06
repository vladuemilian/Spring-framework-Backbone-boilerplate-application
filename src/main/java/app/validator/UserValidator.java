package app.validator;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;

import app.domain.user.User;
import app.repository.UserRepository;

@Component("UserValidator")
public class UserValidator implements Validator, UserValidatorInterface {

	@Autowired
	UserRepository userRepo;
	
	@Override
	public boolean supports(Class<?> obj) {
		return true;
	}

	@Override
	public void validate(Object target, Errors error) {
		User usr = (User) target;
		

		if( userRepo.findByUsername(usr.getUsername()) != null )
		{
			error.reject("user_already_exists");
		}
		
		if(usr.getUsername().equals("asdf"))
		{
			error.reject("id_error");
		}
	}

}
