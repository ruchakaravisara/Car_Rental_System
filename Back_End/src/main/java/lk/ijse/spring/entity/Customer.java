package lk.ijse.spring.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.Id;


@Entity
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Data
public class Customer {
    private String name;
    @Id
    private String nic;
    private String drivingLicense;
    private String email;
    private String password;
    private String contactNumber;
    private String address;
    private String imageLocation;
    private String status;


}
