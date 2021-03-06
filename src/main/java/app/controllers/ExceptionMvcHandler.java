package app.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import app.validator.ValidationException;

@ControllerAdvice
public class ExceptionMvcHandler extends ResponseEntityExceptionHandler{

	@ExceptionHandler(value={ValidationException.class})
	protected ResponseEntity<?> handler(ValidationException e)
	{
		
		
		return new ResponseEntity<Object>(e.getErrors(), HttpStatus.BAD_REQUEST);
	}
}
