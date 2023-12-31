package lk.ijse.spring.repo;

import lk.ijse.spring.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CustomerRepo extends JpaRepository<Customer,String> {

    Customer  findCustomerByEmailAndPassword(String email,String password);
    Customer findCustomerByNic(String nic);
    List<Customer> findCustomerByStatus(String status);
    Customer findCustomerByEmail(String email);
}
