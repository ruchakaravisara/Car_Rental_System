package lk.ijse.spring.service.impl;

import lk.ijse.spring.dto.RentalDetail_DTO;
import lk.ijse.spring.dto.ReservationDTO;
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
        return null;
    }

    @Override
    public ArrayList<RentalDetail_DTO> getAllReservationUsingEmail(String mail) {
        return null;
    }
}
