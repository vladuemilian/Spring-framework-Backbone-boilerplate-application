package market.controllers;

import market.models.services.user.ValidationException;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice
public class ExceptionMvcHandler extends ResponseEntityExceptionHandler{

	@ExceptionHandler(value={ValidationException.class})
	protected ResponseEntity<?> handler(ValidationException e)
	{
		
		
		return new ResponseEntity<Object>(e.getErrors(), HttpStatus.BAD_REQUEST);
	}
}
