package market.controllers.api.v1dot0.user;

import market.models.user.account.clinic.Clinic;
import market.models.user.account.clinic.ClinicRepositoryInterface;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;


@Controller
@ResponseBody
public class ClincController {
	
	public static enum Status {
		NEW,
		PENDING,
		PROCESSED
		//api/v1/clinic?status=NEW
		//ClinicController.Status.NEW
		
	}
	
	@Autowired
	ClinicRepositoryInterface clinicRepo;
	
	@RequestMapping(value="/api/v1.0/user/{userId}/clinic", method=RequestMethod.POST)
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
	
}
