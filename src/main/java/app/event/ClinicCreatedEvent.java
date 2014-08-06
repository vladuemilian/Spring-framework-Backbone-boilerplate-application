package app.event;

import org.springframework.stereotype.Service;

import reactor.event.Event;
import reactor.function.Consumer;
import app.service.clinic.command.CreateClinic;

@Service
public class ClinicCreatedEvent implements Consumer<Event<CreateClinic>> {

	@Override
	public void accept(Event<CreateClinic> clinic) {
		System.out.println("All sparky!!! This created event has been triggered successfuly!");
	}

}
