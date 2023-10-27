package lk.ijse.spring.service;

import lk.ijse.spring.dto.CarDTO;

import java.util.ArrayList;

public interface CarService {
    void addCar(CarDTO dto);
    void updateCar(CarDTO dto);
    void deleteCar(String id);
    CarDTO searchCarByRegistrationNumber(String registrationNumber);
    ArrayList<CarDTO> getAllCars();
}
