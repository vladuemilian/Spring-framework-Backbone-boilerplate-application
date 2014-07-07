package market.models.services.user;

import market.models.services.ServiceException;
import market.models.user.AccountInterface;
import market.models.user.User;
import market.models.user.UserRepositoryInterface;
import market.user.models.validator.UserValidatorInterface;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;
import org.springframework.validation.DataBinder;
import org.springframework.validation.Validator;

@Component
public class UserService implements UserServiceInterface{

	@Autowired 
	private UserRepositoryInterface userRepo;
	
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