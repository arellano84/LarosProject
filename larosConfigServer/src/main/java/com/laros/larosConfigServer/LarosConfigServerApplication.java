package com.laros.larosConfigServer;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.config.server.EnableConfigServer;

@SpringBootApplication
@EnableConfigServer
public class LarosConfigServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(LarosConfigServerApplication.class, args);
	}
}
