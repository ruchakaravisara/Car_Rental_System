package lk.ijse.spring.controllers;

import lk.ijse.spring.dto.Payment_DTO;
import lk.ijse.spring.service.PaymentService;
import lk.ijse.spring.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/payment")

public class PaymentController {
    @Autowired
    private PaymentService service;
    @PostMapping
    public ResponseUtil savePayment(@RequestBody Payment_DTO dto){

        service.addPayment(dto);
        return new ResponseUtil("Ok",dto.getRentalId()+ " Added Successfully",null);
    }
}
