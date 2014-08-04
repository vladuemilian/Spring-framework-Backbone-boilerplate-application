package market.services;

import org.springframework.beans.factory.annotation.Autowired;

import reactor.core.Reactor;
import reactor.event.Event;

public class EventCommandDecoratee<TParam, TReturn> implements ICommand<TParam, TReturn> {
	
	private ICommand<TParam, TReturn> decoratee;
	
	private Class<?> event;

	@Autowired
	Reactor reactor;
	
	public EventCommandDecoratee(ICommand<TParam, TReturn> decoratee, Class<?> event) {
		this.decoratee=decoratee;
		this.event=event;
	}
	
	@Override
	public TReturn handle(TParam param) {

		
		TReturn returnData = this.decoratee.handle(param);
		
		System.out.println("Start Event Command Decoratee!");
		reactor.notify(event, Event.wrap(returnData));
		
		return returnData;
	}
}
