package market.models.services.user;

import java.util.List;

import market.models.services.ServiceException;

import org.springframework.stereotype.Component;
import org.springframework.validation.DataBinder;

public class ValidationException extends ServiceException{

	DataBinder dataBinder;
	
	public ValidationException(DataBinder dataBinder)
	{
		this.dataBinder=dataBinder;
	}
	

	public List<?> getErrors()
	{
		return dataBinder.getBindingResult().getAllErrors();
	}
}
