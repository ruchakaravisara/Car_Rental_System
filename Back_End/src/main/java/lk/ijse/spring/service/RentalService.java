package lk.ijse.spring.service;

import lk.ijse.spring.dto.RentalDTO;
import lk.ijse.spring.dto.Rental_DTO;

import java.util.ArrayList;

public interface RentalService {
    void addRental(RentalDTO dto);
    ArrayList<Rental_DTO> getAllRents();
    String generateRentalId();
    Rental_DTO searchRentByNIC(String nic);
}
