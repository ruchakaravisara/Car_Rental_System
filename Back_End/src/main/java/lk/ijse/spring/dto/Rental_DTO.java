package lk.ijse.spring.dto;

import lk.ijse.spring.entity.Customer;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.time.LocalDate;

@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class Rental_DTO {
    private String rentalId;
    private Customer customer;
    private LocalDate date;
    private double amount;
    private double  totalDamageWaiverAmount;
    private String pickupLocation;
    private String returnLocation;
}
