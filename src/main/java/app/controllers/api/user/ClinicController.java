package app.controllers.api.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import app.domain.clinic.Clinic;
import app.domain.user.User;
import app.repository.ClinicRepository;
import app.service.ICommand;
import app.service.clinic.command.parameter.CreateClinicParameter;


@Controller
@ResponseBody
@RequestMapping(value="/api/v1.0/")
public class ClinicController {
	
	public static enum Status {
		NEW,
		PENDING,
		PROCESSED
		//api/v1/clinic?status=NEW
		//ClinicController.Status.NEW
		
	}
	
	@Autowired
	ClinicRepository clinicRepo;

	@Autowired
	@Qualifier("CreateClinic")
	private ICommand<CreateClinicParameter, User> createClinicCommand;

	
	@RequestMapping(value="user/{userId}/clinic", method=RequestMethod.POST)
	public Clinic postClinic(
			@PathVariable String userId,
			@RequestParam("cabinet") String cabinet,
			@RequestParam("contact") String contact,
			@RequestParam("address") String address,
			@RequestParam("phone") String phone,
			@RequestParam(value="website", required=false) String website
			)
	{
		Clinic clinic = new Clinic();
		clinic.setCabinet(cabinet);
		clinic.setAddress(address);
		clinic.setContact(contact);
		clinic.setPhone(phone);
		clinic.setWebsite(website);
	
		clinicRepo.save(clinic);
		
		return clinic;
	}
	
	@RequestMapping(value="/clinic", method=RequestMethod.POST)
	public Clinic createClinic(){
	
		
		this.createClinicCommand.handle(null);
		
	
		return null;
	}
}
