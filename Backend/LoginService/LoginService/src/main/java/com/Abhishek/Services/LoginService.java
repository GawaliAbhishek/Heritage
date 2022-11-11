package com.Abhishek.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Abhishek.Model.User;
import com.Abhishek.Repo.LoginRepo;

@Service
public class LoginService {

	
	@Autowired
	private LoginRepo repo;
	
	
	public boolean checkLogin(String email,String password) {
		return repo.existsByEmailAndPassword(email, password);
	}
	
	
	public User SigninUser(User user) {
		return repo.save(user);
	}
	
}
