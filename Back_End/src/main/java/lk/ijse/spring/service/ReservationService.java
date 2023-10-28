package lk.ijse.spring.service;

import lk.ijse.spring.dto.RentalDetail_DTO;
import lk.ijse.spring.dto.ReservationDTO;

import java.util.ArrayList;

public interface ReservationService {
    public void updateReservation(String id,String status);
    public ArrayList<ReservationDTO> getAllReservation();
    public ArrayList<RentalDetail_DTO> getAllReservationUsingEmail(String mail);
}
