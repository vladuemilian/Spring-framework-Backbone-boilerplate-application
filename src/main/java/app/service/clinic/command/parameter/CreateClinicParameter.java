package app.service.clinic.command.parameter;

public class CreateClinicParameter{

	private String email;
	private String password;
	private String passwordConfirmation;
	private String cabinetName;
	private String address;
	private String phone;
	private String website;
	
	
	public CreateClinicParameter(String email, String password,
			String passwordConfirmation, String cabinetName, String address,
			String phone) {
		super();
		this.email = email;
		this.password = password;
		this.passwordConfirmation = passwordConfirmation;
		this.cabinetName = cabinetName;
		this.address = address;
		this.phone = phone;
	}
	
	public CreateClinicParameter(){
	}
	
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getPasswordConfirmation() {
		return passwordConfirmation;
	}
	public void setPasswordConfirmation(String passwordConfirmation) {
		this.passwordConfirmation = passwordConfirmation;
	}
	public String getCabinetName() {
		return cabinetName;
	}
	public void setCabinetName(String cabinetName) {
		this.cabinetName = cabinetName;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getWebsite() {
		return website;
	}
	public void setWebsite(String website) {
		this.website = website;
	}
}
