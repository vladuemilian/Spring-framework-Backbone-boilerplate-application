package app.service.clinic.command;

import org.springframework.beans.factory.annotation.Autowired;

import app.domain.clinic.Clinic;
import app.domain.user.User;
import app.repository.ClinicRepository;
import app.service.ICommand;
import app.service.clinic.command.parameter.CreateClinicParameter;

public class CreateClinic implements ICommand<CreateClinicParameter, User>{
	
	@Autowired
	private ClinicRepository clinicRepository;

	@Override
	public User handle(CreateClinicParameter c) {
		
		//create a new Clinic account
		
		Clinic clinic = new Clinic();
		
		clinic.setAddress(c.getAddress());
		clinic.setCabinet(c.getCabinetName());
		
		
		System.out.println("clinic should be created at this moment!");
		
		return null;
	}
}
