package lk.ijse.spring.service;

import lk.ijse.spring.dto.PaymentDTO;
import lk.ijse.spring.dto.Payment_DTO;

import java.util.ArrayList;

public interface PaymentService {
    public ArrayList<PaymentDTO> getAllPayments();
    void addPayment(Payment_DTO dto);
    String generatePaymentId();
}
