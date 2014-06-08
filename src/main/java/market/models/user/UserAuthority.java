package market.models.user;

import org.springframework.security.core.GrantedAuthority;

public class UserAuthority implements GrantedAuthority{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	private String authority;
	
	public UserAuthority(String authority)
	{
		this.authority = authority;
	}
	
	/**
	 * 
	 */
	public String getAuthority()
	{
		return authority;
	}
}
