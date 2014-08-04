package market.repository;

import market.domain.user.User;
import market.domain.user.UserInterface;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<User, String>
{
	public UserInterface findByUsername(String username);
}
