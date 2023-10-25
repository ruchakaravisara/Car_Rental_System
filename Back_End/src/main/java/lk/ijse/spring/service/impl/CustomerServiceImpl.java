package lk.ijse.spring.service.impl;

import lk.ijse.spring.dto.CustomerDTO;
import lk.ijse.spring.repo.CustomerRepo;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
public class CustomerServiceImpl {
    @Autowired
    private CustomerRepo repo;
    @Autowired
    private ModelMapper mapper;

    public void addCustomer(CustomerDTO dto){
        if (repo.existsById(dto.getNic())){
            throw new RuntimeException("This Customer"+dto.getNic()+"Exist..Try Again..");
        }
    }

}
