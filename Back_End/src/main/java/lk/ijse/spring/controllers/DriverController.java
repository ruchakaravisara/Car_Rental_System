package lk.ijse.spring.controllers;

import lk.ijse.spring.dto.DriverDTO;
import lk.ijse.spring.service.DriverService;
import lk.ijse.spring.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("/driver")
@CrossOrigin
public class DriverController{
    @Autowired
    private DriverService service;

    @PostMapping
    public ResponseUtil addDriver(@RequestBody DriverDTO dto){
        service.addDriver(dto);
        return new ResponseUtil("Ok",dto.getDriverID()+ " Added Successfully.",null);
    }
    @PutMapping
    public ResponseUtil updateCustomer(@RequestBody DriverDTO dto){
        service.updateDriver(dto);
        return new ResponseUtil("Ok",dto.getDriverID()+": Updated.",null);
    }
    @DeleteMapping(params = "id")
    public ResponseUtil deleteCustomer(String id){
        service.deleteDriver(id);
        return new ResponseUtil("Ok",id+" : Deleted.",null);
    }
    @GetMapping
    public ResponseUtil getAllDrivers(){
        ArrayList<DriverDTO> allDrivers = service.getAllDrivers();
        return new ResponseUtil("Ok","Done.",allDrivers);
    }
}
