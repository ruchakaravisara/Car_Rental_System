package lk.ijse.spring.service;

import lk.ijse.spring.dto.DriverDTO;

import java.util.ArrayList;

public interface DriverService {
     void addDriver(DriverDTO dto);
     void updateDriver(DriverDTO dto);
     void deleteDriver(String id);
     ArrayList<DriverDTO> getAllDrivers();
}
