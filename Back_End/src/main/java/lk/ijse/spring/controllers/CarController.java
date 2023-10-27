package lk.ijse.spring.controllers;

import lk.ijse.spring.dto.CarDTO;
import lk.ijse.spring.service.CarService;
import lk.ijse.spring.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
}
