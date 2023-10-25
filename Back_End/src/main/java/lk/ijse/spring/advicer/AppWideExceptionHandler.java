package lk.ijse.spring.advicer;

import lk.ijse.spring.util.ResponseUtil;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
@CrossOrigin
public class AppWideExceptionHandler {
    public ResponseUtil handleException(RuntimeException e){
        return new ResponseUtil("500", e.getMessage(),"");
    }
}
