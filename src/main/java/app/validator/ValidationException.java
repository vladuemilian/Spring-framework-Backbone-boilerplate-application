package app.validator;

import java.util.List;

import org.springframework.validation.DataBinder;

import app.service.ServiceException;

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
