package market.services.clinic.command;

import market.domain.user.User;
import market.repository.ClinicRepository;
import market.services.ICommand;
import market.services.clinic.command.parameter.CreateClinicParameter;

import org.springframework.beans.factory.annotation.Autowired;

public class CreateClinic implements ICommand<CreateClinicParameter, User>{
	
	@Autowired
	private ClinicRepository clinicRepository;

	@Override
	public User handle(CreateClinicParameter param) {
		
		System.out.println("clinic should be created at this moment!");
		
		return null;
	}
}
