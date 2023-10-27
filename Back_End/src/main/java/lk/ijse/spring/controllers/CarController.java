package lk.ijse.spring.controllers;

import lk.ijse.spring.dto.CarDTO;
import lk.ijse.spring.service.CarService;
import lk.ijse.spring.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/car")
@CrossOrigin
public class CarController {
    @Autowired
    private CarService service;

    @PostMapping
    public ResponseUtil addCar(CarDTO dto){
        service.addCar(dto);
        return new ResponseUtil("OK",dto.getRegistrationNumber()+ " Added.!",null);
    }
    @PutMapping
    public ResponseUtil updateCar(@RequestBody CarDTO dto){
        service.updateCar(dto);
        return new ResponseUtil("Ok",dto.getRegistrationNumber()+": Updated.",null);
    }
    @DeleteMapping(params = "registrationNumber")
    public ResponseUtil deleteCar(String registrationNumber){
        service.deleteCar(registrationNumber);
        return new ResponseUtil("Ok",registrationNumber+" : Deleted",null);
    }
}
