package app.service;

import org.springframework.validation.Validator;

public class ValidatorCommandDecoratee<TParam, TReturn> implements ICommand<TParam, TReturn>{

	private Validator validator;
	private ICommand<TParam, TReturn> command;
	
	public ValidatorCommandDecoratee(ICommand<TParam, TReturn> command, Validator validator) {
		this.validator=validator;
		this.command=command;
	}

	@Override
	public TReturn handle(TParam query) {
	
		//handle de command using validator
		
		System.out.println("Start Validator Command Decoratee!");
		
		return this.command.handle(query);
	}
}
