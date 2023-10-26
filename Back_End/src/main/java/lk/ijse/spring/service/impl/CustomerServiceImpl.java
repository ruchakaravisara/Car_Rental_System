package lk.ijse.spring.service.impl;

import lk.ijse.spring.dto.CustomerDTO;
import lk.ijse.spring.entity.Customer;
import lk.ijse.spring.repo.CustomerRepo;
import lk.ijse.spring.service.CustomerService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.io.File;
import java.io.IOException;
import java.net.URISyntaxException;
import java.util.ArrayList;

@Service
@Transactional
public class CustomerServiceImpl implements CustomerService {
    @Autowired
    private CustomerRepo repo;
    @Autowired
    private ModelMapper mapper;


    @Override
    public void addCustomer(CustomerDTO dto) {
        if (repo.existsById(dto.getNic())){
            throw new RuntimeException("This Customer"+dto.getNic()+"Exist..Try Again..");
        }
        try {
            String projectPath = new File(this.getClass().getProtectionDomain().getCodeSource().getLocation().toURI()).getParentFile().getParentFile().getAbsolutePath();
            File uploadDir = new File(projectPath + "/uploads");
            System.out.println(projectPath);
            uploadDir.mkdir();

            dto.getImg().transferTo(new File(uploadDir.getAbsolutePath() + "/" + dto.getImg().getOriginalFilename()));
            dto.setImageLocation("uploads/"+dto.getImg().getOriginalFilename());
            repo.save(mapper.map(dto, Customer.class));

        } catch (URISyntaxException | IOException e) {
            e.printStackTrace();
        }
    }

    @Override
    public void deleteCustomer(String id) {
        if (!repo.existsById(id)) {
            throw new RuntimeException(id+ " Customer is not available, please check the ID before delete.!");
        }
        repo.deleteById(id);
    }

    @Override
    public void updateCustomer(CustomerDTO dto) {
        if (!repo.existsById(dto.getNic())){
            throw new RuntimeException("Customer"+dto.getNic()+"Not available");
        }
        Customer map = mapper.map(dto, Customer.class);
        repo.save(map);
    }

    @Override
    public ArrayList<CustomerDTO> getAllCustomers() {
        return mapper.map(repo.findAll(), new TypeToken<ArrayList<CustomerDTO>>() {
        }.getType());
    }

    @Override
    public void updateCustomerReservation(String nic, String status) {
        Customer cus = repo.findCustomerByNic(nic);
        CustomerDTO customer = new CustomerDTO(cus.getName(), cus.getNic(), cus.getDrivingLicense(), cus.getEmail(), cus.getPassword(), cus.getContactNumber(), cus.getAddress(), cus.getImageLocation(), status);
        repo.save(mapper.map(customer,Customer.class));
    }

    @Override
    public CustomerDTO searchCustomerByName(String name) {
        return null;
    }

    @Override
    public CustomerDTO searchCustomerByEmail(String email) {
        Customer customerEmail = repo.findCustomerByEmail(email);
        return mapper.map(customerEmail,CustomerDTO.class);
    }

    @Override
    public CustomerDTO searchCustomerByEmailAndPassword(String email, String password) {
        return mapper.map(repo.findCustomerByEmailAndPassword(email, password),CustomerDTO.class);
    }
}
