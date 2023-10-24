package lk.ijse.spring.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.time.LocalDate;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class Driver {
    @Id
    private String driverId;
    private String name;
    private String nic;
    private String address;
    private String drivingLicense;
    private LocalDate dob;
    private String status;
}
