package lk.ijse.spring.service.impl;

import lk.ijse.spring.dto.AdminDTO;
import lk.ijse.spring.repo.AdminRepo;
import lk.ijse.spring.service.AdminService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;

@Service
@Transactional
public class AdminServiceImpl implements AdminService {
    @Autowired
    private AdminRepo repo;
    @Autowired
    private ModelMapper mapper;

    @Override
    public void addAdmin(AdminDTO dto) {

    }

    @Override
    public void updateAdmin(AdminDTO dto) {

    }

    @Override
    public void deleteAdmin(String id) {

    }

    @Override
    public ArrayList<AdminDTO> getAllAdmin() {
        return null;
    }
}
