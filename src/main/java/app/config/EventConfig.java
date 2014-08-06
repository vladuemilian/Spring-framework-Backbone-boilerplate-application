package app.config;

import static reactor.event.selector.Selectors.$;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import reactor.core.Environment;
import reactor.core.Reactor;
import reactor.core.spec.Reactors;
import app.event.ClinicCreatedEvent;
import app.service.clinic.command.CreateClinic;

@Configuration
public class EventConfig {
	
	@Bean
	Environment env(){
		return new Environment();
	}
	
	@Bean
	Reactor createReactor(Environment env){
		Reactor reactor = Reactors.reactor(env, Environment.THREAD_POOL);

		reactor.on($(CreateClinic.class), clinicCreatedEvent);
		
		return reactor;
	}
	
	@Autowired
	private ClinicCreatedEvent clinicCreatedEvent;

}
