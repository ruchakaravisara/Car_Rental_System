package lk.ijse.spring.service;

import lk.ijse.spring.dto.CustomerDTO;

import java.util.ArrayList;

public interface CustomerService {
     void addCustomer(CustomerDTO dto);
     void deleteCustomer(String id);
     void updateCustomer(CustomerDTO dto);
     ArrayList<CustomerDTO> getAllCustomers();
     void updateCustomerReservation(String nic,String status);
     CustomerDTO searchCustomerByName(String name);
     CustomerDTO searchCustomerByEmail(String email);
     CustomerDTO searchCustomerByEmailAndPassword(String email,String password);
}
