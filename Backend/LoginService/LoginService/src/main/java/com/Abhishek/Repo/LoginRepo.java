package com.Abhishek.Repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Abhishek.Model.User;

public interface LoginRepo  extends JpaRepository<User, Integer>{

	public boolean existsByEmailAndPassword(String email,String password);
}
