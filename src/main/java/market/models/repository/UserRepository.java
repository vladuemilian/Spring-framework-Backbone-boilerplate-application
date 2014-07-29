package market.models.repository;

import market.models.domain.user.User;
import market.models.domain.user.UserInterface;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<User, String>
{
	public UserInterface findByUsername(String username);
}
