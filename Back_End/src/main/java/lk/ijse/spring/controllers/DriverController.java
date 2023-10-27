package lk.ijse.spring.controllers;

import lk.ijse.spring.dto.DriverDTO;
import lk.ijse.spring.service.DriverService;
import lk.ijse.spring.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("driver")
@CrossOrigin
public class DriverController{
    @Autowired
    private DriverService service;

    @PostMapping
    public ResponseUtil addDriver(DriverDTO dto){
        service.addDriver(dto);
        return new ResponseUtil("Ok",dto.getDriverID()+ " Added Successfully.",null);
    }
}
