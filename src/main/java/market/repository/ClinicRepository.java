package market.repository;

import market.domain.clinic.Clinic;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface ClinicRepository extends MongoRepository<Clinic, String>{

}
