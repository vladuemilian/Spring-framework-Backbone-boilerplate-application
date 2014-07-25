package market.models.services.cqs.user.command;

import market.models.services.cqs.IQueryHandler;
import market.models.services.cqs.user.query.CreateQuery;
import market.models.user.User;
import market.models.user.UserRepositoryInterface;

import org.springframework.beans.factory.annotation.Autowired;

public class CreateCommand implements IQueryHandler<CreateQuery, User>{

	@Autowired
	private UserRepositoryInterface userRepo;
	
	@Override
	public User handle(CreateQuery query) {
		// TODO Auto-generated method stub
		
		return null;
	}

}
