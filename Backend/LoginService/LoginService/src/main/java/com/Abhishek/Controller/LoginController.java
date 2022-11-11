package com.Abhishek.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Abhishek.Model.User;
import com.Abhishek.Services.LoginService;

@RestController
@RequestMapping("/login")
public class LoginController {

	@Autowired
	private LoginService service;
	
	
	@GetMapping("/{email}/{password}")
	public boolean Authentication(String email,String password) {
		return service.checkLogin(email, password);
	}
	
	@PostMapping("/signup")
	public User getSignedUp( @RequestBody User user) {
		return service.SigninUser(user);
	}
	
	
}
