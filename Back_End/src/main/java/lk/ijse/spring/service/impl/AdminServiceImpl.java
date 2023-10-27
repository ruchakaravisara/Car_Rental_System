package lk.ijse.spring.service.impl;

import lk.ijse.spring.dto.AdminDTO;
import lk.ijse.spring.entity.Admin;
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
        if (repo.existsById(dto.getAdminId())) {
            throw new RuntimeException("Admin "+dto.getAdminId()+" Already Exist.");
        }
        repo.save(mapper.map(dto, Admin.class));
    }

    @Override
    public void updateAdmin(AdminDTO dto) {
        if (!repo.existsById(dto.getAdminId())){
            throw new RuntimeException("Driver "+dto.getAdminId()+" Not Available.");
        }
        repo.save( mapper.map(dto, Admin.class));
    }

    @Override
    public void deleteAdmin(String id) {
        if (!repo.existsById(id)){
            throw new RuntimeException("Driver "+id+" is Not Available.");
        }
        repo.deleteById(id);
    }

    @Override
    public ArrayList<AdminDTO> getAllAdmin() {
        return null;
    }
}
