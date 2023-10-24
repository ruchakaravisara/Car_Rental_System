package lk.ijse.spring.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class CarDTO {
    private String registrationNumber;
    private String type;
    private String brand;
    private String model;
    private String fuelType;
    private String transmissionType;
    private int numberOfPassengers;
    private String color;
    private long lastServiceMileage;
    private int freeMileage;
    private int freeMonthlyMileage;
    private String frontImageLocation;
    private String sideImageLocation;
    private String backImageLocation;
    private String bgTransparentImageLocation;
    private double dailyRate;
    private double monthlyRate;
    private double priceForExtraKM;
    private String availability;
    private MultipartFile img1;
    private MultipartFile img2;
    private MultipartFile img3;
    private MultipartFile img4;
}
