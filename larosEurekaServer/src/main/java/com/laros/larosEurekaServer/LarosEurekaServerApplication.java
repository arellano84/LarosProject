package com.laros.larosEurekaServer;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

@SpringBootApplication
@EnableEurekaServer
public class LarosEurekaServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(LarosEurekaServerApplication.class, args);
	}
}
