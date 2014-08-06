package app.domain.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;
import org.springframework.validation.DataBinder;
import org.springframework.validation.Validator;

import app.repository.UserRepository;
import app.service.ServiceException;
import app.validator.UserValidatorInterface;
import app.validator.ValidationException;

@Component
public class UserService{

	@Autowired 
	private UserRepository userRepo;
	
	@Autowired
	@Qualifier("UserValidator")
	private UserValidatorInterface validator;

	//
	public UserService()
	{
		
	}

	/**
	 * 
	 * 
	 * 
	 */
	public User create(String username, String password, AccountInterface account) throws ServiceException
	{
		throw new ServiceException();
	}
	
	/**
	 * 
	 * 
	 * 
	 */
	public User create(String username, String password) throws ValidationException
	{
		User user = new User();
		user.setUsername(username);
		user.setPassword(password);
	
		DataBinder dataBinder = new DataBinder(user);
		dataBinder.addValidators( (Validator) validator);
		dataBinder.validate();
		if(dataBinder.getBindingResult().hasErrors())
		{
			throw new ValidationException(dataBinder);
		}
		
		System.out.println( user.toString() );
		userRepo.save(user);
		
		return user;
	}
}