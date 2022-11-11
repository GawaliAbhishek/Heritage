package com.Abhishek.Repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Abhishek.Model.Sitedata;

public interface SiteDataRepo extends JpaRepository<Sitedata, Integer> {
 
	
	public Sitedata findByName(String name);
}
