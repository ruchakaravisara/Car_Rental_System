package lk.ijse.spring.service;

import lk.ijse.spring.dto.Payment_DTO;

public interface PaymentService {
    void addPayment(Payment_DTO dto);
    String generatePaymentId();
}
