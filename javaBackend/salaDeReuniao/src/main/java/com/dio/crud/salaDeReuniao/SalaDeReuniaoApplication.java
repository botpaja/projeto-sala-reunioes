package com.dio.crud.salaDeReuniao;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Contact;
import io.swagger.v3.oas.annotations.info.Info;
import io.swagger.v3.oas.annotations.info.License;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@OpenAPIDefinition(
		info = @Info(
				title = "Sala de Reunião",
				description = "API Rest para gerenciamento de uma sala de reunião",
				version = "1.0.0",
				contact = @Contact(
						name = "Wiliam Eduardo",
						url = "https://github.com/wiltzl",
						email = "wiliam_eduardo@yahoo.com.br"),
				license = @License(
						name = "Apache 2.0",
						url = "https://www.apache.org/licenses/LICENSE-2.0.html")))

public class SalaDeReuniaoApplication {

	public static void main(String[] args) {
		SpringApplication.run(SalaDeReuniaoApplication.class, args);
	}

}
