package lk.ijse.spring.service.impl;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import lk.ijse.spring.dto.CartDTO;
import lk.ijse.spring.dto.RentalDTO;
import lk.ijse.spring.dto.Rental_DTO;
import lk.ijse.spring.entity.Car;
import lk.ijse.spring.entity.Customer;
import lk.ijse.spring.entity.Rental;
import lk.ijse.spring.entity.RentalDetail;
import lk.ijse.spring.repo.CarRepo;
import lk.ijse.spring.repo.CustomerRepo;
import lk.ijse.spring.repo.RentalRepo;
import lk.ijse.spring.service.RentalService;
import lk.ijse.spring.util.CountDays;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.transaction.Transactional;
import java.io.File;
import java.io.IOException;
import java.net.URISyntaxException;
import java.time.LocalDate;
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
        String setRentalId = generateRentalId();
        String returnLocation = dto.getReturnLocation();
        String pickupLocation = dto.getPickupLocation();
        String mail = dto.getMail();

        Customer customer = customerRepo.findCustomerByEmail(mail);
        System.out.println(customer);


        Rental rental = new Rental();

        rental.setRentalId(setRentalId);
        rental.setCustomer(customer);
        rental.setDate(LocalDate.now());
        rental.setPickupLocation(pickupLocation);
        rental.setReturnLocation(returnLocation);
        rental.setRentalDetailList(new ArrayList<>());


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
