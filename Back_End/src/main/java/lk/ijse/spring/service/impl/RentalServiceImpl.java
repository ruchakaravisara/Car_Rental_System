package lk.ijse.spring.service.impl;

import lk.ijse.spring.dto.RentalDTO;
import lk.ijse.spring.dto.Rental_DTO;
import lk.ijse.spring.repo.CarRepo;
import lk.ijse.spring.repo.CustomerRepo;
import lk.ijse.spring.repo.RentalRepo;
import lk.ijse.spring.service.RentalService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;

@Service
@Transactional
public class RentalServiceImpl implements RentalService {
    @Autowired
    private RentalRepo repo;
    @Autowired
    private CarRepo carRepo;
    @Autowired
    private CustomerRepo customerRepo;
    @Autowired
    private ModelMapper mapper;

    @Override
    public void addRental(RentalDTO dto) {

    }

    @Override
    public ArrayList<Rental_DTO> getAllRents() {
        return null;
    }

    @Override
    public String generateRentalId() {
        return null;
    }

    @Override
    public Rental_DTO searchRentByNIC(String nic) {
        return null;
    }
}
