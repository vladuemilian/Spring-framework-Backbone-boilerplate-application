package app.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import app.domain.clinic.Clinic;

public interface ClinicRepository extends MongoRepository<Clinic, String>{

}
