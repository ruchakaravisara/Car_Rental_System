package lk.ijse.spring.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class RentalDTO {
    private String rentalId;
    private String mail;
    private String pickupLocation;
    private String returnLocation;
    private List<String> rentalDetailList;
    private List<MultipartFile> file;
}
