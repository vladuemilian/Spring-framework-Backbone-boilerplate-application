package market.models.services.user;

import market.models.services.ServiceException;
import market.models.user.AccountInterface;
import market.models.user.User;

public interface UserServiceInterface {
	
	public User create(String email, String password) throws ServiceException;
	
	public User create(String email, String password, AccountInterface account) throws ServiceException;
}
