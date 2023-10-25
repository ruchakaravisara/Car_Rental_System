package lk.ijse.spring.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class CartDTO {
    private String id;
    private Object file;
    private String filename;
    private String pickUpdate;
    private String returnDate;
    private String driver;
}
