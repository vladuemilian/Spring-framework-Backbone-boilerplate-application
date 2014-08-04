package market.validator;

import java.util.List;

import market.services.ServiceException;

import org.springframework.validation.DataBinder;

public class ValidationException extends ServiceException{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
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
