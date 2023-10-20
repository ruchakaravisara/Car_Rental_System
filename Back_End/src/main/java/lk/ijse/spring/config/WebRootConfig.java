package lk.ijse.spring.config;

import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;

@Configuration
@Import({JpaConfig.class})
//componentscan eka danna metanata
public class WebRootConfig {

    //this Config class is assigned for pojo's which is processing
    //DAOs and Business of the application
    public WebRootConfig(){
        System.out.println("WebRootConfig");
    }

    @Bean
    public ModelMapper modelMapper(){
        return new ModelMapper();
    }
}
