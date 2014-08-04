package market.domain.clinic;

import market.domain.user.AccountInterface;


public class Clinic implements AccountInterface{

	private String cabinet;

	private String contact;

	private String address; //maybe will be changed in future due to google maps requirement

	private String phone;

	private String website;

	public void setCabinet(String cabinet)
	{
		this.cabinet=cabinet;
	}

	public void setContact(String contact)
	{
		this.contact=contact;
	}

	public void setAddress(String address)
	{
		this.address=address;
	}

	public void setPhone(String phone)
	{
		this.phone=phone;
	}

	public void setWebsite(String website)
	{
		this.website=website;
	}

	public String getCabinet()
	{
		return cabinet;
	}

	public String getContact()
	{
		return contact;
	}

	public String getAddress()
	{
		return address;
	}

	public String getPhone()
	{
		return phone;
	}

	public String getWebsite()
	{
		return website;
	}
}
