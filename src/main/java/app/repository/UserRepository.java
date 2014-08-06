package app.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import app.domain.user.User;
import app.domain.user.UserInterface;

public interface UserRepository extends MongoRepository<User, String>
{
	public UserInterface findByUsername(String username);
}
