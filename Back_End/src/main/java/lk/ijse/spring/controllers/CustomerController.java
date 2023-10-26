package lk.ijse.spring.controllers;

import lk.ijse.spring.dto.CustomerDTO;
import lk.ijse.spring.service.CustomerService;
import lk.ijse.spring.util.ResponseUtil;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("/customer")
@CrossOrigin
public class CustomerController {
    @Autowired
   private CustomerService service;

    @PostMapping
    public ResponseUtil addCustomer(CustomerDTO dto){
        service.addCustomer(dto);
        return new ResponseUtil("Ok","Successfully Added",null);
    }

    @DeleteMapping(params = {"id"})
    public ResponseUtil deleteCustomer(String id){
        service.deleteCustomer(id);
        return new ResponseUtil("Ok","Successfully Deleted",id);
    }

    @PutMapping
    public ResponseUtil updateCustomer(CustomerDTO dto){
        service.updateCustomer(dto);
        return new ResponseUtil("Ok",dto.getNic()+": Updated.!",null);
    }

    @GetMapping
    public ResponseUtil getAllCustomers(){
        ArrayList<CustomerDTO> allCustomers = service.getAllCustomers();
        return new ResponseUtil("OK"," Done",allCustomers);
    }
    @GetMapping(params = "email")
    public ResponseUtil checkLogCustomer(String email,String password) {
        CustomerDTO dto = service.searchCustomerByEmailAndPassword(email,password);
        return new ResponseUtil("OK", "Logging", dto);
    }
}
