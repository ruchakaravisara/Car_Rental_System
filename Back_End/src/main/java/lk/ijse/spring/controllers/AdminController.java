package lk.ijse.spring.controllers;

import lk.ijse.spring.dto.AdminDTO;
import lk.ijse.spring.service.AdminService;
import lk.ijse.spring.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/admin")
@CrossOrigin
public class AdminController {
    @Autowired
    private AdminService service;

    @PostMapping
    public ResponseUtil addAdmin(AdminDTO dto){
        service.addAdmin(dto);
        return new ResponseUtil("Ok", dto.getAdminId()+"Added",null);
    }
    @PutMapping
    public ResponseUtil updateAdmin(@RequestBody AdminDTO dto){
        service.updateAdmin(dto);
        return new ResponseUtil("Ok",dto.getAdminId()+": Updated!",null);
    }
}
