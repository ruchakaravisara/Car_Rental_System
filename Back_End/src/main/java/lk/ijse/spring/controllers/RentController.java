package lk.ijse.spring.controllers;

import lk.ijse.spring.dto.RentalDTO;
import lk.ijse.spring.service.RentalService;
import lk.ijse.spring.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/rental")
@CrossOrigin
public class RentController {
    @Autowired
    private RentalService service;

    @PostMapping
    public ResponseUtil saveReservation(RentalDTO dto){
        service.addRental(dto);
        return new ResponseUtil("Ok",dto.getMail()+ " Reservation Added",null);
    }
}
