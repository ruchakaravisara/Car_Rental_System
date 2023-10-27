package lk.ijse.spring.service.impl;

import lk.ijse.spring.dto.CarDTO;
import lk.ijse.spring.service.CarService;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;

@Service
@Transactional
public class CarServiceImpl implements CarService {
    @Override
    public void addCar(CarDTO dto) {

    }

    @Override
    public void updateCar(CarDTO dto) {

    }

    @Override
    public void deleteCar(String id) {

    }

    @Override
    public CarDTO searchCarByRegistrationNumber(String registrationNumber) {
        return null;
    }

    @Override
    public ArrayList<CarDTO> getAllCars() {
        return null;
    }
}
