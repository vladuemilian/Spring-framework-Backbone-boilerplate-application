package market.models.domain.user;

import java.util.Collection;

import org.springframework.data.annotation.Id;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

public class User implements UserInterface, UserDetails
{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	private String id;

	private String username;
	
	private String password;
	
	private AccountInterface account;

	public User(String username, String password)
	{
		this.username = username;
		this.password = password;
	}
	
	public User(){
	}

	public Collection<? extends GrantedAuthority> getAuthorities()
	{
		// TODO Auto-generated method stub
		return null;
	}

	public String getPassword() {
		return this.password;
	}

	public boolean isAccountNonExpired() {
		return true;
	}

	public boolean isAccountNonLocked() {
		return true;
	}

	public boolean isCredentialsNonExpired() {
		return true;
	}

	public boolean isEnabled() {
		return true;
	}

	public String getUsername() {
		return this.username;
	}
	
	public void setUsername(String username)
	{
		this.username = username;
	}

	public AccountInterface getAccount()
	{
		return account;
	}

	public void setAccount(AccountInterface ac)
	{
		account=ac;
	}
	
	
	public void setPassword(String password)
	{
		this.password=password;
	}
	
	public String getId()
	{
		return this.id;
	}
	
	//this method will be deleted - created only for testing purposes
	public void setId(String id){
		this.id = id;
	}
}
