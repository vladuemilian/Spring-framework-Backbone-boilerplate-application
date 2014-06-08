package market.models.user;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepositoryInterface extends MongoRepository<User, String>
{
	public UserInterface findByUsername(String username);
}
