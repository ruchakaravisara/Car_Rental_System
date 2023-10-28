package lk.ijse.spring.controllers;

import lk.ijse.spring.service.ReservationService;
import lk.ijse.spring.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/rentalDetail")
@CrossOrigin
public class ReservationController {
    @Autowired
    private ReservationService service;

    @PutMapping()
    public ResponseUtil updateReservation(@RequestParam String id, @RequestParam String status) {


        service.updateReservation(id,status);
        return new ResponseUtil("Ok",id+": Updated.",null);

    }
}
