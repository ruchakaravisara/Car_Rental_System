package lk.ijse.spring.service.impl;

import lk.ijse.spring.dto.RentalDetail_DTO;
import lk.ijse.spring.dto.ReservationDTO;
import lk.ijse.spring.entity.Customer;
import lk.ijse.spring.entity.Rental;
import lk.ijse.spring.entity.RentalDetail;
import lk.ijse.spring.repo.CustomerRepo;
import lk.ijse.spring.repo.RentalRepo;
import lk.ijse.spring.repo.ReservationRepo;
import lk.ijse.spring.service.ReservationService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.Optional;

@Service
@Transactional
public class ReservationServiceImpl implements ReservationService {
    @Autowired
    private ReservationRepo repo;
    @Autowired
    private CustomerRepo customerRepo;
    @Autowired
    private RentalRepo rentalRepo;
    @Autowired
    private ModelMapper mapper;

    @Override
    public void updateReservation(String id, String status) {
        Optional<RentalDetail> byId=repo.findById(id);
        RentalDetail map = mapper.map(byId, RentalDetail.class);
        map.setStatus(status);
        repo.save(map);
    }

    @Override
    public ArrayList<ReservationDTO> getAllReservation() {
       ArrayList<ReservationDTO> lists = new ArrayList<>();
       for (RentalDetail rentalDetail : repo.findAll()){
           ReservationDTO map = mapper.map(rentalDetail, ReservationDTO.class);

           Customer customer = rentalDetail.getRental().getCustomer();
           String pickupLocation = rentalDetail.getRental().getPickupLocation();
           String returnLocation = rentalDetail.getRental().getReturnLocation();

           map.setCustomer(customer);
           map.setPickupLocation(pickupLocation);
           map.setReturnLocation(returnLocation);
           map.setRentalId(rentalDetail.getRental().getRentalId());
           map.setTotalDamageWaiverAmount(rentalDetail.getDamageWaiverAmount());
           lists.add(map);
       }
       return lists;
    }

    @Override
    public ArrayList<RentalDetail_DTO> getAllReservationUsingEmail(String mail) {
        Customer customerByEmail = customerRepo.findCustomerByEmail(mail);
        String nic = customerByEmail.getNic();
        System.out.println(nic);
        String latestRentUsingNIC = rentalRepo.findLatestRentUsingNIC(nic);

        ArrayList<RentalDetail_DTO> list = new ArrayList<>();
        Rental rentUsingRentId = rentalRepo.findRentUsingRentId(latestRentUsingNIC);
        System.out.println("v"+latestRentUsingNIC);
        System.out.println(rentUsingRentId.getRentalId());


        for (RentalDetail rentalDetail : repo.findAll()) {
            if (rentalDetail.getRental().getRentalId() ==rentUsingRentId.getRentalId()){
                RentalDetail_DTO map = mapper.map(rentalDetail, RentalDetail_DTO.class);
                map.setReturnLocation(rentUsingRentId.getReturnLocation());
                map.setPickupLocation(rentUsingRentId.getPickupLocation());
                list.add(map);
            }

        }
        System.out.println(list);


        return list;
    }
}
